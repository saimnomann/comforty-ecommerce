"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCountContext } from "../CountContext/countContext"
export default function CartButton(){
const {count}=useCountContext()
const router=useRouter()    
    const handleSubmit=async()=>{
           router.push("/cart")

}
    return(

        <button onClick={handleSubmit} className="hover:cursor-pointer flex gap-x-2 items-center"><Image src="/cart.png" alt="Cart" width={24} height={24}/>
       <span className="text-[#272343] text-center font-[inter] text-sm">
        Cart
        </span>
        <span className="w-5 h-5 bg-[#007580] text-white rounded-full  items-center text-sm  ">
        {count}
        </span>
        </button>
    )
}