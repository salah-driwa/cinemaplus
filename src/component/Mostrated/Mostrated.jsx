import React, { useRef } from 'react'
import axios from 'axios'
import requests  from '../../Requests'
import { useState,useEffect } from 'react'
import MostRatedCard from './MostRatedCard '
import Skeltoncard from './Skeltoncard'

function Mostrated() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);
  const compareGenres = (prevGenres, newGenres) => {
    if (prevGenres.length !== newGenres.length) {
      return false;
    }
  
    for (let i = 0; i < prevGenres.length; i++) {
      if (prevGenres[i].id !== newGenres[i].id || prevGenres[i].name !== newGenres[i].name) {
        return false;
      }
    }
  
    return true;
  };
  
  const prevGenresRef = useRef([]);
  
  useEffect(() => {
    axios
      .get(requests.requestGenreList)
      .then((response) => {
        const newGenres = response.data.genres;
        if (newGenres.length > 0) {
          if (!compareGenres(prevGenresRef.current, newGenres)) {
            setGenres(newGenres);
            console.log(newGenres);
          } else {
            console.log("Genres data is the same as the previous value.");
          }
          prevGenresRef.current = newGenres;
        } else {
          console.log("Genres data is not available.");
        }
      })
      .catch((error) => {
        console.log(error);
        // Handle errors
      });
  }, []);
  

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
          genres={genres}
        />
       </div>  
        ))
      )}
    </div>
  );
}

export default Mostrated;