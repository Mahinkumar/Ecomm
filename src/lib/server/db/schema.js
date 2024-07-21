import { pgTable, text, integer, varchar, boolean, timestamp, time } from "drizzle-orm/pg-core";


export const user = pgTable("user",{
    user_id: integer("user_id").primaryKey(),
    name: text("name").notNull(),
    is_seller: boolean("is_seller").notNull(),
    is_admin: boolean("is_admin").notNull(),
    phone: integer("phone_number").notNull(),
    address: varchar("address").notNull(),
    cart_id: integer("cart_id").unique(),
    email: varchar("email_address").notNull(),
    password_hash: varchar("password_hash")
})

export const products = pgTable("products",{
    product_id: integer("product_id").primaryKey(),
    name: text("name").notNull(),
    seller_id: integer("seller_id").references(()=>user.user_id),
    price: integer("price"),
    stock: integer("stock"),
    section: varchar("section"),
    product_image: varchar("product_image"),
    product_description: text("product_description"),
    sales_count: integer("sales_count"),
    sales_code: integer("sales_code"),
    url: varchar("url")
})

export const sales = pgTable("sales" ,{
    user_id: integer("user_id").references(()=>user.user_id),
    product_id: integer("product_id").references(()=>products.product_id),
    sell_price: integer("sell_price"),
    total_sale_amount: integer("total_sale_amount"),
    quantity_sold: integer("quantity_sold"),
    sale_time: timestamp("sale_time"),
    transaction_id: integer("transaction_id").references(()=>transactions.transaction_id)
})

export const carts = pgTable("carts",{
    sno: integer("cart_sno").primaryKey(),
    cart_id: integer("cart_id"),
    user_id: integer("user_id").references(()=>user.user_id),
    product_id: integer("product_id").references(()=>products.product_id),
    quantity: integer("quantity")
})

export const transactions = pgTable("transactions",{
    transaction_id: integer("transaction_id").primaryKey(),
    purchase_price: integer("purchase_price").notNull(),
    payment_method: varchar("payment_method"),
    sale_time: timestamp("sale_time"),
    user_id: integer("user_id").references(()=>user.user_id),
})