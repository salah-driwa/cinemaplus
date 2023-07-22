import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import AnimationSection from '../Animation';
import { Link } from 'react-router-dom';
import Account from '../Account';
import { UserAuth } from '../../context/AuthContext';
import requests from '../../Requests';
import Searchcards from './Searchcards';

const Navbar = () => {
  const {user} = UserAuth()
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (searchQuery.trim() !== '') {
          const response = await axios.get(requests.movierequest(5, searchQuery));
          setSearchResults(response.data);
        } else {
          setSearchResults([]); // Clear search results when the search query is empty
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);
  const clearSearch = () => {
    setSearchQuery('');
    const searchInput = document.getElementById('default-search');
    if (searchInput) {
      searchInput.value = '';
    }
  };



  return (
    <nav className="flex justify-between items-center w-full   absolute  bg-opacity-0  z-30">
        <AnimationSection x={0} y={-10}>
      <div className="h-full sm:text-3xl  text-md  text-text m-5 cursor-pointer ">
        <Link to={'/home'}>
        <motion.div
          whileHover={{
            scale:1.06,
            textShadow: "0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 55px #ff0000, 0 0 75px #ff0000",
            color: "#ffffff",
            transition: { duration: 1 }
          }}
        >
          CinemaPlus
        </motion.div>
        </Link> 
      </div>
      </AnimationSection>    

      <form className=' hidden sm:block'>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white   ">Search</label>
    <div class="relative  ">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none  ">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block  w-96  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  opacity-60" placeholder="Search ..." required  onChange={handleSearchChange}/>
       <Link to={'/Filter'}> <button   class="text-white absolute right-2.5 bottom-2.5   focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2  bg-primary-button font-bold">Filter By</button> </Link>
     
        <div>
      {searchResults.length > 0 ? (
        <div className="flex flex-col  absolute">
          
          {searchResults.map((movie) => (
            <div className=' py-0.5' onClick={()=>clearSearch()}>
            <Searchcards key={movie.id} movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
    
    </div>
</form>

     <div className="flex items-center  text-base sm:gap-10 ">
    

<Account/>





 <Link to={"/Signup"}>
{user ? <div/>:<AnimationSection x={-15} y={0} delay={0.4}>
        <motion.button 
          whileHover={{scale:1.05 , rotate:[0,10,-10,10,-10,10,0]}}
          className="text-text  text-sm font-extrabold mr-4 bg-primary-button rounded-md  drop-shadow-md   w-20  h-8 sm:h-12 sm:w-32 sm:py-3 sm:px-8 ">Sign Up</motion.button>
</AnimationSection> }
</Link>
      </div>
    </nav>
  );
};

export default Navbar;
