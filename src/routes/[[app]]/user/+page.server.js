import { db } from '$lib/server/db/index';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { user } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
    let name = cookies.get('name');
    const details = await db.select().from(user).where(eq(user.name, name));
    return {
        details
    }
}

export const actions = {
    Delete: async ({ cookies,request}) => {
        return {success: true }
    },

    Logout: async ({ cookies }) => {
        cookies.delete('name', { path: '/' });
        cookies.delete('user_id', { path: '/' });
        cookies.delete('sessionToken', { path: '/' });
        throw redirect(303, '/login');
    },
};
