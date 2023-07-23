import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Trandingcard from '../component/Tranding_section/Trandingcard';
import requests from '../Requests';
import Skeltoncards from '../component/Tranding_section/Skeltoncards';

function Filter() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [Genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch all movies from the API
    const fetchMovies = async () => {
      try {
        const response = await axios.get(requests.movierequest(0,searchQuery,selectedGenres)); // Replace with your actual API URL
        setMovies(response.data); 
        setLoading(false);// Assuming response.data contains an array of movies
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [searchQuery,selectedGenres]);

  useEffect(() => {
    // Fetch all genres from the API
    const fetchMovies = async () => {
      try {
        const response1 = await axios.get(requests.requestGenres); // Replace with your actual API URL
        setGenres(response1.data);
         // Assuming response.data contains an array of genres
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  // Calculate the movies to display for the current page (44 movies per page)
  const moviesPerPage = 44;
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const moviesToDisplay = movies.slice(startIndex, endIndex);

  // Handle search bar input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // Implement the search logic here to filter movies based on the searchQuery
  };

  // Handle genres selector change
  const handleGenresChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedGenres(selectedOptions);
    // Implement the logic here to filter movies based on selectedGenres
  };
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // Handle pagination - go to next page
  const handleNextPage = () => {
    handleLinkClick()
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Handle pagination - go to previous page
  const handlePreviousPage = () => {
    handleLinkClick()
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      {/* Search bar */}
      <div className=' flex flex-col w-10/12 sm:flex-row pt-36 my-0 sm:my-5 sm:gap-16  m-auto'>
      <div className=' flex   justify-between  w-full   '>
      <div class="relative   sm:w-fit w-full  flex justify-center">
        <div class="absolute inset-y-0 left-10 sm:left-0 flex items-center sm:pl-3 pointer-events-none   w-full">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block  sm:w-96 w-10/12  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  opacity-60" placeholder="Search movies..." required  value={searchQuery} onChange={handleSearchChange}/>
      
     </div>
    
</div>
      {/* Genres selector */}
      <div className=' h-10 sm:my-0  w-10/12 m-auto my-10'>
      <label htmlFor="genres" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
        Select Genres
      </label>
      <select
        id="genres"
        
        value={selectedGenres}
        onChange={handleGenresChange}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {Genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre===""? 'All Generes' :genre }
          </option>
        ))}
      </select>
      </div>
    </div>

      {/* Display movies using Trandingcard */}
      <div className="gap-4 flex flex-row flex-wrap w-11/12 m-auto justify-center">
      {loading ? (
        // Render SkeletonCard components while data is being fetched
        Array.from({ length: 15 }).map((_, index) => <div className=' '><Skeltoncards key={index} /></div>)
      ) : (
        // Render actual movie cards once data is fetched
       
        moviesToDisplay.map((movie) => <Trandingcard key={movie.id} movie={movie} />)
      )}
    </div>

      {/* Pagination */}
      <div className=' text-white flex justify-center'>
        <button onClick={handlePreviousPage}  className=' bg-red-600 rounded-md p-3 mx-5 mt-5' disabled={currentPage === 1}>
          Previous
        </button>
        <span className=' px-2 pt-7'>{currentPage}</span>
        <button onClick={handleNextPage}  className=' bg-red-600 rounded-md p-3 mx-5 mt-5' disabled={endIndex >= movies.length}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Filter;
