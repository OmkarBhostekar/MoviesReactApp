import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import YouTube from 'react-youtube';
import axios from "../axios";
import requests from '../requests';
import "./Banner.css"

function Banner() {

    const [movie, setMovie] = useState([])
    const history = useHistory()

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchBanner)
            const random = Math.floor(Math.random()*request.data.results.length -1)
            setMovie(request.data.results[random])
            console.log(request.data.results[random]);
        }
        fetchData()
    }, [])

    function redirectToDetail(id) {
        history.push( `/tv/${id}`)
        console.log(`clicked on ${id}`);
    };

    function truncate(str,n) {
        return str?.length > n ? str.substr(0,n-1) + "..." : str
    }

    return ( 
    <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
            )` ,
            backgroundPosition: "center center"
        }}
    >
        <div className="banner_content">
        {/* title */}
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_title}</h1>
        {/* div 2 buttons */}
        <div className="banner_buttons">
            <button className="banner_button btn-play">Play</button>
            <button className="banner_button" onClick={ () => redirectToDetail(movie?.id)}>View</button>
        </div>
        {/* description */}
        <h1 className="banner_description">{truncate(movie?.overview,300)}</h1>

        </div>
        <div className="banner--fadebottom"></div>
    </header>
    )
}

export default Banner