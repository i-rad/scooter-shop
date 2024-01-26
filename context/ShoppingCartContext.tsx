import ShoppingCart from "@/components/shoppingCart";
import { createContext, ReactNode, use, useContext, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
    color: string
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    cartQuantity: number
    cartItems: CartItem[]
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number, color: string) => void
    decreaseCartQuantity: (id: number, color: string) => void
    removeFromCart: (id: number, color: string) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
    const [isOpen, setIsOpen] = useState(false);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number, color: string) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id && item.color === color) == null) {
                return [...currentItems, { id, quantity: 1, color }]
            }
            else {
                return currentItems.map(item => {
                    if (item.id === id && item.color === color) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number, color: string) {
        setCartItems(currentItems => {
            if (currentItems.find(item => (item.id === id && item.color === color))?.quantity === 1) {
                return currentItems.filter(item => item.id !== id || item.color !== color)
            }
            else {
                return currentItems.map(item => {
                    if (item.id === id && item.color === color) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number, color: string) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id || item.color !== color)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}