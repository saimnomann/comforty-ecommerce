import { client } from "@/sanity/lib/client"
import Image from "next/image"
import Link from "next/link"
import { IProduct } from "@/app/types"
import ViewCollection from "@/(components)/ViewCollection/button"
import CartToggleButton from "@/(components)/CartToggleButton/button"
import { cookies } from "next/headers"
  const products:IProduct[]=await client.fetch(`*[_type=="products"][12...15]{
     _id,
    title,
    "imageUrl": image.asset->url,
    price,
    }`)

export default async function About(){
    
 const uid=(await cookies()).get("user_id")?.value
    return(
        <main className="w-full">
            <section className="lg:w-[1110px]  mx-7 my-10 lg:mx-48 lg:my-20 lg:flex gap-x-8">
                <div className="bg-[#007580] w-full lg:w-2xl h-[478px]  px-5 lg:px-20 py-15 space-y-20">
                <div className="text-center lg:text-left space-y-2">
                    <h1 className="text-white font-bold text-xl  lg:text-[32px] font-sans">About Us - Comforty</h1>
                    <p className="text-white font-normal text-base lg:text-lg font-sans max-w-[460px] ">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
                </div>
               <ViewCollection/>
               
                </div>
                <Image src={"/Image Block.png"} alt="Chair" width={619} height={478} className="hidden lg:flex"/>
            </section>
            <section>
            <h1 className="font-sans font-semibold text-xl lg:text-[32px] text-[#272343] text-center capitalize">What makes our Brand Different</h1>
            <div className=" w-auto my-10 lg:w-[1120px] gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:h-52  lg:my-20 mx-10 lg:mx-48">
                <div className="text-left bg-[#F9F9F9] p-10 space-y-2" >
                    <Image src={"/Delivery.png"} alt="delivery" width={24} height={24}/>
                    <h2 className="font-sans text-base lg:text-xl font-normal text-[#007580] ">Next day as standard</h2>
                    <p className="font-sans text-[#007580] text-base lg:text-base font-normal">Order before 3pm and get your order the next day as standard</p>
                </div>
                <div className="text-left bg-[#F9F9F9] p-10 space-y-2" >
                    <Image src={"/Checkmark--outline.png"} alt="checkmark" width={24} height={24}/>
                    <h2 className="font-sans text-base lg:text-lg font-normal text-[#007580] ">Made by true artisans</h2>
                    <p className="font-sans text-[#007580] text-sm lg:text-base font-normal w-52">Handmade crafted goods made with real passion and craftmanship</p>
                </div>
                <div className="text-left bg-[#F9F9F9] p-10 space-y-2" >
                    <Image src={"/Purchase.png"} alt="delivery" width={24} height={24}/>
                    <h2 className="font-sans text-base lg:text-lg font-normal text-[#007580] ">Unbeatable prices</h2>
                    <p className="font-sans text-[#007580] text-sm lg:text-base font-normal">For our materials and quality you won’t find better prices anywhere</p>
                </div>
                <div className="text-left bg-[#F9F9F9] p-10 space-y-2" >
                    <Image src={"/Sprout.png"} alt="delivery" width={24} height={24}/>
                    <h2 className="font-sans text-base lg:text-lg font-normal text-[#007580] ">Recycled packaging</h2>
                    <p className="font-sans text-[#007580] text-sm lg:text-base font-normal">We use 100% recycled to ensure our footprint is more manageable</p>
                </div>
            </div>
            </section>
            <section className="w-auto mx-10 lg:w-[1110px] lg:mx-48 lg:my-40">
                <div>
                    <h1 className="text-[#272343] font-sans text-xl lg:text-[32px] font-semibold">Our Popular Products</h1>
                    <div className="grid grid-cols-1 gap-4 pt-10 lg:flex gap-x-20 lg:pt-20">
                        { 
                        products.map((prod,i)=>{
                            return(
                                   <div key={i}>
          
                                      <div className="flex flex-col text-left">
                  
                          <Link href={`products/${prod._id}`}>                       
                    <Image src={prod.imageUrl} alt="Products" width={312} height={312 } className="pb-2 "/>
                     </Link>
         <div className="flex justify-between items-center">
               <h6 className="text-[#007580] text-sm lg:text-base font-normal font-sans">{prod.title}</h6>
                   <CartToggleButton prodId={prod._id} prodPrice={prod.price} uid={uid}/>
                 
                     </div>
                     <h6 className="text-[#272343] font-sans font-semibold text-base lg:text-lg">${prod.price}</h6>
        </div>
               
                </div>
                            )
                        })
                    }
                        
                    </div>
                </div>
            </section>
        </main>
    )
}