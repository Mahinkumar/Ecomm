import { db } from '$lib/server/db/index';
import { products } from '../lib/server/db/schema';

export const load = (async () => {
const sections = await db.selectDistinct([products.section]).from(products);;
const sect = sections.map((obj) => obj['0']);
return {     
    sect
};});