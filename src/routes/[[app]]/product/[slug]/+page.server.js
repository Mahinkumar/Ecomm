
import { db } from '$lib/server/db/index';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { products } from '$lib/server/db/schema';
import { carts } from '$lib/server/db/schema.js';
import { asc, desc } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';


export async function load({ params }) {
    const details = await db.select().from(products).where(eq(products.url, params.slug));
    const detail2 = await db.select().from(carts).where(eq(carts.product_id, details[0].product_id));
    return {
        details,detail2
    }
}

export const actions = {
    update_cart: async ({ cookies,request }) => {
        let uid = cookies.get('user_id');
        
        const data = await request.formData();

        if (uid==undefined){
            throw redirect(303, '/login');
        }else{
        
        let cnt = data.get("itemcount");
        const pid = data.get("prodid");

        if (cnt === ''){
            return;
        }
        
        const cart = await db.select().from(carts).where(eq(carts.product_id, pid));
        
        
        if (cart.length == false) {
            const cart_sn = await db.select().from(carts).orderBy(desc(carts.sno));
            console.log(cart_sn)
            let cart_s;
            if (cart_sn[0] === undefined){
                cart_s = 1;
            }else{
                cart_s = Number(cart_sn[0].sno) + 1
            }
            
            await db.insert(carts).values({ sno: cart_s, cart_id: 1, user_id: 3, product_id: pid, quantity: cnt });
        } else {
            let count;
            count = Number(cart[0].quantity) + Number(cnt);
            if (count >= 0) {
                await db.update(carts).set({ quantity: count }).where(eq(carts.product_id, pid));
            }

        }
    }
    },
    search: async ({ request }) => {
        const data = await request.formData();
        let search = data.get("searcher");
        let string = "/search/" + search
        throw redirect(303, string);
    },
};