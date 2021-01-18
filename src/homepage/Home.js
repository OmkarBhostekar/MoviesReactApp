import React from 'react'
import Row from './Row';
import Banner from './Banner';
import Nav from '../Nav';
import requests from '../requests';
import '../homepage/Home.css';
function Home() {
    return (
        <div className="App">
        {/* <Nav/> */}
        <Banner/>
        {/* <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/> */}
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} mType='both'/>
        <Row title="Popular TV Shows" fetchUrl={requests.fetchPopulerTv} mType='tv'/>
        <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} mType='movie'/>
        <Row title="Top Rated TV Shows" fetchUrl={requests.fetchTopRatedTv} mType='tv'/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} mType='movie'/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} mType='movie'/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} mType='movie'/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} mType='movie'/>
        {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} mType='movie'/> */}
        </div>
    )
}

export default Home
