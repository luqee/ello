import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { BookContext } from "../BookProvider"

function ViewToken({token}) {
    const location = useLocation()
    const {currentPage} = useContext(BookContext)

    return (<div id="ViewToken">
        <div>
        <Link to={'/'} state={{currentPage}}><button>Back</button></Link>
        </div>
        <div id="Token">
        {location.state? location.state.token: ''}
        </div>
    </div>)
}

export default ViewToken