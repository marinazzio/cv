"use client";

import React, { ReactNode, createContext, useContext } from "react";

const DictionaryContext = createContext({});

export function DictionaryProvider({
    children,
    dictionary
}: {
    children: ReactNode,
    dictionary: any
}) {
    return (
        <DictionaryContext.Provider value={dictionary}>
            {children}
        </DictionaryContext.Provider>
    );
};

export function useDictionary() {
    return useContext(DictionaryContext);
};
