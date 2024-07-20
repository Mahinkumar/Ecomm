import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db/index';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { products } from '$lib/server/db/schema';
import { carts } from '../../../lib/server/db/schema.js';



export async function load({ params }) {
    const details = await db.select().from(products).where(eq(products.url,params.slug));
    return{
        details
    }
}

export const actions = {
	update_cart: async ({request}) => {
        const data = await request.formData();
        const cnt = data.get("itemcount");
        const pid = data.get("prodid");
		await db.insert(carts).values({ cart_id: 3, user_id: 3,product_id: pid,quantity: cnt});
	},
};