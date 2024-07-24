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
export const actions = {
    search: async ({ request }) => {
        const data = await request.formData();
        let search = data.get("searcher");
        let string = "/search/" + search
        throw redirect(303, string);
    },
};