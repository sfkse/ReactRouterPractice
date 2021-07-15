import React from 'react'
import { useHistory } from 'react-router-dom'
const NotFound = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push("/")
    }
    return (
        <div className="notFound">
            <h2>Page Not Found</h2>

            <button className="back" onClick={() => handleClick()}>Back</button>
        </div>
    )
}
export default NotFound