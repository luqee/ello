import { useLocation } from "react-router-dom"

function ViewToken({token}) {
    const location = useLocation()

    return (<div>
        {location.state? location.state.token: ''}
    </div>)
}

export default ViewToken