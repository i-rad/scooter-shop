import { useShoppingCart } from "@/context/ShoppingCartContext"
import storeItems from "../data/items.json"

type CartItemProps = {
    id: number
    quantity: number
    color: string
}

export function CartItem({ id, quantity, color }: CartItemProps) {
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
    const item = storeItems.find(item => item.id === id);
    if (item == null) return null;

    return (<li key={item.id + "-" + color} className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
                src={item.images[0].src}
                alt={item.images[0].alt}
                className="h-full w-full object-cover object-center"
            />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
            <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                        {item.name}
                    </h3>
                    <p className="ml-4">{item.price} $</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{item.colors.find(x => x.name === color)?.name || "White"}</p>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Qty {quantity}</p>
                <span className="text-gray-500 cursor-pointer" onClick={() => increaseCartQuantity(item.id, color)}>+</span>
                <span className="text-gray-500 cursor-pointer" onClick={() => decreaseCartQuantity(item.id, color)}>-</span>

                <div className="flex">
                    <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => removeFromCart(item.id, color)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    </li>)
}