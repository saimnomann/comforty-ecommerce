"use client"
import { toast } from "sonner";
import Image from "next/image";
import { useCountContext } from "../CountContext/countContext";
import { cartItem } from "@/app/types";
export default function DeleteButton({p_id,uid,cart,setCart}:{p_id:string,uid:string,cart:cartItem[],setCart:React.Dispatch<React.SetStateAction<cartItem[]>>}){
    const {setCount}=useCountContext()
    const handleSubmit=async()=>{
    try{
        setCart(prev=>prev.filter(item=>item.prod_id!=p_id))
        setCount((prev)=>prev-1)
        toast.success("Item Deleted Successfully")
     const res=await fetch(`/api/cart`,{
            method:"DELETE",
            body:JSON.stringify({
                id:p_id,
                user_id:uid
            })
            
        })
        if(!res.ok){
            throw new Error("Cannot Delete Item")
        }
   
    }
    catch(err){
        setCart(cart)
        setCount((prev)=>prev+1)
        toast.error(`${err as string}`)
    }
 
}
return(
    <button onClick={handleSubmit}>
    <Image src={"/deleteLogo.png"} alt="delete" width={24} height={24} className="hover:cursor-pointer"></Image></button>
)

}