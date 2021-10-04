import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'


const List = () => {
    // console.log(movie.movie)
    const [characters, setCharacters] = useState();
    const history = useHistory();


    useEffect(() => {
        axios.get('https://www.breakingbadapi.com/api/characters?limit=16')
            .then(res => setCharacters(res.data))

    }, [])

    const handleClick = (id) => {
       // console.log(id)
        history.push(`details/${id}`)
    }


    return (
        <>
            {
                characters?.map(character =>
                (
                    <div className="list-wrapper" onClick={() => handleClick(character?.char_id)}>
                        <img src={character?.img} alt="character-img" />
                        <div className="detail">
                            <p className="name">{character?.name}</p>
                            <p className="role">{character?.nickname}</p>
                        </div>
                    </div>
                )
                )
            }

        </>
    )
}
export default List;
