import { useQuery } from "@apollo/client"
import { useContext, useEffect, useState } from "react"
import { GET_BOOK } from "../api/client"
import { BookContext } from "../BookProvider"
import Page from "./Page"

function Book(){
    const {book} = useContext(BookContext)
    const [currentPage, setCurrentPage] = useState(0)
    const [leftPage, setLeftPage] = useState(null)
    const [rightPage, setRightPage] = useState(null)
    
    useEffect(()=>{
        console.log(book);
        if (book) {
            setLeftPage(book.pages[currentPage])
            setRightPage(book.pages[currentPage+1])
        }
    },[currentPage])
    
    // const totalPages = book.pages.length
    const handleNext = () =>{
        setCurrentPage(currentPage+1)
    }
    const handlePrevious = () =>{
        setCurrentPage(currentPage-1)
    }
    
    return (<div id="Book">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
        {
            book && (<div>
                <div><Page page={leftPage} /></div>
                <div><Page page={rightPage} /></div>
            </div>)
        }
    </div>)
}

export default Book