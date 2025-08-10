"use client"
import { useRouter } from "next/navigation";

export default function HomeButton(){
const {push}=useRouter()
const handleClick=()=>{
push("/")
}
return(
    <button className="bg-[#029FAE] font-bold text-base shadow-md hover:cursor-pointer hover:scale-105 w-30 h-10 rounded-sm" onClick={handleClick}>Back To Home</button>
)
}