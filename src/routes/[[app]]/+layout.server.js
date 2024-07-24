import { db } from '$lib/server/db/index';
import { products } from '$lib/server/db/schema';
import { carts } from '$lib/server/db/schema.js';
import { eq, lt, gte, ne, and } from 'drizzle-orm';

export const load = (async ({ cookies }) => {
    let name = cookies.get('name');
    const uid = cookies.get('user_id');
    const sections = await db.selectDistinct([products.section]).from(products);
    const sect = sections.map((obj) => obj['0']);
    if(name!==undefined && uid!==undefined){
        let cart = await db.select().from(carts).where(and(eq(carts.user_id, uid), ne(carts.quantity, 0)));
        const prod_count = cart.length;
        return {
            sect, prod_count,name
        }
    }

    let prod_count = 0;
    name = "Log in";
    return {
        sect, prod_count,name
    };
});


