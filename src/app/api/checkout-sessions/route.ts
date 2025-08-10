import Stripe from "stripe"
import { NextRequest,NextResponse } from "next/server"
import { headers } from "next/headers"
import { cartItem } from "@/app/types"
import { stripe } from "@/(components)/Stripe"
export  async function POST(req:NextRequest){
    try{
    const res:cartItem[]=await req.json()
    const headerList=await headers()
    let origin=headerList.get("origin")
    if (!origin){
       origin = "http://localhost:3000";
    
    }

const line_items:Stripe.Checkout.SessionCreateParams.LineItem[]=res.map((item)=>({
    price_data:{
        currency:"usd",
        unit_amount:item.price * 100,

   product_data:{
    name: item.title ?? "Untitled Product", // fallback if undefined
      images: [item.imageUrl ?? ""], 
   },
},
// price:item.price_id,
   quantity:item.quantity
}))
    const session=await stripe.checkout.sessions.create({
    line_items,
    mode:"payment",
    success_url:`${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:`${origin}/cart?canceled=true`,


})
return NextResponse.json({url:session.url})
}
catch(err){

 return NextResponse.json({ error: "Stripe session creation failed", details: `${err}` },)
}
}
