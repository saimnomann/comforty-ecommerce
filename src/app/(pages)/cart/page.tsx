
import { IProduct } from "@/app/types"
import { cartSelect } from "@/db/schema"
import { client } from "@/sanity/lib/client"
import Image from "next/image"
import { toast } from "sonner"
interface cartItem{
    price:number,
    title?:string,
    imageUrl?:string,
    quantity:number
}
export default async function Cart(){
// let totalPrice=0
// let cart:cartItem[]=[]
try{
    const res=await fetch(`http://localhost:3000/api/cart`,{
        method:"GET",
        cache:"no-store",
        credentials: "include",
    })
    if(!res.ok){
        throw new Error("Data Fecthing Failed")
    }
    const data=await res.json()
    console.log(data)
//     const id=data.map((prod)=>(prod.product_Id))
//     const product:IProduct[]=await client.fetch(`*[_type=="products" && _id in $id]{
//     _id,
//     title, 
//         "imageUrl":asset->url
//         }`,{id})
// cart=data.map((prod)=>{
//     const p=product.find((p)=>(p._id===prod.product_Id))
//     if(typeof prod.price==="number" && typeof prod.quantity==="number" ){
//         totalPrice+=(prod.price *prod.quantity)
//     }
// return{
//     price:prod.price as number,
//     imageUrl:p?.imageUrl,
//     quantity:prod.quantity as number,
//     title:p?.title
// }


// })
}
catch(err){
       console.log(err)
   
}

// return(
//     <main>
//       <section className="flex flex-col">

// {
//     cart.map((prod,i)=>{
//         return(
//       <div>
//         <Image src={prod.imageUrl ??"/cart.png"} alt="Product Image" width={150} height={150}></Image>
//         <h4 className="">{prod.title}</h4>
//         <p className="">{prod.quantity}</p>
//       </div>      
        
      
//         )
//     })
//     }
//     </section>
//     </main>
// )

// }
return(
    <h1>j</h1>
)}