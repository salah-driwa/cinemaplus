import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import requests from '../../Requests';
import { RxCountdownTimer } from 'react-icons/rx';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs';
import Upcamingcard from './Upcomingcard';
function Upcaming(){
    const [movies, setMovies] = useState([]);
    const containerRef = useRef(null);
  
    useEffect(() => {
      axios.get(requests.requestUpcoming).then((response) => {
        setMovies(response.data.results);
      });
    }, []);
  
    const scrollLeft = () => {
      containerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    };
  
    const scrollRight = () => {
      containerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    };
  
    return (
      <div className="text-4xl text-text h-screen  mt-10 ml-10">
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
        <div className=' flex   overflow-x-auto'  ref={containerRef}>
         
      {movies.map((movie) => ( <div>
        <Upcamingcard movie={movie} />
       </div> 
          )) }
      </div>
      </div>
    );
  }

export default Upcaming