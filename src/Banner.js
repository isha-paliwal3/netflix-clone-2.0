import React, { useEffect, useState } from 'react'
import requests from './requests';
import axios from 'axios';
import { InfoOutlined, PlayArrowRounded } from '@mui/icons-material';
import './Banner.css'

function Banner() {

    const [movie, Setmovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            Setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);

            return request;
        }

        fetchData();
    }, [])

    console.log(movie);

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
                position: "relative"
            }}>
            <div className='banner-contents'>
                <h1 className='banner-title'> 
                    {movie?.title || movie?.name}
                </h1>

                <h1 className='banner-desc'>{movie.overview}</h1>

                <div className='banner-buttons'>
                    <button className="play">
                        <PlayArrowRounded className='icon-play' />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined className='icon-info' />
                        <span>More Info</span>
                    </button>
                </div>
            <div className='fade-left'></div>
            </div>
            <div className='fade-bottom'></div>
        </header>
    )
}

export default Banner
