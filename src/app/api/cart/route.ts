import { NextResponse, NextRequest } from "next/server";
import { cartTable } from "@/db/schema";
import database from "@/db/index"
import { eq ,and} from "drizzle-orm";
import { cartSelect } from "@/db/schema";
import { IProduct,cartItem } from "@/app/types";
import {client} from "@/sanity/lib/client"

export async function GET(request:NextRequest) {
    try {let cart:cartItem[]=[]
        let singlePrice=0
        let totalPrice=0
        const req=request.nextUrl
        const user_id=req.searchParams.get("user_Id") as string
        if (!user_id) {
            return NextResponse.json("UserId Issue")
        }
        const res = await database.select().from(cartTable).where(eq(cartTable.user_id,user_id)).orderBy(cartTable.id)
    const ids=res.map((prod)=>(prod.product_Id))
        const product:IProduct[]=await client.fetch(`*[_type=="products" && _id in $ids]{
        _id,
        title, 
        "imageUrl":image.asset->url,
        price_id
            }`,{ids})
         cart=res.map((prod)=>{
    const p=product.find((p)=>(p._id===prod.product_Id))
    if(typeof prod.price==="number" && typeof prod.quantity==="number" ){
       singlePrice=(prod.price *prod.quantity)
        totalPrice+=singlePrice
    }
  
return{
    id:prod.id,
    prod_id:prod.product_Id as string,
    price:prod.price as number,
    imageUrl:p?.imageUrl,
    quantity:prod.quantity as number,
    title:p?.title,
    singlePrice:singlePrice ,
    user_id:prod.user_id as string,
    price_id:p?.price_id

}
})
return NextResponse.json({items:cart,totalPrice:totalPrice})

        }
    catch (err) {
  
        return NextResponse.json(`${err as string}`)
    }
}
export async function POST(request: NextRequest) {
    try {
        const req = await request.json()
        const existing=await database.select().from(cartTable).where(and(eq(cartTable.product_Id,req.product_Id),eq(cartTable.user_id,req.user_id)))
      if(existing.length>0){
        return NextResponse.json({"Message":"Product Already In Cart"},{status:409})
      }
        const res = await database.insert(cartTable).values({
            user_id: req.user_id,
            product_Id: req.product_Id,
            price: req.price
        }).returning()
        if(!res) throw new Error("Data Insertion Failed")
        return NextResponse.json({ "Message": "Item Added" })
    }
    catch (err) {
        return NextResponse.json(`${err as string}`)
    }
}
export async function PATCH(request: NextRequest) {
    try {
        let new_quant
        const { id, action,user_Id } = await request.json()

         if(!user_Id){
        throw new Error("Cart is Empty")
       }
        const [existing]: cartSelect[] = await database.select().from(cartTable).where(and(eq(cartTable.product_Id, id),eq(cartTable.user_id,user_Id)))

        if (!existing.quantity) {
            throw new Error("Product Not Available")
        }
        if (action == "increase") {
            new_quant = existing.quantity + 1
            await database.update(cartTable).set({
                quantity: new_quant,
            }).where(and(eq(cartTable.product_Id, id),eq(cartTable.user_id,user_Id))).returning({
                    product_id:cartTable.product_Id,
                    quantity:cartTable.quantity
                })
        return NextResponse.json({"Message":"Quantity Increased"})
        }
        else if (action == "decrease") {
            if (existing.quantity > 1) {
                new_quant = existing.quantity - 1
                await database.update(cartTable).set({
                    quantity: new_quant,
                }).where(and(eq(cartTable.product_Id, id),eq(cartTable.user_id,user_Id))).returning({
                    product_id:cartTable.product_Id,
                    quantity:cartTable.quantity
                })
                return NextResponse.json({ "Message": "Quantity Decreased" })
            }
            else {
                await database.delete(cartTable).where(eq(cartTable.product_Id,id)).returning({
                    product_id:cartTable.product_Id,
                })
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
    try 
{
    const { id,user_id } = await request.json()
       if(!user_id){
        throw new Error("Cart is Empty")
       }
       if(!id){
        const res=await database.delete(cartTable).where(and(eq(cartTable.user_id,user_id)))
        if(!res) throw new Error("Data Deletion Failed")
        return NextResponse.json({"Message":"Deleted All Product"})
       }
        const [existing]: cartSelect[] = await database.select().from(cartTable).where(and(eq(cartTable.user_id,user_id),eq(cartTable.product_Id,id)))
        if (!existing) {
            throw new Error("Product Not Found")
        }

        const res = await database.delete(cartTable).where(and(eq(cartTable.user_id,user_id),eq(cartTable.product_Id,id))).returning()
         if(!res) throw new Error("Data Insertion Failed")
        return NextResponse.json({ "Message": "Product Deleted" })
    }
     catch (err) {
        return NextResponse.json({ "Error": `${err as string}` })
    }
}
