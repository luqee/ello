import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { BookContext } from "../BookProvider"

function ViewToken({token}) {
    const location = useLocation()
    const {currentPage} = useContext(BookContext)

    return (<div>
        <div>
        <Link to={'/'} state={{currentPage}}><button>Back</button></Link>
        </div>
        <div>
        {location.state? location.state.token: ''}
        </div>
    </div>)
}

export default ViewToken