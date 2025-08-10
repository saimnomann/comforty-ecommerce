import Image from "next/image"
import {client} from "@/sanity/lib/client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { IProduct,ICategory,IHeroSection} from "../types"
import ShopButton from "@/(components)/shopButton/button"
import CartToggleButton from "@/(components)/CartToggleButton/button"
import { cookies } from "next/headers"
export default async function Home(){
const categories:ICategory[]=await client.fetch(
        ` *[_type=="categories"]{
  _id,
  title,
  "imageUrl":image.asset->url,
  products_Quantity
  
} 
    `)
  const featuredProd:IProduct[]=await client.fetch(`*[_type=="products" && "featured" in tags][1...5]{
    _id,
        title,
    badge,
    description,
    inventory,
    price,
    category-> {
      title
    },
    tags,
    "imageUrl": image.asset->url
  }
`)
  const products:IProduct[]=await client.fetch(`*[_type=="products"][0...8]
{
    _id,
  title,
    badge,
    description,
    inventory,
      price,
      priceWithoutDiscount,
      title,
      tags,
    category-> {
    _id,
    title
  },
     "imageUrl": image.asset->url,
}
`)
  const data:IHeroSection=await client.fetch(`*[_type== "herosection"][0]{
     title,
  description,
  buttonText,
  buttonLink,
  img{
    asset->{
      url
    }
  }
}`) 
const userId=(await cookies()).get("user_id")?.value
  return (
    <main className="max-w-[1100px] mx-7 md:mx-48 my-12 md:py-10">
      {/* Hero Section */}
      <section className="bg-[#F0F2F3] min-h-[650px] md:h-[850px] w-full gap-y-6 md:px-16 flex flex-col-reverse mx-auto md:flex md:flex-row md:justify-between items-center md:gap-x-4 rounded-bl-2xl ">
        <div className="space-y-2 text-left">
    <h1 className="text-sm text-[#272343] font-sans font-normal uppercase md:px-1">
      {data.title}
      </h1>
      <p className=" text-2xl md:text-6xl font-sans font-semibold text-[#272343] w-[240px] text-left md:w-[557px] ">
        {data.description}
      </p>
        <ShopButton/>
        </div>
        <div>
      <Image src={data.img.asset.url} alt="Image" width={434} height={584} className=" mt-10 md:mt-3 w-[250px] h-[350px] md:w-[434px] md:h-[584px] "/>
        </div>
      
      </section>
      {/* Featured Products Section */}
      <section className=" grid grid-cols-4 md:flex  gap-y-3 gap-x-8 w-full items-center lg:justify-between py-2 mb-9 md:mb-9">
        <Image src={"/zapier.png"} alt="company" width={65} height={40} />
        <Image src={"/pipedrive.png"} alt="company" width={87} height={70}/>
        <Image src={"/cibbank.png"} alt="company" width={95} height={80}/>
        <Image src={"/logo.png"} alt="company"width={63} height={50}/>
        <Image src={"/burntoast.png"} alt="company"width={80} height={75}/>
         <Image src={"/pd.png"} alt="company"width={90} height={85}/>
          <Image src={"/moz.png"} alt="company"width={70} height={50}/>
      </section>
      <section className="lg:h-[480px] w-full ">
        <h1 className="font-sans font-semibold text-2xl md:text-3xl text-[#272343]">Featured Products</h1>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 py-10 md:py-20 gap-y-8">
          {
            featuredProd.map((prod,i)=>{
              return(
                                          <div key={i}>
                                          
                                      <div className="relative w-fit">
                                      <div className="flex flex-col text-left">
                    {prod.badge=="New"?
                        <Badge className="absolute top-1.5 md:top-2 left-2 md:left-4 h-5 md:h-7 w-9 md:w-12 bg-[#01AD5A] text-white text-xs md:text-sm font-sans font-medium">{prod.badge}</Badge>
                        :prod.badge=="Sales"? 
                        <Badge className="absolute top-1.5 md:top-2 left-2 md:left-4 h-5 md:h-7 w-9 md:w-12 bg-[#F5813F] text-white text-xs md:text-sm font-sans font-medium">
                            {prod.badge}</Badge>:null
                    }
                          <Link href={`/products/${prod._id}`}>
                                    
                    <Image src={prod.imageUrl} alt="Featured Products" width={312} height={312 } className="pb-2 object-cover "/>
        </Link>
         <div className="flex justify-between items-center ">
               <h6 className="text-[#007580] text-xs md:text-base font-normal font-sans">{prod.title}</h6>
                    <CartToggleButton prodId={prod._id} prodPrice={prod.price} uid={userId}/> 
                    </div>
                     </div>
                     <h6 className="text-[#272343] text-sm font-sans font-semibold md:text-lg">${prod.price}</h6>
        </div>
                </div>
              )
            })
          }

        </div> 
        {/* Top Categories Section */}
      </section>
      <section className="w-full lg:h-[500px] ">
        <h1 className="font-semibold  text-2xl md:text-3xl text-[#272343]">Top Categories</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 py-15 gap-y-6">
        {categories.map((category,i)=>{
          return(
            <div key={i} className="relative">
            <Link href={`/products?category=${category.title}`}>
          <Image src={category.imageUrl} alt="Category Image" width={424} height={424} className="object-cover w-full h-full"/>
          <span className="bg-[#000000B2]/[70%] w-full h-20 absolute bottom-0 px-4 py-2 gap-y-2 text-white">
            <h2 className="text-lg lg:text-xl font-semibold font-sans">{category.title}</h2>
            <p className="text-xs lg:font-sm font-white font-normal">{category.products_Quantity} Products</p>
          </span>
            </Link>
            </div>
          )
        })}
        </div>
      </section>
      {/* Products Section */}
      <section className="w-full lg:h-[919px] ">
       <div className="flex justify-between items-center">

          <h1 className="text-[#272343] font-sans font-semibold text-2xl md:text-3xl">Our Products</h1>
          <Link href={"/products"} className="hover:text-[#007580] text-sm font-medium underline">View All</Link>
       </div>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-x-6 gap-y-14 rounded-md py-20">
      {
        products.map((prod,i)=>{
        return(
          <div key={i}>
             <div className="flex flex-col text-left ">
    
            <Link href={`products/${prod._id}`}>
            <Image src={prod.imageUrl} alt="Products" width={312} height={312} className="pb-2"/>
            </Link>
              <div className="flex justify-between items-center">
              <h6 className="text-[#007580] text-xs md:text-base font-normal font-sans">{prod.title}</h6>
                <CartToggleButton prodId={prod._id} prodPrice={prod.price} uid={userId}/> 
              </div>
                <h6 className="text-[#272343] font-sans font-semibold text-base md:text-lg">${prod.price}</h6>
              </div>
          </div>
        )
        })
      }
        </div>
      </section>
    </main>
  )
}