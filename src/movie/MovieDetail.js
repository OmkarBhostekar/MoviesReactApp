import { useEffect, React, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "../axios";
import './MovieDetail.css'

function MovieDetail() {

    let { id } = useParams()

    const image_base_url = "https://image.tmdb.org/t/p/original"


    const fetchUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=5e08ba1c1a1dcf7f83c837a7b9db7776&language=en-US`

    const [movieDetail, setMovieDetail] = useState()

    useEffect(() => {
        async function fetchData() {
            console.log(fetchUrl);
            const request = await axios.get(fetchUrl);
            setMovieDetail(request.data)
            console.log(request.data);
            return request
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className="movieDetail">
            {/* <img src={`${image_base_url}${movieDetail && movieDetail.backdrop_path}`} alt="" className="img img-backdrop"/>
            <h1 id="title">{ movieDetail && movieDetail.original_title}</h1> */}
            <header className="backdrop_image"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(
                        "${image_base_url}${movieDetail?.backdrop_path}"
            )` ,
            backgroundPosition: "center center"
            }}/>
            <div className="main_info">
                <img className="poster_image" cla src={`${image_base_url}${movieDetail?.poster_path}`} alt=""/>
                <h1>{`${movieDetail?.original_title} (${movieDetail?.release_date.substring(0,4)})`}</h1>
                <h5 className="overview">{`${movieDetail?.overview}`}</h5>
            </div>
        </div>
    )
}

export default MovieDetail
