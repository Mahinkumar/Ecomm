import { db } from '$lib/server/db/index';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { user } from '$lib/server/db/schema';

export async function load({ cookies }) {
    let name = cookies.get('name');
    const details = await db.select().from(user).where(eq(user.name, name));
    return {
        details
    }
}