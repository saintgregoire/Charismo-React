import React, { useState, createContext } from 'react';

export const ModalContext = createContext({popUp});

export const MyProvider = ({ children }) => {
    const [value, setValue] = useState(false);

    return (
        < ModalContext.Provider value={{ value, setValue }}>
            {children}
        </ModalContext.Provider>
    );
};