"use client"
import { useRouter } from "next/navigation"

export default function ViewCollection(){
    const router=useRouter()
const handleSubmit=()=>{
    router.push("/products")
}
return(
<button className="w-44 h-14 bg-[#F9F9F926] text-white font-sans font-normal text-base hover:cursor-pointer hover:scale-105" onClick={handleSubmit}>View collection</button>)
}