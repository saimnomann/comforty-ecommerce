"use client"
import { Minus, Plus } from "lucide-react"
import { toast } from "sonner"
import { useCountContext } from "../CountContext/countContext";
import { cartItem } from "@/app/types"
interface IQuantityBox {
    quantity: number,
    user_id: string,
    product_id: string,
    cart:cartItem[],
    setCart:React.Dispatch<React.SetStateAction<cartItem[]>>
}
export default function QuantityBox({ quantity, user_id, product_id,cart,setCart}: IQuantityBox) {
    const { setCount } = useCountContext()
    const handleSubmit = async (Action: "increase" | "decrease") => {
        try {
            if (Action == "increase") {
                setCart(prev => prev.map(item => item.prod_id == product_id ? { ...item, quantity: quantity + 1 } : item))
                toast.success("Cart Updated Successfully")
            }
            else {
                if (quantity <= 1) {
                    setCart(prev => prev.filter(item => item.prod_id != product_id))
                    setCount(prev => prev - 1)
                    toast.success("Item Deleted Successfully")
                    try {
                        const res = await fetch("/api/cart", {
                            method: "DELETE",
                            body: JSON.stringify({
                                user_id: user_id,
                                id: product_id,
                            })
                        })
                        if (!res.ok) throw new Error("Failed To Delete Item");
                    } catch (err) {
                        setCount((prev) => prev + 1)
                        setCart(cart)
                        toast.error(`${err as string}`)
                    }
                }
                setCart(prev => prev.map(item => item.prod_id == product_id ? { ...item, quantity: quantity - 1 } : item))
                toast.success("Cart Updated Successfully")
            }
            const res = await fetch(`/api/cart`, {
                method: "PATCH",
                body: JSON.stringify({
                    user_Id: user_id,
                    id: product_id,
                    action: Action
                })
            }
            )

            if (!res.ok) throw new Error("Failed To Update Cart");

        } catch (err) {
            setCart(cart)
            toast.error(`${err as string}`)
        }


    }

    return (
        <div className="flex bg-gray-200 gap-x-3 px-3 py-1 rounded-full my-2 ">
            <button className="hover:cursor-pointer" onClick={() => handleSubmit("decrease")}><Minus />
            </button>
            <h3 className="font-semibold text-base">{quantity}</h3>
            <button className="hover:cursor-pointer" onClick={() => handleSubmit("increase")} ><Plus /></button>

        </div>
    )
}