import Image from "next/image"
export default function Products() {
    return (
        <main className="max-w-full">
            <section className="mx-48 h-[1200px]"><h1 className=" text-3xl text-[#272343] font-[inter] font-[600] ]">All Products</h1></section>
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
                        <Image src={"/image (1).png"} alt={"Product"} width={186} height={186} />
                        <Image src={"/image (2).png"} alt={"Product"} width={186} height={186} />
                        <Image src={"/image (3).png"} alt={"Product"} width={186} height={186} />
                        <Image src={"/image (4).png"} alt={"Product"} width={186} height={186} />
                        <Image src={"/image (5).png"} alt={"Product"} width={186} height={186} />
                        <Image src={"/card.png"} alt={"Product"} width={186} height={186} />
                    </div>
                </div>
            </section>
        </main>
    )
}