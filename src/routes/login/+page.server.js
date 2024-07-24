
import { redirect } from '@sveltejs/kit';

import { db } from '$lib/server/db/index';
import { eq, lt, gte, ne ,desc} from 'drizzle-orm';
import { user } from '$lib/server/db/schema.js';


export const actions = {
	Login: async ({ cookies,request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
        const encoder = new TextEncoder();
        const encode_pass = encoder.encode(password);
        const sha256sum = await crypto.subtle.digest("SHA-256", encode_pass)

        const hashArray = Array.from(new Uint8Array(sha256sum)); // convert buffer to byte array
        const hashHex = hashArray
            .map((b) => b.toString(16).padStart(2, "0"))
            .join(""); // convert bytes to hex string

        let user_ver = await db.select().from(user).where(eq(user.email, email));

        if (user_ver.length != false){
            if (user_ver[0].password_hash == hashHex){
                cookies.set('name', user_ver[0].name, { path: '/',maxAge: 60*60*24 });
                cookies.set('user_id', user_ver[0].user_id, { path: '/',maxAge: 60*60*24 });
                cookies.set('sessionToken', user_ver[0].password_hash, { path: '/',maxAge: 60*60*24 });
                throw redirect(303, '/');
            }
            return { state: "Wrong Password" , success: false }
        }
        return { state: "User Does not exist" , success: false }
		
	},
    Register: async ({ cookies,request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
        const name = data.get("Name")
        const address = data.get('Address');
        const encoder = new TextEncoder();
        const encode_pass = encoder.encode(password);
        const sha256sum = await crypto.subtle.digest("SHA-256", encode_pass)

        const hashArray = Array.from(new Uint8Array(sha256sum)); // convert buffer to byte array
        const hashHex = hashArray
            .map((b) => b.toString(16).padStart(2, "0"))
            .join(""); // convert bytes to hex string

        const userno = await db.select().from(user).orderBy(desc(user.user_id));
            let ns;
            if (userno[0] === undefined){
                ns = 1;
            }else{
                ns = Number(userno[0].user_id) + 1
            }
        await db.insert(user).values({ user_id: ns, name: name, is_seller: false,is_admin: false,phone: 1,address: address,cart_id: ns, email: email, password_hash: hashHex });
        return{ success: true}
	},

};
