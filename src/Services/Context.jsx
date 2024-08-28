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

    return (
        <CartContext.Provider value={{cartValue, setCartValue}}>
            {children}
        </CartContext.Provider>
    );
};