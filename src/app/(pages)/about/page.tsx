import Image from "next/image"
export default function About(){
    return(
        <main className="w-full">
            <section className="w-[1110px]  mx-48 my-20 flex gap-x-8">
                <div className="bg-[#007580] w-2xl h-[478px]  px-20 py-15 space-y-20">
                <div className="text-left space-y-2">
                    <h1 className="text-white font-bold text-[32px] font-sans">About Us - Comforty</h1>
                    <p className="text-white font-normal text-lg font-sans max-w-[460px] ">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
                </div>
                <button className="w-44 h-14 bg-[#F9F9F926] text-white font-sans font-normal text-base">View collection</button>
                </div>
                <Image src={"/Image Block.png"} alt="Chair" width={619} height={478}/>
            </section>
            <section>
            <h1 className="font-sans font-semibold text-[32px] text-[#272343] text-center capitalize">What makes our Brand Different</h1>
            <div className="w-[1120px] grid grid-cols-4 gap-8 h-52  my-20 mx-48">
                <div className="text-left bg-[#F9F9F9] p-10 space-y-2" >
                    <Image src={"/Delivery.png"} alt="delivery" width={24} height={24}/>
                    <h2 className="font-sans text-[20px] font-normal text-[#007580] ">Next day as standard</h2>
                    <p className="font-sans text-[#007580] text-base font-normal">Order before 3pm and get your order the next day as standard</p>
                </div>
                <div className="text-left bg-[#F9F9F9] p-10 space-y-2" >
                    <Image src={"/Checkmark--outline.png"} alt="checkmark" width={24} height={24}/>
                    <h2 className="font-sans text-[20px] font-normal text-[#007580] ">Made by true artisans</h2>
                    <p className="font-sans text-[#007580] text-base font-normal w-52">Handmade crafted goods made with real passion and craftmanship</p>
                </div>
                <div className="text-left bg-[#F9F9F9] p-10 space-y-2" >
                    <Image src={"/Purchase.png"} alt="delivery" width={24} height={24}/>
                    <h2 className="font-sans text-[20px] font-normal text-[#007580] ">Unbeatable prices</h2>
                    <p className="font-sans text-[#007580] text-base font-normal">For our materials and quality you won’t find better prices anywhere</p>
                </div>
                <div className="text-left bg-[#F9F9F9] p-10 space-y-2" >
                    <Image src={"/Sprout.png"} alt="delivery" width={24} height={24}/>
                    <h2 className="font-sans text-[20px] font-normal text-[#007580] ">Recycled packaging</h2>
                    <p className="font-sans text-[#007580] text-base font-normal">We use 100% recycled to ensure our footprint is more manageable</p>
                </div>
            </div>
            </section>
            <section className="w-[1110px] mx-48 my-40">
                <div>
                    <h1 className="text-[#272343] font-sans text-[32px] font-semibold">Our Popular Products</h1>
                </div>
            </section>
        </main>
    )
}