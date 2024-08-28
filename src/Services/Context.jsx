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