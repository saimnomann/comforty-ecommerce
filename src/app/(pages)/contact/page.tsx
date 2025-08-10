import Image from "next/image"
export default function Contact(){
return(
    <main className="max-w-full">
        <section className=" h-[1120px] flex flex-col items-center text-center gap-y-34 py-30 ">
            <div className="space-y-4">
                <h1 className="font-semibold font-sans text-4xl">Get In Touch With Us</h1>
                <p className="text-[#9F9F9F] w-[590px]  ">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className="flex space-x-20">
              <aside className="space-y-10">
                <div className="flex items-start gap-x-10 "><Image src={"/Vector (1).png"} alt="address" width={22} height={22} className="mt-1"/><div className="flex flex-col gap-y-2.5 text-left">
                    <h1 className="font-sans text-2xl font-medium ">Address</h1>
                    <p className="font-normal text-base w-45  text-left ">236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                    </div>
                <div className="flex items-start gap-x-10">
                <Image src={"/Vector (2).png"} alt="Phone"  width={23} height={23} className="mt-2"/>
                <div className="flex flex-col gap-y-2.5 text-left">
                <h1 className="font-sans text-2xl font-medium ">Phone</h1>
                <p className="w-54 h-9 text-base font-normal ">Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                </div>
                </div>

                <div className="flex items-start gap-x-10  ">
                    <Image src={"/Vector (3).png"} alt="Working Time" width={23} height={23} className="mt-1"/>
                  <div className="flex flex-col gap-y-2.5 text-left ">
                    <h1 className="font-sans text-2xl font-medium">Working Time</h1>

                    <p className="font-normal text-base w-46  h-9 text-left">Monday-Friday: 9:00 - 22:00<br/>Saturday-Sunday: 9:00 - 21:00</p>
            
                    </div>  
                    
                    </div>
            
                </aside>
                <form  className="w-[635ppx] h-[923px] space-y-10">
            <div className="flex flex-col gap-y-5 text-left">

            <label className="font-medium text-base" >Your name</label>
            <input type="text" placeholder="Abc" className="border border-[#9F9F9F] text-[#9F9F9F] rounded-md w-lg h-15 p-6"/>
            </div>
            <div className="flex flex-col text-left gap-y-5 ">
                <label className="font-medium text-base" >Email Address</label>
                <input type="email" placeholder="Abc@def.com" className="border border-[#9F9F9F] text-[#9F9F9F] rounded-md w-lg h-15 p-6"/>
            </div>
             <div className="flex flex-col gap-y-5 text-left">

            <label className="font-medium text-base" >Subject</label>
            <input type="text" placeholder="This is Optional" className="border border-[#9F9F9F] text-[#9F9F9F] rounded-md w-lg h-15 p-6"/>
            </div>
             <div className="flex flex-col gap-y-5 text-left">

            <label className="font-medium text-base" >Message</label>
            <textarea placeholder="Hi! i'd like to ask about" className="border border-[#9F9F9F] text-[#9F9F9F] rounded-md max-w-lg max-h-30  p-6"/>
            </div>
            <button type="submit" className="bg-[#029FAE] w-56 h-14 block rounded-md px-5 py-3 text-base text-white">Submit</button>
                </form>
          
            </div>
        </section>
        <section className="w-[1130px] h-68 bg-[#F4F4F4] mx-48">
<div className="flex gap-x-20 px-14 pt-26">
    <div className="flex items-center gap-x-3">
        <Image src={"/trophy 1.png"} alt="trophy" width={60} height={60}/>
        <div className="flex flex-col"> 
            <h1 className="text-2xl font-sans font-semibold text-[#242424]">High Quality</h1>
            <p className="text-[#898989] font-medium text-xl">crafted from top materials</p>
        </div>
    </div>

  <div className="flex items-center gap-x-3">
        <Image src={"/guarantee.png"} alt="guarantee" width={60} height={60}/>
        <div className="flex flex-col"> 
            <h1 className="text-2xl font-sans font-semibold text-[#242424]">Warranty Protection</h1>
            <p className="text-[#898989] font-medium text-xl">Over 2 years</p>
        </div>
</div>
<div>
  <div className="flex items-center gap-x-3">
        <Image src={"/customer-support.png"} alt="customer-support" width={60} height={60}/>
        <div className="flex flex-col"> 
            <h1 className="text-2xl font-sans font-semibold text-[#242424]">24 / 7 Support</h1>
            <p className="text-[#898989] font-medium text-xl">Dedicated support</p>
        </div>
</div>

</div>
</div>
        </section>
           </main>
)
}