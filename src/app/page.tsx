import Image from "next/image"
import {client} from "@/sanity/lib/client"
import Link from "next/link"
interface IHeroSection{
title:string,
description:string,
buttonText:string,
buttonLink:string,
img:{
  asset:{
    url:string
  }
}
}
export default async function Home(){
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
      <button type="button" className="bg-[#029FAE] text-white text-base rounded-lg hover:cursor-pointer hover:scale-105 my-14 items-center font-[inter] font-[600] flex  gap-x-3 px-7  w-44 h-12" >
      
        {data.buttonText}<Image src={"/arrow.png"} alt="arrow" width={24} height={24}></Image>
    
        </button>
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
      <section className="h-96 w-full">
        <h1 className="font-[inter] font-[600] text-3xl text-[#272343]">Featured Products</h1>
        <div>
Products
        </div>
      </section>
      <section className="w-full h-96 py-10">
        <h1 className="font-[600]  text-3xl text-[#272343]">Top Categories</h1>
        <div>
          Products
        </div>
      </section>
      <section className="w-full h-[]">
<p style={{writingMode:"vertical-lr"} } className="text-[400] font-[inter] text-3xl rotate-180 ">Explore new and popular styles</p>
      </section>
      <section className="w-full h-[919px] ">
          <h1 className="text-center text-[#272343] font-[inter] font-[600] text-3xl">Our Products</h1>
        <div></div>
      </section>
    </main>
  )
}