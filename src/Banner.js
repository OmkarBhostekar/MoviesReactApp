import React,{useState, useEffect} from 'react'
import axios from "./axios";
import requests from './requests';
import "./Banner.css"

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchBanner)
            const random = Math.floor(Math.random()*request.data.results.length -1)
            setMovie(request.data.results[random])
            console.log(request.data.results[random]);
        }
        fetchData()
    }, [])


    return ( 
    <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )` ,
            backgroundPosition: "center center"
        }}
    >
        <div className="banner_content">
        {/* title */}
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_title}</h1>
        {/* div 2 buttons */}
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
        {/* description */}
        <h1 className="banner_description">{movie?.overview}</h1>

        </div>

    </header>
    )
}

export default Banner