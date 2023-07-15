import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../Requests';

const Test = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(requests.movierequest(10));
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    const delay = 500; // 0.5 seconds
    const timer = setTimeout(fetchMovies, delay);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div>
      {movies.map(movie => (
        <div key={movie._id}>
          <h2>{movie.Title}</h2>
          <p>{movie.Description}</p>
          <p>Genres: {movie.Genres.join(', ')}</p>
          <img src={movie.ImageURL} alt={movie.Title} />
          <div>
            <a href={movie.Server1URL}>Server 1</a>
            <a href={movie.Server2URL}>Server 2</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
