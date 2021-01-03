import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import axios from "../axios";
import "../homepage/Row.css"

const image_base_url = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLargePoster }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            console.log(fetchUrl);
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            console.log(request.data.results);
            return request
        }
        fetchData()
    }, [fetchUrl])

    function redirectToDetail(id) {
        <Redirect to={`/movie/${id}`}/>
        console.log(`clicked on ${id}`);
    };

    return ( <div className = "row" > { /* title */ }
        <h2 className = "row_title" > { title } </h2>

        { /* container => posters */ } <
        div className = "row_posters" > { /* movie posters */ }

        {
            movies.map(movie => ( <
                img className = { `poster ${isLargePoster && "large_poster"}` }
                key = { movie.id }
                src = { `${image_base_url}${isLargePoster ? movie.poster_path : movie.backdrop_path}` }
                alt = { movie.name }
                onClick = { () => redirectToDetail(movie?.id) }
                />
            ))
        } </div> 
        </div>
    )
}

export default Row