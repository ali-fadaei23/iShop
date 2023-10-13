import React, { createContext, useState } from "react";


export const Context = createContext({})

export const ContextProvider = ({ children }) => {
    const [categoryItem, setCategoryItem] = useState([]);
    const [cartItems, setCartItems] = useState([])
    const [wishlist, setWishlist] = useState([])

    return <Context.Provider value={{
        cartItems, setCartItems,
        wishlist, setWishlist,
        categoryItem, setCategoryItem,
    }}>
        {children}
    </Context.Provider>
}


