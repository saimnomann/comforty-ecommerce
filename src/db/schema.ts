import { pgTable,varchar,integer, serial } from "drizzle-orm/pg-core";
export const cartTable=pgTable("cart",{
    id:serial("id").primaryKey(),
user_id:varchar("user_id"),
product_Id:varchar("product_id",{length:255}),
quantity:integer("quantity").default(1),
price:integer("price"),

})
export type cartSelect=typeof cartTable.$inferSelect
export type cartInsert=typeof cartTable.$inferInsert