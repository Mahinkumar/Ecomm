import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db/index';
import { eq, lt, gte, ne ,ilike} from 'drizzle-orm';
import { products } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';


export async function load({ params }) {
    let string = "%" + params.slug + "%"
    const details = await db.select().from(products).where(ilike(products.name,string));
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


