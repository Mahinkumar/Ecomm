import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db/index';
import { eq, lt, gte, ne ,ilike} from 'drizzle-orm';
import { products } from '$lib/server/db/schema';


export async function load({ params }) {
    let string = "%" + params.slug + "%"
    const details = await db.select().from(products).where(ilike(products.name,string));
    return{
        details
    }
}


