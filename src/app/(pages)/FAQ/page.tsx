import { client } from "@/sanity/lib/client"
import Image from "next/image"

interface IFAQ{
    question:string,
    answer:string,
    logo:{
        asset:{
            url:string
        }
    }
}
export default async function FAQ(){
    const data:IFAQ[]=await client.fetch(
        `*[_type=="faq"]{
  question,
  answer,
  logo{
    asset->{url}}

}`)
    return(
        <main className="w-full">
            <section className=" flex flex-col items-center text-center mx-48 ">
                <div className="space-y-4 pt-20"> 
                    <h1 className="font-bold text-5xl text-[#333333]">Questions Looks Here</h1>
                    <p className="font-normal text-md text-[#4F4F4F] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                </div>
                     <div className="grid grid-cols-2 my-20 gap-10 ">
                {
                    data.map((item,i)=>{
                        return(
                           
                                <div className="col-span-1 gap-6 flex items-start text-left bg-[#F7F7F7] p-6 rounded-md" key={i}>
                                 <div className="space-y-4">
                                    <h2 className="text-[#333333] text-lg font-bold">{item.question}</h2>
                                    <p className="font-normal text-base text-[#4F4F4F]">{item.answer}</p>
                                   </div>
                                   <Image src={item.logo.asset.url} alt="plus" width={58} height={58} className="mt-1" />
                                </div>
                        )
                    })
                }
                    </div>
            </section>
        </main>
    )
}
