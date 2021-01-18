import { useEffect, React, useState} from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube';
import axios from "../axios";
import './MovieDetail.css';
import movieTrailer from 'movie-trailer';
function MovieDetail() {

    let { id } = useParams()

    const image_base_url = "https://image.tmdb.org/t/p/original"


    const fetchUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=5e08ba1c1a1dcf7f83c837a7b9db7776&language=en-US`
    const fetchCredits = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5e08ba1c1a1dcf7f83c837a7b9db7776&language=en-US`
    const fetchImages = `https://api.themoviedb.org/3/movie/${id}/images?api_key=5e08ba1c1a1dcf7f83c837a7b9db7776`

    const [movieDetail, setMovieDetail] = useState()
    const [credit, setCredit] = useState()
    const [images, setImages] = useState()
    const [trailerUrl, setTrailerUrl] = useState()

    useEffect(() => {
        window.scrollTo(0,0)
        async function fetchData() {
            console.log(fetchUrl);
            const request = await axios.get(fetchUrl);
            const credits = await axios.get(fetchCredits);
            const imageResponse = await axios.get(fetchImages);
            setMovieDetail(request.data)
            searchTrailer(request.data.original_title || "")
            setCredit(credits.data)
            setImages(imageResponse.data.backdrops)
            console.log(request.data);
            console.log(credits.data);
            console.log(imageResponse.data.backdrops);
            return request
        }
        fetchData()
    }, [fetchUrl])

    function searchTrailer(name) {
        movieTrailer(name || "").then(
            url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v') || "")
                console.log(urlParams.get('v'));
            })
            .catch(err => console.log(err))
    }

    const opts = {
        height: "500",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    return (
        <main>
            <section className="movie-detail">
                <div className="movie-metadeta">
                    <img src={ `${image_base_url}${movieDetail?.poster_path}` } alt="" className="movie-poster"/>
                        <h2>{movieDetail?.original_title}</h2>
                        <div className="movie-info">
                        <h6 className="info_field">Release Date</h6>
                        <h4>{`${movieDetail?.release_date}`}</h4>
                        <h6 className="info_field">Runtime</h6>
                        <h4>{`${getRunTime(movieDetail?.runtime)}`}</h4>
                        <h6 className="info_field">Tagline</h6>
                        <h4>{`${movieDetail?.tagline}`}</h4>
                        <h6 className="info_field">Budget</h6>
                        <h4>{`${movieDetail?.budget}`}</h4>
                        <h6 className="info_field">Director</h6>
                        <h4>{`${getDirector(credit?.crew)}`}</h4>
                        <h6 className="info_field">Writers</h6>
                        <h4>{`${getWriters(credit?.crew)}`}</h4>
                    </div>
                </div>
                <div className="movie-overview">
                    <div className="movie-numbers">

                    </div>
                    <h1>Storyline</h1>
                    <h3>{movieDetail?.overview}</h3>
                </div>
                <div className="movie-images">
                    {
                        images?.map( image => {
                            console.log(`${image_base_url}${image?.file_path}`);
                            return <img src={`${image_base_url}${image.file_path}`} 
                            key = {image.file_path}
                            alt="" className="movie-image"/>
                        })
                    }
                </div>
            </section>
            <div className="yt">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            </div>
        </main>
    )
}

function getDirector(crew) {
    let director = []
    crew?.forEach(crewmate => {
        if (crewmate?.job === 'Director') {
            director.push(crewmate?.name)
        }
    });
    return director
}

function getWriters(crew) {
    let writers = []
    crew?.forEach(crewmate => {
        if (crewmate?.job === 'Writer') {
            writers.push(crewmate?.name)
        }
    })
    return writers
}

function getRunTime(mins) {
    let hours = Math.round(mins/60);
    let min = mins%60;
    return `${hours}h ${min}mins`
}

export default MovieDetail
