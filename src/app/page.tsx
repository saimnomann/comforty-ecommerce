import Image from "next/image"
import {client} from "@/sanity/lib/client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { IProduct,ICategory,IHeroSection} from "./types"
import ShopButton from "@/(components)/shopButton/button"
import AddToCartButton from "@/(components)/CartToggleButton/button"
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
  return (
    <main className="w-[1100px] mx-48">
      <section className="bg-[#F0F2F3] h-[850px] w-full px-16  flex justify-between items-center gap-x-4  rounded-bl-2xl ">
        <div className="space-y-2">
    <h1 className="text-sm text-[#272343] font-[inter] font-[400] uppercase">
      {data.title}
      </h1>
      <p className="text-6xl font-[inter] font-[600] text-[#272343] w-[557px]">
        {data.description}
      </p>
      {/* <button type="button" className="bg-[#029FAE] text-white text-base rounded-lg hover:cursor-pointer hover:scale-105 my-14 items-center font-[inter] font-[600] flex  gap-x-3 px-7  w-44 h-12" >
      
        {data.buttonText}<Image src={"/arrow.png"} alt="arrow" width={24} height={24}></Image>
    
        </button> */}
        <ShopButton/>
        </div>
        <div>
      <Image src={data.img.asset.url} alt="Image" width={434} height={584}/>
        </div>
      </section>
      <section className="flex  w-full h-32 items-center justify-between py-2">
        <Image src={"/zapier.png"} alt="company" width={65} height={40} />
        <Image src={"/pipedrive.png"} alt="company" width={87} height={70}/>
        <Image src={"/cibbank.png"} alt="company" width={95} height={80}/>
        <Image src={"/logo.png"} alt="company"width={63} height={50}/>
        <Image src={"/burntoast.png"} alt="company"width={80} height={75}/>
         <Image src={"/pd.png"} alt="company"width={90} height={85}/>
          <Image src={"/moz.png"} alt="company"width={70} height={50}/>
      </section>
      <section className="h-[480px] w-full">
        <h1 className="font-[inter] font-[600] text-3xl text-[#272343]">Featured Products</h1>
         <div className="grid grid-cols-4 gap-x-6 py-20 ">
          {
            featuredProd.map((prod,i)=>{
              return(
                                          <div key={i}>
                                            <Link href={`/products/${prod._id}`}>
                                           
                                      <div className="relative w-fit">
                                      <div className="flex flex-col text-left">
                    {prod.badge=="New"?
                        <Badge className="absolute top-2 left-4 h-7 w-12 bg-[#01AD5A] text-white text-sm font-sans font-medium">{prod.badge}</Badge>
                        :prod.badge=="Sales"? 
                        <Badge className="absolute top-2 left-4 h-7 w-12 bg-[#F5813F] text-white text-sm font-sans font-medium">
                            {prod.badge}</Badge>:null
                    }
                                                
                    <Image src={prod.imageUrl} alt="Featured Products" width={312} height={312 } className="pb-2 object-cover "/>
         <div className="flex justify-between items-center">
               <h6 className="text-[#007580] text-base font-normal font-sans">{prod.title}</h6>
                    <button> <Image src="/cart.png" alt="Cart" width={24} height={24}/></button>
                    </div>
                     </div>
                     <h6 className="text-[#272343] font-sans font-semibold text-lg">${prod.price}</h6>
        </div>
        </Link>
                </div>
              )
            })
          }

        </div> 
      </section>
      <section className="w-full h-[500px] ">
        <h1 className="font-[600]  text-3xl text-[#272343]">Top Categories</h1>
        <div className="grid grid-cols-3 gap-x-8 py-15">
        {categories.map((category,i)=>{
          return(
            <div key={i} className="relative">
            <Link href={`/products?category=${category.title}`}>
          <Image src={category.imageUrl} alt="Category Image" width={424} height={424} className="object-cover w-full h-full"/>
          <span className="bg-[#000000B2]/[70%] w-full h-20 absolute bottom-0 px-4 py-2 text-white">
            <h2 className="text-xl font-semibold font-sans">{category.title}</h2>
            <p className="font-sm font-white font-normal">{category.products_Quantity} Products</p>
          </span>
            </Link>
            </div>
          )
        })}
        </div>
      </section>
      <section className="w-full h-[919px] ">
       <div className="flex justify-between items-center ">

          <h1 className="text-[#272343] font-[inter] font-[600] text-3xl">Our Products</h1>
          <Link href={"/products"} className="text-[[#007580] text-sm font-medium underline">View All</Link>
       </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-x-6 gap-y-14 rounded-md py-20">
      {
        products.map((prod,i)=>{
        return(
          <div key={i}>
             <div className="flex flex-col text-left ">
    
            <Link href={`products/${prod._id}`}>
            <Image src={prod.imageUrl} alt="Products" width={312} height={312} className="pb-2"/>
            </Link>
              <div className="flex justify-between items-center">
              <h6 className="text-[#007580] text-base font-normal font-sans">{prod.title}</h6>
              <AddToCartButton prodId={prod._id} prodPrice={prod.price}/>
              </div>
                <h6 className="text-[#272343] font-sans font-semibold text-lg">${prod.price}</h6>
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