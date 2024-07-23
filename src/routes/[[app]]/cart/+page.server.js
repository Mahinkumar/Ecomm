import { db } from '$lib/server/db/index';
import { eq, lt, gte, ne,and, sum } from 'drizzle-orm';
import { user } from '$lib/server/db/schema';
import { carts, products } from '../../../lib/server/db/schema.js';
import { redirect } from '@sveltejs/kit';


export async function load({ cookies }) {
    let name = cookies.get('name');
    let uid = cookies.get('user_id');

    if (uid==undefined){
        throw redirect(303, '/login');
    }

    const details = await db.select({
        name : products.name,
        Pid :products.product_id,
        Quantity: carts.quantity,
        price: products.price,
        image_path: products.product_image

    })
    .from(carts)
    .where(and(eq(carts.user_id,uid),ne(carts.quantity,0)))
    .innerJoin(products, eq(carts.product_id, products.product_id));
    
    let total = 0;
    for (const [key, value] of Object.entries(details)) {
        total += value.price*value.Quantity;
    }

    return {
        details,total
    }
}

export const actions = {
    remove_item: async ({ cookies,request }) => {
        const data = await request.formData();
        const pid = data.get("Product_id");
        let uid = cookies.get('user_id');
        await db.delete(carts).where(and(eq(carts.product_id, pid),eq(carts.user_id,uid)));
    },
    
    add_qty: async ({ cookies,request }) => {
        const data = await request.formData();
        const pid = data.get("Product_id");
        let uid = cookies.get('user_id');
        let curr_qty = await db.select().from(carts).where(and(eq(carts.product_id, pid),eq(carts.user_id,uid)));
        
        await db.update(carts)
            .set({ quantity: curr_qty[0].quantity+1 })
            .where(and(eq(carts.product_id, pid),eq(carts.user_id,uid)));
    },

    reduce_qty: async ({ cookies,request }) => {
        const data = await request.formData();
        const pid = data.get("Product_id");
        let uid = cookies.get('user_id');
        let curr_qty = await db.select().from(carts).where(and(eq(carts.product_id, pid),eq(carts.user_id,uid)));
        
        await db.update(carts)
            .set({ quantity: curr_qty[0].quantity-1 })
            .where(and(eq(carts.product_id, pid),eq(carts.user_id,uid)));
    }
};