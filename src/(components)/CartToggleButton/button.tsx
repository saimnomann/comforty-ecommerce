"use client"
import Image from "next/image"
import { useState } from "react"
import { toast } from "sonner"
import { useCountContext } from "../CountContext/countContext"
interface AddToCartButton{
prodId:string,
prodPrice:number,
uid?:string,
}
export default function CartToggleButton({prodId,prodPrice,uid}:AddToCartButton){
    const {setCount}=useCountContext()
    const [InCart,setInCart]=useState(false)
    const  handleSubmit=async()=>{
if(!InCart){
    try{
        const res=await fetch("/api/cart",{
    method:"POST",
    body:JSON.stringify({
    product_Id:prodId,
    price:prodPrice,
    user_id:uid
})
}
)
const data=await res.json()
        if(res.status==409){
            toast.error(data.Message)
            return
        }
if(!res.ok){
    throw new Error("Unable to Add Product")
}

setInCart(true)
setCount((prev)=>prev+1)
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
            id:prodId,
            user_id:uid,

        })
    })
    if(!res.ok){
        throw new Error("Item Not Deleted")
    }
    setInCart(false)
    setCount((prev)=>prev-1)
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

