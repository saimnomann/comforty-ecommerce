"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"


export default function ShopButton(){
    const router=useRouter()
function onClick(){
  router.push("/products")
}
    return(
         <button type="button"
          className="bg-[#029FAE] text-white text-base rounded-lg 
          hover:cursor-pointer hover:scale-105 my-14 items-center font-[inter] font-[600] flex  gap-x-3 px-7  w-44 h-12" 
        onClick={onClick}>
        <Image src={"/arrow.png"} alt="arrow" width={24} height={24}></Image>
        Shop Now
        </button> 
    )
}