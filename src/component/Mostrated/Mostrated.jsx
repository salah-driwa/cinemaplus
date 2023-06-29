import React from 'react'
import axios from 'axios'
import requests  from '../../Requests'
import { useState,useEffect } from 'react'
import MostRatedCard from './MostRatedCard '
import Skeltoncard from './Skeltoncard'

function Mostrated() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 2000; // 2 seconds

    const timer = setTimeout(() => {
      axios.get(requests.requestTopRated).then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      });
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='sm:w-[600px] mt-10'>
      <span className='ml-3 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-button to-violet-500'>
        Most Rated
      </span>

      {loading ? (
        Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <Skeltoncard />
          </div>
        ))
      ) : (
        movies.slice(0,10).map((movie) => (<div>  <MostRatedCard
          movie={{movie
          }}
        />
       </div>  
        ))
      )}
    </div>
  );
}

export default Mostrated;