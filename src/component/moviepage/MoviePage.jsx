import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import requests from '../../Requests';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [currentServer, setCurrentServer] = useState('Server1URL');

  const handleServer1 = () => {
    setCurrentServer('Server1URL');
  };
  const handleServer2 = () => {
    setCurrentServer('Server2URL');
  };
  useEffect(() => {
    // Fetch movie data using the ID and set it in the state
    // You can use an API call or fetch the data from your local state/Redux store

    // Example API call using the ID
    const fetchMovieData = async () => {
        try {
            const response = await axios.get(requests.movierequest(0,"","",id));
            setMovie(response.data);
            
          } catch (error) {
            console.error('Error fetching movies:', error);
            
          }
    
    };

    fetchMovieData();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  // Render the movie details
  return (
    <div className="movie-page text-white  pt-32">
    <h2>{movie[0].Title}</h2>
    <p>{movie[0].Description}</p>
    <img src={movie[0].ImageURL} alt={movie[0].Title} />

    <div className="mt-4 flex justify-center">
        <button className="mr-2" onClick={handleServer1}>
        Server 1
        </button>
        <button className="mr-2" onClick={handleServer2}>
        Server 2
        </button>
        <iframe
          src={movie[0].Server2URL}
          title="Movie Player"
          width="800"
          height="450"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    {/* Additional movie details */}
  </div>
  );
};

export default MoviePage;
