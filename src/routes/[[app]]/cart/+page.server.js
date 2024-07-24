import { db } from '$lib/server/db/index';
import { eq, lt, gte, ne,and, sum,desc } from 'drizzle-orm';
import { carts, products, transactions, sales } from '$lib/server/db/schema.js';
import { redirect } from '@sveltejs/kit';


export async function load({ cookies }) {
    let name = cookies.get('name');
    let uid = cookies.get('user_id');

    if (uid==undefined){
        throw redirect(303, '/login');
    }

    const details = await db.select({
        name : products.name,
        Pid :products.product_id,
        Quantity: carts.quantity,
        price: products.price,
        image_path: products.product_image

    })
    .from(carts)
    .where(and(eq(carts.user_id,uid),ne(carts.quantity,0)))
    .innerJoin(products, eq(carts.product_id, products.product_id));
    
    let total = 0;
    for (const [key, value] of Object.entries(details)) {
        total += value.price*value.Quantity;
    }

    return {
        details,total
    }
}

export const actions = {
    remove_item: async ({ cookies,request }) => {
        const data = await request.formData();
        const pid = data.get("Product_id");
        let uid = cookies.get('user_id');
        await db.delete(carts).where(and(eq(carts.product_id, pid),eq(carts.user_id,uid)));
    },
    
    add_qty: async ({ cookies,request }) => {
        const data = await request.formData();
        const pid = data.get("Product_id");
        let uid = cookies.get('user_id');
        let curr_qty = await db.select().from(carts).where(and(eq(carts.product_id, pid),eq(carts.user_id,uid)));
        
        await db.update(carts)
            .set({ quantity: curr_qty[0].quantity+1 })
            .where(and(eq(carts.product_id, pid),eq(carts.user_id,uid)));
    },

    reduce_qty: async ({ cookies,request }) => {
        const data = await request.formData();
        const pid = data.get("Product_id");
        let uid = cookies.get('user_id');
        let curr_qty = await db.select().from(carts).where(and(eq(carts.product_id, pid),eq(carts.user_id,uid)));
        
        await db.update(carts)
            .set({ quantity: curr_qty[0].quantity-1 })
            .where(and(eq(carts.product_id, pid),eq(carts.user_id,uid)));
    },

    purchase:  async ({ cookies,request }) => {
        let uid = cookies.get('user_id');
        const data = await request.formData();
        const total = data.get("total");
        const tsn = await db.select().from(transactions).orderBy(desc(transactions.transaction_id));
        let txn;
        if (tsn[0] === undefined){
            txn = 1;
        }else{
            txn = Number(tsn[0].transaction_id) + 1
        }
        const details = await db.select({
            name : products.name,
            Pid :products.product_id,
            Quantity: carts.quantity,
            price: products.price,
            image_path: products.product_image,
            stock: products.stock,
            sale: products.sales_count
        })
        .from(carts)
        .where(and(eq(carts.user_id,uid),ne(carts.quantity,0)))
        .innerJoin(products, eq(carts.product_id, products.product_id));

        
        await db.transaction(async (tx) => {
            await tx.insert(transactions).values({ transaction_id: txn, purchase_price: total, payment_method: 'Online', user_id: uid });
            for (const [key, value] of Object.entries(details)) {
                await tx.insert(sales).values({user_id: uid,product_id: value.Pid,sell_price: value.price, total_sale_amount: Number(value.Quantity)*Number(value.price),quantity_sold:value.Quantity, transaction_id: txn});
                await tx.update(products).set({stock: value.stock-value.Quantity,sales_count: value.sale+value.Quantity }).where(eq(products.product_id,value.Pid))
                await tx.delete(carts).where(and(eq(carts.product_id, value.Pid),eq(carts.user_id,uid)))
            }
            
        });

          
    },
};