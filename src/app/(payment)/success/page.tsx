import ClearCart from "../clearCart/page";
import { stripe } from "@/(components)/Stripe"
import Image from "next/image";
import HomeButton from "@/(components)/BackToHome/button";
export default async  function Success({searchParams}:{searchParams:Promise<{session_id:string}>}){
const {session_id}=await searchParams
if(!session_id){
    throw new Error("Please Provide Valid Session Id")
}
const {
    status,
}=await stripe.checkout.sessions.retrieve(session_id,{
    expand:["line_items","payment_intent"]
})
if(status=="open"){
}
else if(status=="complete"){
 
    return(
        <main className="w-full flex flex-col justify-center items-center text-center px-6 py-12  gap-y-4">
        <ClearCart/>
       <section className="flex  items-center gap-x-4 ">
        <Image src="/accept.png" alt="Accept" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10"/>
        <h1 className="uppercase font-bold text-base lg:text-xl">Order Confirmed</h1>
       </section>
       <section>
        <p className="text-sm font-normal lg:text-lg text-center w-full leading-relaxed">Thank you for shopping with Comforty.<br/>  
        Your order is on its way to bring comfort to your home.</p>
       </section>
       <section>
        <p className="text-sm font-normal text-gray-400"> Comforty - Making comfort a part of your home.</p>
       </section>
       <HomeButton/>
        </main>
    )
}
}