"use client"
import Image from "next/image"
import { useCountContext } from "../CountContext/countContext"
import { useState } from "react"
import { toast } from "sonner"
import {Minus, Plus } from "lucide-react"
interface AddToCartButton{
prodId:string,
prodPrice:number,
user_id:string
}
export default function AddToCartButton({prodId,prodPrice,user_id}:AddToCartButton){
const[click,setClick]=useState(false)
const {setCount}=useCountContext()
    const [quantity,setQuantity]=useState(1)
 const  handleSubmit=async()=>{
    if(!click){
        try{
            const res=await fetch("/api/cart",{
                method:"POST",
                body:JSON.stringify({
                    product_Id:prodId,
                    price:prodPrice,
                    user_id:user_id

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
setCount((prev)=>prev+1)
toast.success("Item Added To Cart")
setClick(true)
}
catch(err){
    toast.error(`${err as string}`)
}
}
else{
  setClick(false)
  setCount(prev=>prev-1)
}
}
const deleteProd=async()=>{
    setClick(false)
try{

    const res=await fetch("/api/cart",{
        method:"DELETE",
        body:JSON.stringify({
            user_id:user_id,
            id:prodId,
        })
    })
    if(!res.ok) throw new Error("Item Delete Failed")
    setCount(prev=>prev-1)
}
catch(err){
    toast.error(`${err as string}`)
}
}
 const updateProd = async (Action: "increase" | "decrease") => {
            if (Action == "increase") {
                setQuantity(prev=>prev+1)
                toast.success("Cart Updated Successfully")
            }
            else {
                if (quantity <= 1) {
                setQuantity(1)
                setCount(prev => prev - 1)
                 setClick(false)
                    toast.success("Item Deleted Successfully")
                    try {
                        const res = await fetch("/api/cart", {
                            method: "DELETE",
                            body: JSON.stringify({
                                user_id: user_id,
                                id: prodId,
                            })
                        })
                        if (!res.ok) throw new Error("Failed To Delete Item");
                    } catch (err) {
                        setCount((prev) => prev + 1)
                        setQuantity((prev)=>prev)
                        toast.error(`${err as string}`)
                    }
                }
                else{
                    setQuantity(prev=>prev-1)
                    toast.success("Cart Updated Successfully")
                }
            }
            try{

                const res=await fetch("/api/cart",{
                    method:"PATCH",
                    body:JSON.stringify({
                        id:prodId, 
                        action:Action,
                        user_Id:user_id
                    })
                })
                if (!res.ok) throw new Error("Failed To Delete Item");
                setQuantity((prev)=>prev)
            }catch(err){
                toast.error(`${err as string}`)
            }
        
  }
return(
    <div>
{click?(
<div className="flex gap-x-3">
   <div className="flex bg-gray-200 gap-x-3 px-3 py-1 rounded-full my-2 ">
            <button className="hover:cursor-pointer" onClick={() => updateProd("decrease")}><Minus />
            </button>
            <h3 className="font-semibold text-base">{quantity}</h3>
            <button className="hover:cursor-pointer" onClick={() => updateProd("increase")} ><Plus /></button>

        </div>
 <button onClick={deleteProd}>
<Image src={"/deleteLogo.png"} alt="delete" width={24} height={24} className="hover:cursor-pointer"></Image>
</button>

</div>

):<button className="w-52 h-13 flex  justify-between items-center px-6 py-2 rounded-md bg-[#029FAE] hover:cursor-pointer hover:scale-105 "onClick={handleSubmit}><Image src={"/cart.png"} alt="Cart" width={29} height={29}  /><h4 className="text-white font-semibold text-xl">Add To Cart</h4></button>
}   
    </div>
)
}
  