import { cartItem} from "@/app/types"
import { cookies } from "next/headers"
import CartItem from "@/(components)/cartItem/page"
export default async function Cart(){
const baseUrl=process.env.NEXT_PUBLIC_BASE_URL
let data:cartItem[]=[]
try{
    const uid=(await cookies()).get("user_id")?.value
    if(!uid){
        return(
    
        <div className="h-96">

        <h1 className="text-2xl font-bold text-gray-300 font-sans">Cart is Empty</h1>
        </div>)
    }
    
     

    const res=await fetch(`${baseUrl}/api/cart?user_Id=${uid}`,{
        method:"GET",
        cache:"no-cache",
    })
    if(!res.ok){
        throw new Error("Data Fecthing Failed")
    }
    
    const result=await res.json()
    data=result.items
    if(data.length==0){
        return(
            <div className="min-h-96 pt-25">

            <h1 className="text-center text-2xl font-bold text-gray-300 mt-10 ">Cart is Empty</h1>
            </div>
        )
    }
}
catch(err){
      return (
    <div className="min-h-96 pt-25">
            <h1 className="text-center text-2xl font-bold text-red-300 mt-10 ">{err as string}</h1>
            </div>
        )
   
}

return(
<main>
<CartItem items={data}/>
</main>
)
}