import { client } from "@/sanity/lib/client"
import Link from "next/link"
import Image from "next/image"
import { IProduct } from "@/app/types"
import AddToCartButton from "@/(components)/AddToCart/button"
import { cookies } from "next/headers"

export default async function Products({ params }:{params:Promise<{slug:string}>}) {
    const featuredProduct: IProduct[] = await client.fetch(`*[_type=="products" && "featured" in tags][1...5]{
    _id,
    title,
    price,
    "imageUrl": image.asset->url}
`)
const {slug}=await params
    const uid=(await cookies()).get("user_id")?.value
    if(!uid){
        return(<div>
            Something Went Wrong
        </div>)
    }
    const product: IProduct = await client.fetch(`*[_type=="products" && _id==$slug][0]{
    _id,
    title,
    description,
    "imageUrl":image.asset->url,
    price,
    }`, {slug})
    return (
        <main className="w-full">
            <section className="flex flex-col gap-y-5 lg:flex-row gap-x-8 lg:w-[1150px] mx-5 lg:mx-48 lg:my-30 my-10">
                <Image src={product.imageUrl} alt="Product Image" width={675} height={605} className="w-auto h-auto lg:w-[675px] lg:h-[605px]"/>
                <div className="space-y-2 lg:space-y-4">
                    <div className="flex flex-col border-b border-b-[#D9D9D9] min-h-40 max-h-60 gap-y-9">
                        <h1 className="text-[rgb(39,35,67)] font-sans text-2xl lg:text-6xl lg:w-[450px] font-bold">{product.title} </h1>
                        <h4 className="w-[144px] h-11 text-white rounded-2xl bg-[#029FAE] text-base lg:text-xl text-center py-2 mb-8">${product.price.toFixed(2)} USD</h4>
                    </div>
                    <p className="text-[#272343] w-full lg:w-[540px] text-base  lg:text-xl font-normal py-4 ">{product.description}</p>
               <AddToCartButton prodId={product._id} prodPrice={product.price} user_id={uid}/>
                </div>
            </section>
            <section className="lg:w-[1150px] lg:mx-48 mx-7">
                <div className="flex justify-between">

                    <h1 className="font-bold font-sans text-xl lg:text-[28px] capitalize  ">Featured Products</h1>
                    <Link href="/products" className="underline font-bold text-base lg:text-lg ">View all</Link>
                </div>
                <div className="grid grid-cols-2 gap-4 lg:flex lg:gap-x-4 py-10">
                    {featuredProduct.map((prod, i) => {
                        return (
                            <div key={i}>
                            <Link href={`/products/${prod._id}`}>
                                <div className="flex flex-col text-left">
                                    <Image src={prod.imageUrl} alt="Featured Products" width={312} height={312} className="pb-2" />
                                    <div className="flex justify-between items-center">
                                        <h6 className="text-[#007580] text-xs lg:text-base font-normal font-sans">{prod.title}</h6>
                                        <h6 className="text-[#272343] font-sans font-semibold text-sm lg:text-lg">${prod.price.toFixed(2)}</h6>
                                    </div>
                                </div>
                            </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}