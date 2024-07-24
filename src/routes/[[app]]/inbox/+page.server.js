import { db } from '$lib/server/db/index';
import { user } from '$lib/server/db/schema';
import { eq, lt, gte, ne,and } from 'drizzle-orm';
import { transactions } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import { sales } from '../../../lib/server/db/schema.js';

export const load = (async ({cookies}) => {
    let uid = cookies.get('user_id');
    const all = await db.select().from(transactions).where(eq(transactions.user_id,uid));
    return {     
        all
    };
});

export const actions = {
    viewtxn: async ({ request,cookies}) => {
        const data = await request.formData();
        let tid = data.get("tid");
        let uid = cookies.get("user_id");
        const all = await db.select().from(sales).where(and(eq(sales.user_id,uid),eq(sales.transaction_id,tid)));
        console.log(all)
    },  
};