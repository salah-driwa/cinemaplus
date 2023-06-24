import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import requests from '../../Requests';
import { AiFillFire } from 'react-icons/ai';
import Trandingcard from './Trandingcard';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs';
function Tranding() {
  const [movies, setMovies] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    axios.get(requests.requestTrending).then((response) => {
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
    <div className="text-4xl text-text   mt-10 ml-10  h-[500px]">
      <div className="flex items-center mb-7">
        <motion.span
          animate={{ y: [0, 5, 0], scaleY: [1, 1.1, 0.9, 1] }}
          transition={{ repeat: 'true', duration: 1.3 }}
        >
          <AiFillFire />
        </motion.span>
        <span className="ml-2">Tranding</span>
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
      <Trandingcard movie={movie} />
     </div> 
        )) }
    </div>
    </div>
  );
}

export default Tranding;
