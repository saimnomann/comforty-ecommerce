import { client } from "@/sanity/lib/client"
import Link from "next/link"
import Image from "next/image"
import { IProduct, IProps } from "@/app/types"
import AddToCartButton from "@/(components)/AddToCart/button"

export default async function Products({ params }: IProps) {
    const featuredProduct: IProduct[] = await client.fetch(`*[_type=="products" && "featured" in tags][1...5]{
    _id,
    title,
    price,
    "imageUrl": image.asset->url}
`)

    const product: IProduct = await client.fetch(`*[_type=="products" && _id==$slug][0]{
    title,
    description,
    "imageUrl":image.asset->url,
    price,
    }`, { slug: params.slug })
    return (
        <main className="w-full">
            <section className="flex gap-x-8 w-[1150px] mx-48 my-30">
                <Image src={product.imageUrl} alt="Product Image" width={675} height={605} />
                <div className="space-y-4">
                    <div className="flex flex-col border-b border-b-[#D9D9D9] min-h-40 max-h-60 gap-y-9">
                        <h1 className="text-[rgb(39,35,67)] font-sans text-6xl w-[450px] font-bold">{product.title} </h1>
                        <h4 className="w-[144px] h-11 text-white rounded-2xl bg-[#029FAE] text-xl text-center py-2 mb-8">${product.price}.00 USD</h4>
                    </div>
                    <p className="text-[#272343] w-[540px] text-xl font-normal py-4 ">{product.description}</p>
               <AddToCartButton prodId={product._id} prodPrice={product.price}/>
                </div>
            </section>
            <section className="w-[1150px] mx-48">
                <div className="flex justify-between">

                    <h1 className="font-bold font-sans text-[28px] capitalize  ">Featured Products</h1>
                    <Link href="/products" className="underline font-bold text-lg ">View all</Link>
                </div>
                <div className="flex gap-x-4 py-10">
                    {featuredProduct.map((prod, i) => {
                        return (
                            <div key={i}>
                            <Link href={`/products/${prod._id}`}>
                                <div className="flex flex-col text-left">
                                    <Image src={prod.imageUrl} alt="Featured Products" width={312} height={312} className="pb-2" />
                                    <div className="flex justify-between items-center">
                                        <h6 className="text-[#007580] text-base font-normal font-sans">{prod.title}</h6>
                                        <h6 className="text-[#272343] font-sans font-semibold text-lg">${prod.price}</h6>
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