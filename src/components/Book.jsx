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
    const [prevDisabled, setPrevDisabled] = useState(false)
    const [nextDisabled, setNextDisabled] = useState(false)
    
    useEffect(()=>{
        if (book) {
            setLeftPage(book.pages[currentPage])
            setRightPage(book.pages[currentPage+1])
            if (currentPage+2 >= book.pages.length) {
                setNextDisabled(true)
            }else{
                setNextDisabled(false)
            }
            if (currentPage-2 < 0) {
                setPrevDisabled(true)
            }else{
                setPrevDisabled(false)
            }
        }
    },[book, currentPage])
    
    // const totalPages = book.pages.length
    const handleNext = () =>{
        setCurrentPage(currentPage+2)
        
    }
    const handlePrevious = () =>{
        setCurrentPage(currentPage-2)
    }
    
    return (<div id="Book">
        <button onClick={handlePrevious} disabled={prevDisabled}>Previous</button>
        <button onClick={handleNext} disabled={nextDisabled}>Next</button>
        <div>
            <div><Page page={leftPage} /></div>
            <div><Page page={rightPage} /></div>
        </div>
    </div>)
}

export default Book