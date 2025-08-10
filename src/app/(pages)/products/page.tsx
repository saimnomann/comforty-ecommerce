import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { Badge } from "@/components/ui/badge"
import { IProduct } from "@/app/types"
import Link from "next/link"
import CartToggleButton from "@/(components)/CartToggleButton/button"
export default async function Products({searchParams}:{searchParams:{category?:string}}) {
    const category=searchParams.category
    const gallery: IProduct[] = await client.fetch(
        `*[_type=="products" && "instagram" in tags || "gallery" in tags][0...6]{
    "imageUrl": image.asset->url
  }`
    )

    const products: IProduct[] = await client.fetch(`*[_type=="products" ${category? `&& category->title=="${category}"`:""}]{
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
  }`)
    return (
        <main className="max-w-full">
            <section className="mx-48 h-[1600px] py-10 space-y-10">
                {!category?
                <h1 className=" text-3xl text-[#272343] font-sans font-semibold">
                    All Products</h1>: <h1 className=" text-3xl text-[#272343] font-sans font-semibold capitalize">
                   {category} Products</h1>}
                <div className="grid grid-cols-4 gap-8">
                    {
                        products.map((prod, i) => {
                            return (
                                <div key={i}>
                
                                        <div className="relative w-fit">
                                            <div className="flex flex-col text-left">
                                                {prod.badge == "New" ?
                                                    <Badge className="absolute top-2 left-4 h-7 w-12 bg-[#01AD5A] text-white text-sm font-sans font-medium">{prod.badge}</Badge>
                                                    : prod.badge == "Sales" ?
                                                        <Badge className="absolute top-2 left-4 h-7 w-12 bg-[#F5813F] text-white text-sm font-sans font-medium">
                                                            {prod.badge}</Badge> : null
                                                }

                                                <Link href={`/products/${prod._id}`}>   <Image src={prod.imageUrl} alt="Products" width={312} height={312} className="pb-2 object-cover " />
                                                </Link> 
                                                <div className="flex justify-between items-center">
                                                    <h6 className="text-[#007580] text-base font-normal font-sans">{prod.title}</h6>
                                                   <CartToggleButton prodId={prod._id} prodPrice={prod.price}  />
                                                </div>
                                            </div>
                                            <h6 className="text-[#272343] font-sans font-semibold text-lg">${prod.price}</h6>
                                        </div>
                                  
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="bg-[#1E28320D] w-full h-[750px] px-48 py-30 flex flex-col items-center gap-y-10">
                <div className="space-y-10">
                    <h2 className=" capitalize  text-center font-sans font-[500] text-5xl">Or subscribe to the newsletter</h2>
                    <form className="flex">
                        <input type="email" placeholder="Email Address..." className="text-md border-b-2 border-[#1E2832] p-3 w-[480px]"></input>
                        <button type="submit" className="border-b-2 uppercase text-[#1E2832] w-22 border-[#1E2832] mx-10">Submit</button>
                    </form>
                </div>
                <div className="space-y-20 py-10">
                    <h2 className="font-sans text-center font-[500] text-5xl capitalize ">
                        Follow products and discounts on Instagram
                    </h2>
                    <div className="flex gap-x-4">
                        {
                            gallery.map((prod, i) => {
                                return (
                                    <div key={i}>
                                        <Image src={prod.imageUrl} alt={"Product"} width={186} height={186} />
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