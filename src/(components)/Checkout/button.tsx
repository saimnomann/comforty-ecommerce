"use client"
import { cartItem } from "@/app/types";
import { useRouter } from "next/navigation";
export default function CheckOut({cart}:{cart:cartItem[]}){
    const router=useRouter()

    const handleClick=async()=>{
        const result=await fetch("/api/checkout-sessions",{
            method:"POST",
            body:JSON.stringify(cart)      
                })
    const data:{url:string|null}=await result.json()
    router.push(data.url!)
            }
return(
       <button className=" w-[270px] h-15 bg-[#029FAE] text-white text-sm mx-4 lg:mx-10 mt-6 mb-10 rounded-full hover:cursor-pointer hover:scale-105" onClick={handleClick}>Checkout</button>
)
}