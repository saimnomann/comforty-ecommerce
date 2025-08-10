import Image from "next/image";
import { cookies} from "next/headers";
import Link from "next/link";
import CountProvider from "@/(components)/CountContext/countContext";


export default async function SuccessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const uid=(await cookies()).get("user_id")?.value
     if (!uid) {
   return (
         <h1>Error: Missing User ID</h1>
   );
 }
       
  return (
<>
<CountProvider user_Id={uid}>
       <header className="flex flex-col  text-gray-400">
          <div className="bg-[#272343] h-[45px] flex justify-between px-6 max-w-full
           lg:px-50 text-xs lg:text-sm items-center" >
            <p className=" text-xs lg:text-sm flex gap-x-0.5 lg:flex-gap-x-2 items-end">
              <Image src={"/check.png"} alt="check" width={16} height={16} />Free shipping on all orders over $50
            </p>
            <div className="flex gap-x-2 ">
              <p>
              FAQs
              </p>
              <Link href={"/FAQ"}>
                Need Help
              </Link>
              
            </div>
          </div>
          <div className="bg-[#F0F2F3]  h-17 lg:h-[84px] flex items-center px-6 lg:px-48  justify-between">
            <div className="flex gap-x-2 items-center">
              <Image src={"/sofa.png"} alt="Sofa" width={40} height={40} className="h-7 w-7 lg:w-[40px] lg:h-[40px]"></Image>
              <h1 className="text-2xl lg:text-[32px] text-black font-sans font-medium">Comforty</h1>
            </div>
          </div>
        
        </header>
        {children}
        <footer className="border-t border-t-gray-300 lg:max-w-full ">
          <section className="max-w-[1150px]  h-[343px] flex space-x-10 lg:px-48 lg:py-20">
            <section className="">
              <div className="flex gap-x-4 items-center pt-1.5">
                <Image src={"/sofa.png"} alt="sofa" width={40} height={40} />
                <h1 className="text-2xl font-[inter] font-[600]">Comforty</h1>
              </div>
              <p className="w-80 text-[#272343] my-6">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                Cras egestas purus
                <span className="flex gap-x-6 my-6">
                  <Image src={"/Facebook---Negative 2.png"} alt={"facebook"} width={16} height={16} className="hover:rounded-full hover:cursor-pointer hover:border-1 hover:border-[#007580]" />
                  <Image src={"/Twitter---Negative 1.png"} alt={"Twitter"} width={16} height={16} className="hover:rounded-full hover:cursor-pointer hover:border hover:border-[#007580]" />
                  <Image src={"/Instagram 1.png"} alt={"Instagram"} width={16} height={16} className="hover:rounded-full hover:cursor-pointer hover:border hover:border-[#007580]" />
                  <Image src={"/Pinterest---Negative 1.png"} alt={"Pinterest"} width={16} height={16} className="hover:rounded-full hover:cursor-pointer hover:border hover:border-[#007580]" />
                  <Image src={"/Youtube.png"} alt={"/Youtube"} width={16} height={16} className="hover:rounded-full hover:cursor-pointer hover:border hover:border-[#007580]" />
                </span>
              </p>
            </section>
          <section className="">
            <h1 className="font-sans text-sm text-[#9A9CAA] uppercase">
              Category
            </h1>
            <ul className="font-sans text-base text-[#272343] py-4 space-y-3  whitespace-nowrap w-max">
              <li className="hover:underline hover:text-[#007580] hover:cursor-pointer">Sofa</li>
              <li className="hover:underline hover:text-[#007580] hover:cursor-pointer">ArmChair</li>
              <li className="hover:underline hover:text-[#007580] hover:cursor-pointer">Wing Chair</li>
              <li className="hover:underline hover:text-[#007580] hover:cursor-pointer">Desk Chair</li>
              <li className="hover:underline hover:text-[#007580] hover:cursor-pointer">Wooden Chair</li>
              <li className="hover:underline hover:text-[#007580] hover:cursor-pointer">Park Chair</li>
            </ul>
          </section>
          <section className="">
            <h1 className="text-[#9A9CAA] font-sans text-sm uppercase">
              Support
            </h1>
            <ul className="text-base text-[#272343] font-sans font-[400] whitespace-nowrap w-max space-y-3 py-4">
              <li className="hover:underline hover:text-[#007580] hover:cursor-pointer">Help & Support</li>
              <li className="hover:underline hover:text-[#007580] hover:cursor-pointer">Terms & Conditions</li>
              <li className="hover:underline hover:text-[#007580] hover:cursor-pointer">Privacy Policy</li>
              <li className="hover:underline hover:text-[#007580] hover:cursor-pointer">Help</li>
            </ul>
          </section>
          <section className="">
            <h1 className="uppercase text-[#9A9CAA] text-sm">Newsletter</h1>
            <form className="py-8 flex gap-x-2">
              <input type="email" placeholder="Your Email" className="w-2xs h-11 border border-[#E1E3E5] rounded-lg p-3 text-base text-[#9A9CAA] "/>
                <button type="submit" className="w-28 h-11 bg-[#029FAE] text-[#FFFFFF] text-base rounded-lg hover:cursor-pointer hover:scale-105">Subscribe</button>
            </form>
            <p className="text-[#272343] text-[15px] font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
          </section>
          </section>
          <section className="h-20 flex  border-t  border-t-gray-300 w-full justify-between py-10 px-48 items-center">
            <p className="text-[#9A9CAA] font-sans text-sm">
              @ 2025 - Comforty - Designed & Develop by Saim
            </p>
            <span className="flex gap-x-2  items-center">
              <Image src={"/Group 11.png"} alt={"pic"} width={20}  height={20} className="w-5 h-5"/>
              <Image src={"/Group 12.png"} alt={"pic"} width={20} height={20} className="w-5 h-5"/>
              <Image src={"/Vector.png"} alt={"pic"} width={20} height={20} className="w-5 h-5"/>
              <Image src={"/Union.png"} alt={"pic"} width={20} height={20} className="w-5 h-5"/>

            </span>
 
          </section>
        </footer>
        </CountProvider>
        
</>
   

  );
}
