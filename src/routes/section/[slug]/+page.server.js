import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db/index';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { products } from '$lib/server/db/schema';

export async function load({ params }) {
    const details = await db.select().from(products).where(eq(products.section,params.slug));
    return{
        details
    }
}