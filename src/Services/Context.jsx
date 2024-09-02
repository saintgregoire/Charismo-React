import React, { useState, createContext } from 'react';

export const ModalContext = createContext()

export const MyProvider = ({ children }) => {
    const [value, setValue] = useState(false);

    return (
        < ModalContext.Provider value={{ value, setValue }}>
            {children}
        </ModalContext.Provider>
    );
};

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartValue, setCartValue] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    }

    const removeFromCart = (index) => {
        setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartValue, setCartValue}}>
            {children}
        </CartContext.Provider>
    );
};