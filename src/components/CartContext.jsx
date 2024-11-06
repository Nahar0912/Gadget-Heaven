import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.product_id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
