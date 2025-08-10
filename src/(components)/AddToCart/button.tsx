"use client"
import product from "@/sanity/product"
import Image from "next/image"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { IProduct } from "@/app/types"
interface AddToCartButton{
prodId:string,
prodPrice:number,
}
export default function AddToCartButton({prodId,prodPrice}:AddToCartButton){
 const  handleSubmit=async()=>{
    try{
        const res=await fetch("/api/cart",{
    method:"POST",
    body:JSON.stringify({
    product_Id:prodId,
    price:prodPrice,
    
})
}
)
if(!res.ok){
    throw new Error("Unable to Add Product")
}
toast.success("Item Added To Cart")
}
catch(err){
    toast.error(`${err as string}`)
}
}

return(
        <button className="w-52 h-13 flex  justify-between items-center px-6 py-2 rounded-md bg-[#029FAE] hover:cursor-pointer hover:scale-105 "><Image src={"/cart.png"} alt="Cart" width={29} height={29} onClick={handleSubmit} /><h4 className="text-white font-semibold text-xl">Add To Cart</h4></button>
)
}

