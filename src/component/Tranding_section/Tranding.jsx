import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import requests from '../../Requests';
import { AiFillFire } from 'react-icons/ai';
import Trandingcard from './Trandingcard';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs';
import Skeltoncards from './Skeltoncards';
function Tranding() {

  const containerRef = useRef(null);
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

  return (
    <div className="sm:text-4xl  text-2xl text-text  mt-7 ml-4  sm:mt-10 sm:ml-10  h-[500px] ">
      <div className="flex items-center sm:mb-7">
        <motion.span
          animate={{ y: [0, 5, 0], scaleY: [1, 1.1, 0.9, 1] }}
          transition={{ repeat: 'true', duration: 1.3 }}
        >
          <AiFillFire />
        </motion.span>
        <span className="ml-2">Trending</span>
        <div className="flex ml-auto mr-10">
          <motion.button
          whileHover={{scale:1.1}}
            className="mr-6 bg-transparent border-none outline-none"
            onClick={scrollLeft}
          >
            <BsFillArrowLeftCircleFill color='red'  />
                      </motion.button>
                      <motion.button
            className="bg-transparent border-none outline-none"
            whileHover={{scale:1.1}}
            onClick={scrollRight}
          >
           <BsFillArrowRightCircleFill color='red'/>
           </motion.button>
        </div>
      </div>
      <div className=' flex    overflow-x-scroll snap-mandatory snap-x scrollbar-hide sm:scrollbar-visible '  ref={containerRef}>
   
           {loading ? (
        Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <Skeltoncards />
          </div>
        ))
      ) : (
       
        movies.map((movie) => (
          <div className=' snap-center'>
          <Trandingcard key={movie._id} movie={movie} />
          </div>
        ))
      
      )}
    </div>
    </div>
  );
}

export default Tranding;
