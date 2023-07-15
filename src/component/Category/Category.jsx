import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import requests from '../../Requests';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Skeltoncards from '../Tranding_section/Skeltoncards';
import Trandingcard from '../Tranding_section/Trandingcard';

function Category() {
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [Drama, setDrama] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Action');
  const [loading, setLoading] = useState(true);

   

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(requests.movierequest(30,'','comic'));
        setComedyMovies(response.data);
        const response2 = await axios.get(requests.movierequest(30,'','romantic'));
        setRomanceMovies(response2.data);
        const response3 = await axios.get(requests.movierequest(30,'','action'));
        setActionMovies(response3.data);
        const response4 = await axios.get(requests.movierequest(30,'','comic'));
        setDrama(response4.data);
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
    

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -1000,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 1000,
      behavior: 'smooth',
    });
  };

  const switchCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="sm:text-4xl text-2xl text-text mt-7  sm:mt-10  h-[500px]">
      <div className="flex items-center sm:mb-7 ml-10 ">
        <motion.span
          animate={{ y: [0, 5, 0]}}
          transition={{ repeat: 'true', duration: 1.3 }}
        >
          <BiSolidCategoryAlt />
        </motion.span>
        <span className=" sm:ml-2">categoeries</span>
        <div className="flex ml-auto  sm:mr-32 mr-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mr-6 bg-transparent border-none outline-none"
            onClick={scrollLeft}
          >
            <BsFillArrowLeftCircleFill color="red" />
          </motion.button>
          <motion.button
            className="bg-transparent border-none outline-none"
            whileHover={{ scale: 1.1 }}
            onClick={scrollRight}
          >
            <BsFillArrowRightCircleFill color="red" />
          </motion.button>
        </div>
      </div>
      <div className="flex sm:flex-row  mt-10 flex-col justify-center mb-4  pl-7 ">
        <button
          className={`mr-4 focus:outline-none  ${
            activeCategory === 'Action' ? 'text-primary-button' : 'text-gray-500'
          }`}
          onClick={() => switchCategory('Action')}
        >
          Action
        </button>
        <button
          className={`mr-4 focus:outline-none py-2 ${
            activeCategory === 'Comedy' ? 'text-primary-button' : 'text-gray-500'
          }`}
          onClick={() => switchCategory('Comedy')}
        >
          Comedy
        </button>
        <button
          className={`mr-4 focus:outline-none py-2 ${
            activeCategory === 'Romance' ? 'text-primary-button' : 'text-gray-500'
          }`}
          onClick={() => switchCategory('Romance')}
        >
          Romance
        </button>
        <button
          className={`focus:outline-none text-center mr-4 py-2  ${
            activeCategory === 'drama' ? 'text-primary-button' : 'text-gray-500'
          }`}
          onClick={() => switchCategory('drama')}
        >
          Drama
        </button>
      </div>
      <div className="flex overflow-x-auto snap-mandatory snap-x scrollbar-hide  w-11/12 m-auto" ref={containerRef}>
      {loading ? (
        Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <Skeltoncards />
          </div>
        )) // Display skeleton cards while loading
        ) : (
          <div className="flex overflow-x-auto snap-mandatory snap-x scrollbar-hide  w-11/12 m-auto" ref={containerRef}>
  {activeCategory === 'Action' &&
    actionMovies.map((movie) => (
      <div key={movie._id}>
        <div className="snap-center">
          <Trandingcard key={movie._id} movie={movie} />
        </div>
      </div>
    ))}
  {activeCategory === 'Comedy' &&
    comedyMovies.map((movie) => (
      <div key={movie._id}>
        <div className="snap-center">
          <Trandingcard key={movie._id} movie={movie} />
        </div>
      </div>
    ))}
  {activeCategory === 'Romance' &&
    romanceMovies.map((movie) => (
      <div key={movie._id}>
        <div className="snap-center">
          <Trandingcard key={movie._id} movie={movie} />
        </div>
      </div>
    ))}
  {activeCategory === 'drama' &&
    Drama.map((movie) => (
      <div key={movie._id}>
        <div className="snap-center">
          <Trandingcard key={movie._id} movie={movie} />
        </div>
      </div>
    ))}
</div>

       
        )}
       
      </div>
    </div>
  );
}

export default Category;
