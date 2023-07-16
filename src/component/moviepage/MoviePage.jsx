import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import requests from '../../Requests';
import Trandingcard from '../Tranding_section/Trandingcard';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [genre, setGenre] = useState();
  const [semilarmovies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(requests.movierequest(0, "", "", id));
        setMovie(response.data);
        setGenre(response.data[0].Genres[0]);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };
  
    fetchMovieData();
  }, [id]);
  
  useEffect(() => {
    const fetchSimilarMovies = async () => {
      try {
        if (genre) {
          const response = await axios.get(requests.movierequest(15, "", genre));
          setMovies(response.data);
         
        }
      } catch (error) {
        console.error('Error fetching similar movies:', error);
      }
    };
  
    fetchSimilarMovies();
  }, [genre]);
  
  // Rest of your component code
  

  if (!movie) {
    return <div>Loading...</div>;
  }

  // Render the movie details
  return (
    <div className="movie-page text-white  pt-32 flex justify-center flex-col   w-9/12 m-auto">
      <div className=' flex  bg-slate-100  bg-opacity-10 p-8 rounded-sm'>
        <div className=' flex flex-col'>
    <h2 className='  font-extrabold text-3xl'>{movie[0].Title}</h2>
     <span className=' mt-10 ml-2'>Genres : 
    {movie[0].Genres.map((genre)=>
       <span className="text-sm font-light opacity-60 pl-1  p-0.5"> {genre}</span>
       )}</span>
      
       <div className=' mt-10'> 
       <h2 className='  font-extrabold text-xl'> the story of the movie</h2>
          <p>{movie[0].Description}</p>
          </div>
       </div>

    <img src={movie[0].ImageURL} alt={movie[0].Title} className=' ml-auto   h-96  rounded-md' />
 
    </div>

    
    <div className="mt-20 mb-32 flex  flex-col justify-center  ">
       <h1 className=' font-extrabold text-2xl text-center mb-10'>Watch servers </h1>
        <iframe className=' m-auto'
          src={movie[0].Server2URL}
          title="Movie Player"
          width="800"
          height="450"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    {/* Additional movie details */}


    <section className='' >
      <h2 className='  font-bold text-xl text-center p-5'> you may also like</h2>
      <div className=' flex  flex-wrap  justify-center'>
      {semilarmovies.length > 0 ? (
  semilarmovies
    .filter((movie) => movie.movieId !== id) // Exclude movies with the same ID
    .map((movie) => (
      <div key={movie._id}>
        <Trandingcard key={movie._id} movie={movie} />
      </div>
    ))
) : (
  <p>No similar movies found.</p>
)}

  </div>
</section>

  </div>
  );
};

export default MoviePage;
