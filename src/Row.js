import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.table(movies);

  return (
    <div className='row'>
      <h2 className='row-title'>{title}</h2>
      <div className='row-posters'>
        {movies.map(movies => (
          <img
          key={movies.id}
          className='row-poster'
          src={base_url + movies.backdrop_path }
          alt={movies.name} />
          ))}

      </div>

    </div>
  )
}

export default Row;
