"use client"
import { createContext, useContext,useEffect,useState } from "react";
interface IType{
    count:number,
    setCount:React.Dispatch<React.SetStateAction<number>>
}
const baseUrl=process.env.NEXT_PUBLIC_BASE_URL
const CountContext=createContext<IType|null>(null)

export function useCountContext(){
    const context=useContext(CountContext)
    if(!context){
        throw new Error("useCountContext must be used within CartProvider");
    }
    return context
}
export default  function CountProvider({children,user_Id}:{children:React.ReactNode,user_Id:string}) {
    const[count,setCount]=useState(0)
    useEffect(()=>{
fetch(`${baseUrl}/api/cart?user_Id=${user_Id}`,{
        method:"GET",
    })

.then(async(res)=>{
 const data = await res.json();
      setCount(data.items.length);})
    .catch((err) => {
    return(`${err as string}`)
    })
    },[user_Id])

    return(
        <CountContext.Provider value={{count,setCount}}>
        {children}
        </CountContext.Provider>

    )
}
