"use client"
import { cartItem } from "@/app/types"
import Image from "next/image"
import QuantityBox from "../QuantityBox/button"
import DeleteButton from "../DeleteProduct/button"
import { useState } from "react"
import CheckOut from "../Checkout/button"
export default  function CartItem({items}:{items:cartItem[]}){
const [cart,setCart]=useState(items)
const totalPrice=cart.reduce((prev,curr)=>prev+(curr.price*curr.quantity),0)

if(cart.length==0){
        return(
            <div className="min-h-96 pt-25">

            <h1 className="text-center text-2xl font-bold text-gray-300 mt-10 ">Cart is Empty</h1>
            </div>
        ) 
    }
    return(
<main className="flex flex-col mx-10 lg:flex-row gap-x-16">
    <section className="lg:ml-48 my-10 lg:min-h-90"> 
        <h1 className="font-medium text-lg lg:text-2xl font-sans text-[#111111]">Cart</h1> 
{
    cart.map((prod)=>{
        
            return(
                
                <div key={prod.id} className=" border-b border-b-white flex shadow-xs gap-x-8 py-10 lg:w-[700px] item" >

        <Image src={prod.imageUrl ??"/cart.png"} alt="Product Image" width={150} height={150}></Image>
        <div className="flex flex-col lg:flex-row justify-between w-full items-start">
        <div className="space-y-2">
        <h4 className="font-semibold font-sans text-sm lg:text-lg text-[#272343] ">{prod.title}</h4>
        <p className="text-[#757575] text-sm lg:text-base font-sans font-normal w-24">Quantity: {prod.quantity}</p>
          <div className="flex gap-x-2 lg:gap-x-4 items-center">
            <QuantityBox product_id={prod.prod_id} user_id={prod.user_id} quantity={prod.quantity} cart={cart} setCart={setCart}/>
            <DeleteButton p_id={prod.prod_id} uid={prod.user_id} cart={cart} setCart={setCart}/>
    
        </div>
        </div>
            
            <p className="text-[#111111] font-sans font-normal text-sm lg:text-base ">Price: ${(prod.price*prod.quantity).toFixed(2)}</p>
        </div>        
     </div>      
        
    )

}
)} 
    </section>
        <section className="w-full lg:w-90 lg:h-74 lg:pt-20 ">
        <h1 className="text-[#111111] text-lg lg:text-2xl font-sans font-medium pb-8">Summary</h1>
        <span className="flex justify-between font-sans text-base text-[#111111]">
        <h4>Subtotal</h4>
        <h4>${totalPrice.toFixed(2)}</h4>
        </span>
        <span className="flex justify-between font-sans text-sm lg:text-base text-[#111111] mt-8">
            <h4>Estimated Delivery & Handling</h4>
            <h4>Free</h4>
        </span>
        <span className="flex justify-between font-sans text-sm lg:text-base text-[#111111] border-t border-b  mt-10 p-4">
            <h4>Total</h4>
            <h4>${totalPrice.toFixed(2)}</h4>
        </span>
     <CheckOut cart={cart}/>
        
    </section>
</main>

)
 }

