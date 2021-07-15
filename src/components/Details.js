import React from 'react';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
const Details = (char) => {
    // console.log(id)
    const [details, setDetails] = useState();
    const history = useHistory()

    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/characters/${char.match.params.id}`)
            .then(res => setDetails(res.data[0]))
    }, [char.match.params.id])


    const handleClick = () => {
        history.push('');
    }

    return (
        <div className="detail-wrapper">
            <div className="img-container">
                <img src={details?.img} alt="" />
            </div>
            <div className="detail-container" style={{ color: "white" }}>
                <p>Name: {details?.name}  </p>
                <p>Birthday: {details?.birthday}  </p>
                <p>Occupation: {details?.occupation?.map((occ) => (<ul><li key={details?.char_id}>{occ}</li></ul>))}  </p>
                <p>Status: {details?.status}  </p>
            </div>
            <button className="btn" onClick={() => handleClick()}>Back</button>
        </div>
    )
}
export default Details