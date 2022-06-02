import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_BOOK } from "./api/client";

export const BookContext = React.createContext({})

function BookProvider({children}){
    const {loading, error, data} = useQuery(GET_BOOK)
    
    
    const value = {
        book: data? data.book: null
    }

    return <BookContext.Provider value={value}>
        {children}
    </BookContext.Provider>
}

export default BookProvider