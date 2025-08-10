import { NextResponse, NextRequest } from "next/server";
import { cartTable } from "@/db/schema";
import { cookies } from "next/headers";
import database from "@/db/index"
import { v4 as uuidv4 } from "uuid";
import { eq } from "drizzle-orm";
import { cartSelect } from "@/db/schema";
import { toast } from "sonner";
export async function GET(request:NextRequest) {
    try {
        const getCookie=request.cookies
        const user_id= getCookie.get("user_id")?.value
        console.log("UserId:",user_id)
        

        if (!user_id) {
            return NextResponse.json("UserId Issue")
        
        }
        const res = await database.select().from(cartTable).where(eq(cartTable.user_id,user_id))
        console.log("Sending Data")
        return NextResponse.json(res)

    }
    catch (err) {
        console.log(err)
        return NextResponse.json(`${err as string}`)
    }
}
export async function POST(request: NextRequest) {
    try {
        const req = await request.json()
        let userId = (await cookies()).get("user_id")?.value
        if (!userId) {
            const id = uuidv4();
            (await cookies()).set("user_id", id)
            userId = id

        }
        const res = await database.insert(cartTable).values({
            user_id: userId,
            product_Id: req.product_Id,
            price: req.price
        })
        return NextResponse.json({ "Message": "Item Added" })
    }
    catch (err) {
        return NextResponse.json(`${err as string}`)
    }
}
export async function PATCH(request: NextRequest) {
    try {
        let new_quant
        const { id, action } = await request.json()
        const [existing]: cartSelect[] = await database.select().from(cartTable).where(eq(cartTable.product_Id, id))
        if (!existing.quantity) {
            throw new Error("Product Not Available")
        }
        if (action == "increase") {
            new_quant = existing.quantity + 1
            await database.update(cartTable).set({
                quantity: new_quant,
            }).where(eq(cartTable.product_Id, id))
        return NextResponse.json({"Message":"Quantity Increased"})
        }
        else if (action == "decrease") {
            if (existing.quantity > 1) {
                new_quant = existing.quantity - 1
                await database.update(cartTable).set({
                    quantity: new_quant,
                }).where(eq(cartTable.product_Id, id))
                return NextResponse.json({ "Message": "Quantity Decreased" })
            }
            else {
                await database.delete(cartTable).where(eq(cartTable.product_Id,id))
                return NextResponse.json({ "Message": "Product Deleted" })
            }
        }
        else {
            throw new Error("Invalid Action")
        }

    } catch (err) {
        return NextResponse.json({ "Error": `${err as string}` })
    }
}
export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json()
        const [existing]: cartSelect[] = await database.select().from(cartTable).where(eq(cartTable.product_Id, id))
        if (!existing) {
            throw new Error("Product Not Found")
        }
        const res = await database.delete(cartTable).where(eq(cartTable.product_Id,id))
        console.log(res)
        return NextResponse.json({ "Message": "Product Deleted" })
    } catch (err) {
        return NextResponse.json({ "Error": `${err as string}` })
    }
}