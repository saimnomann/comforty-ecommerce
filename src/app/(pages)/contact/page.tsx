import Image from "next/image"
export default function Contact(){
return(
    <main className="max-w-full">
        <section className=" lg:h-[1120px] flex flex-col items-center text-center py-10 gap-y-20 lg:gap-y-34 lg:py-30 ">
            <div className="space-y-4">
                <h1 className="font-semibold font-sans text-xl lg:text-4xl">Get In Touch With Us</h1>
                <p className="text-[#9F9F9F] w-auto lg:w-[590px] mx-4 text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row px-4 lg:space-x-20 ">
              <aside className=" lg:flex-col space-y-10 pt-10 lg:pt-0">
                <div className="flex items-start gap-x-10 "><Image src={"/Vector (1).png"} alt="address" width={22} height={22} className="mt-1"/><div className="flex flex-col gap-y-2.5 text-left">
                    <h1 className="font-sans text-lg lg:text-2xl font-medium ">Address</h1>
                    <p className="font-normal text-sm lg:text-base w-45  text-left ">236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                    </div>
                <div className="flex items-start gap-x-10">
                <Image src={"/Vector (2).png"} alt="Phone"  width={23} height={23} className="mt-2"/>
                <div className="flex flex-col gap-y-2.5 text-left">
                <h1 className="font-sans text-lg lg:text-2xl font-medium ">Phone</h1>
                <p className="w-54 h-9 text-sm lg:text-base font-normal ">Mobile: +(84) 546-6789<br/>Hotline: +(84) 456-6789</p>
                </div>
                </div>

                <div className="flex items-start gap-x-10  ">
                    <Image src={"/Vector (3).png"} alt="Working Time" width={23} height={23} className="mt-1"/>
                  <div className="flex flex-col gap-y-2.5 text-left ">
                    <h1 className="font-sans text-lg lg:text-2xl font-medium">Working Time</h1>

                    <p className="font-normal text-sm lg:text-base w-46  h-9 text-left">Monday-Friday: 9:00 - 22:00<br/>Saturday-Sunday: 9:00 - 21:00</p>
            
                    </div>  
                    
                    </div>
            
                </aside>
                <form  className=" lg:w-[635px] lg:h-[923px] space-y-10 " >
            <div className="flex flex-col gap-y-5 text-left ">
            <label className="font-medium text-sm lg:text-base" >Your name</label>
            <input type="text" placeholder="Abc" className="border border-[#9F9F9F] text-[#9F9F9F] rounded-md w-full  lg:w-lg h-10 md:h-15 p-6"/>
            </div>
            <div className="flex flex-col text-left gap-y-5 ">
                <label className="font-medium text-sm lg:text-base" >Email Address</label>
                <input type="email" placeholder="Abc@def.com" className="border border-[#9F9F9F] text-[#9F9F9F] rounded-md w-full lg:w-lg h-10 md:h-15 p-6"/>
            </div>
             <div className="flex flex-col gap-y-5 text-left">

            <label className="font-medium text-sm lg:text-base" >Subject</label>
            <input type="text" placeholder="This is Optional" className="border border-[#9F9F9F] text-[#9F9F9F] rounded-md w-full lg:w-lg h-10 md:h-15 p-6"/>
            </div>
             <div className="flex flex-col gap-y-5 text-left">

            <label className="font-medium text-sm lg:text-base" >Message</label>
            <textarea placeholder="Hi! i'd like to ask about" className="border border-[#9F9F9F] text-[#9F9F9F] rounded-md max-w-lg max-h-30  p-6"/>
            </div>
            <button type="submit" className="bg-[#029FAE] w-full lg:w-56 h-10 lg:h-14 block rounded-md lg:px-5 lg:py-3 text-base text-white">Submit</button>
                </form>
          
            </div>
        </section>
        <section className="mx-7 lg:w-[1130px] lg:h-68 pb-10 lg:pb-0  bg-[#F4F4F4] lg:mx-48 px-6">
       <div className="grid grid-cols-2 gap-x-10 gap-y-6  lg:flex lg:gap-x-20 lg:px-14 lg:pt-26 items-center pt-10 ">

    <div className="flex items-center gap-x-1.5 lg:gap-x-3">
        <Image src={"/trophy 1.png"} alt="trophy" width={60} height={60} className="w-6 h-6 lg:w-15 lg:h-15"/>
        <div className="flex flex-col"> 
            <h1 className="text-base lg:text-2xl font-sans font-semibold text-[#242424] w-40 ">High Quality</h1>
            <p className="text-[#898989] font-medium text-sm lg:text-xl lg:w-[277px]">crafted from top materials</p>
        </div>
    </div>

  <div className="flex items-center gap-x-1.5 lg:gap-x-3">
        <Image src={"/guarantee.png"} alt="guarantee" width={60} height={60} className="w-6 h-6 lg:w-15 lg:h-15"/>
        <div className="flex flex-col"> 
            <h1 className="text-base lg:text-2xl font-sans font-semibold text-[#242424] ">Warranty Protection</h1>
            <p className="text-[#898989] font-medium text-sm lg:text-xl">Over 2 years</p>
        </div>
</div>
<div>
  <div className="flex items-center gap-x-1.5 lg:gap-x-3 ml-15 lg:ml-0">
        <Image src={"/customer-support.png"} alt="customer-support" width={60} height={60}  className="w-6 h-6 lg:w-15 lg:h-15"/>
        <div className="flex flex-col"> 
            <h1 className="text-base lg:text-2xl font-sans font-semibold text-[#242424] w-40">24 / 7 Support</h1>
            <p className="text-[#898989] font-medium text-sm lg:text-xl ">Dedicated support</p>
        </div>
</div>

</div>
</div>
        </section>
           </main>
)
}