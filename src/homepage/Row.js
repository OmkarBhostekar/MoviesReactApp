import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import axios from "../axios";
import "../homepage/Row.css"

const image_base_url = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, mType }) {

    const history = useHistory();

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

    function redirectToDetail(movie) {
        let type = 'movie'
        if (mType === 'both') {
            type = movie.media_type
        }else{
            type = mType
        }
        history.push( type === 'movie' ? `/movie/${movie?.id}` : `/tv/${movie?.id}`)
        console.log(`clicked on ${movie?.id}`);
    };
 
    return ( <div className = "row" > { /* title */ }
        <h2 className = "row_title" > { title } </h2>

        { /* container => posters */ } 
        <div className = "row_posters" > { /* movie posters */ }

        {
            movies.map(movie => ( 
            // <img className = { `poster ${isLargePoster && "large_poster"}` }
            <img className = { `poster large_poster` }
                key = { movie.id }
                // src = { `${image_base_url}${isLargePoster ? movie.poster_path : movie.backdrop_path}` }
                src = { `${image_base_url}${movie.poster_path}` }
                alt = { movie.name }
                onClick = { () => redirectToDetail(movie) }
                />
            ))
        } </div> 
        </div>
    )
}

export default Row