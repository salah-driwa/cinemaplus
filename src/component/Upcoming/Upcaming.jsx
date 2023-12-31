import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import requests from '../../Requests';
import { RxCountdownTimer } from 'react-icons/rx';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs';
import Upcamingcard from './Upcomingcard';
import Skeltoncards from '../Tranding_section/Skeltoncards';
function Upcaming(){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [genres, setGenres] = useState([]);

    const containerRef = useRef(null);
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
      const delay = 500; // 2 seconds

   const timer = setTimeout(() => {
      axios.get(requests.requestUpcoming).then((response) => {
        setMovies(response.data.results);
        setLoading(false);
        
      });
        }, delay);
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
      <div className="text-4xl text-text    mt-20    ml-4  sm:mt-10 sm:ml-10  h-[500px]">
        <div className="flex items-center mb-7">
          <motion.span
            animate={{ rotate:[0,-360] }}
            transition={{ repeat: 'true', duration: 1.3 }}
          >
            <RxCountdownTimer />
          </motion.span>
          <span className="ml-2">Up coming</span>
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
       
        <div className=' flex   overflow-x-auto snap-mandatory snap-x scrollbar-hide sm:scrollbar-visible'  ref={containerRef}>
         
      {loading ? (   Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <Skeltoncards />
          </div>
        ))
        ) : (
       movies.map((movie) => ( <div className=' snap-center'>
      <Upcamingcard movie={movie} genres={genres} />
     </div>  ))  )}

   
     
      </div>
      </div>
    );
  }

export default Upcaming