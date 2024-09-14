'use client'
import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

const ConsoleContext = createContext();

export const useConsole = () => {
    const context = useContext(ConsoleContext);
    if (!context) {
        throw new Error("useConsole debe ser utilizado dentro del ConsoleProvider");
    }
    return context;
};

export const ConsoleProvider = ({ children }) => {
    const router = useRouter()
    const [ viewConsole , setViewConsole] = useState(true)

    const toggleConsole = () => {
        setViewConsole(!viewConsole)
    }





    return (
        <ConsoleContext.Provider value={{ toggleConsole , viewConsole }}>
            {children}
        </ConsoleContext.Provider>
    );
};