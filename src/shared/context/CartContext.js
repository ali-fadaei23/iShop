import React, { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])
    const [wishlist, setWishlist] = useState([])

    return <CartContext.Provider value={{ cartItems, setCartItems, wishlist, setWishlist }}>
        {children}
    </CartContext.Provider>
}


