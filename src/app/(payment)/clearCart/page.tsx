import { cookies } from "next/headers"
export default async function ClearCart(){
const uid=(await cookies()).get("user_id")?.value
const baseUrl=process.env.NEXT_PUBLIC_BASE_URL
try{
const data=await fetch(`${baseUrl}/api/cart`,{
    method:"DELETE",
    body:JSON.stringify({
        user_id:uid
    })
})
if(!data.ok) throw new Error("Cart Clearing Failed")
}catch(err){
    return (`${err as string}`)
}
return null
}