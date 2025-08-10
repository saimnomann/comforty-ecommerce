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
export default function CartToggleButton({prodId,prodPrice}:AddToCartButton){
    const [InCart,setInCart]=useState(false)
    const  handleSubmit=async()=>{
if(!InCart){
    try{
        const res=await fetch("/api/cart",{
    method:"POST",
    body:JSON.stringify({
    product_Id:prodId,
    price:prodPrice,
    
})
}
)
setInCart(true)
if(!res.ok){
    throw new Error("Unable to Add Product")
}
toast.success("Item Added To Cart")
}
catch(err){
    toast.error(`${err as string}`)
}
}
else{
    try{
    const res=await fetch("/api/cart",{
        method:"DELETE",
        body:JSON.stringify({
            product_Id:prodId
        })
    })
    if(!res.ok){
        throw new Error("Item Not Deleted")
    }
    setInCart(false)
    toast.success("Item Removed From Cart")
    }
    catch(err){
        toast.error(`${err as string}`)
    }
}
}
return(

<button  onClick={handleSubmit} className="hover:cursor-pointer ">
     <Image src={InCart?"/Add Cart.png":"/cart.png" }alt="Cart" width={24} height={24}/></button>)
}

