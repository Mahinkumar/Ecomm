import { db } from '$lib/server/db/index';
import { user } from '$lib/server/db/schema';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { products } from '../lib/server/db/schema';

export const load = (async () => {
    const featured1 = await db.select().from(products).where(eq(products.sales_code,1));
    const featured2 = await db.select().from(products).where(eq(products.sales_code,2));
    const featured3 = await db.select().from(products).where(eq(products.sales_code,3));
    const all =  await db.select().from(products);

    return {     
        all,featured1,featured2,featured3
    };
});