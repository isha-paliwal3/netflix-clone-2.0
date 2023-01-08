import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Row.css'
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube'
import { CloseOutlined } from '@mui/icons-material';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.table(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    }
    else {
      movieTrailer(movie?.name || " ")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  }

  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: '300%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  

  return (
    <>
      <div className='row'>
        <h2 className='row-title'>{title}</h2>
        <div className='row-posters'>
          {movies.map(movie => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className='row-poster'
              src={base_url + movie.backdrop_path}
              alt={movie.name} />
          ))}

        </div>
        {trailerUrl &&
          <div className='trailer-container'>
            <div className='trailer-info'>
              <CloseOutlined className='close-btn' onClick={() => setTrailerUrl('')}/>
              <YouTube videoId={trailerUrl} opts={opts} />
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Row;
