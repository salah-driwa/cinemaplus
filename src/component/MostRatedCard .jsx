import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {AiFillStar} from 'react-icons/ai'
const MostRatedCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
    onHoverStart={()=>setIsHovered(true)}
    onHoverEnd={()=>setIsHovered(false)}
  className="flex  rounded-md p-10  w-11/12 m-2  bg-opacity-20  cursor-pointer
 bg-[#666666] "
  style={{
    borderRadius: '4px',
    padding: '10px',
    boxSizing: 'border-box',
    
  }}
  whileHover={{
    background:'linear-gradient(#141414 , #141414 ) 50% 50%/calc(100% - 7px) calc(100% - 7px) no-repeat, linear-gradient(90deg, red 0%, purple 100%)', 
    scale: 1.01,
  }}
>
  <div className="mr-4">
    <img
      className="  w-12 h-full object-cover"
      src={`https://image.tmdb.org/t/p/original/${movie.movie?.poster_path}`}
      alt={movie?.title}
    />
  </div>
  <div>
    <h2 className="text-lg font-bold mb-2 text-text">{movie.movie?.original_title}</h2>
    <span className='flex' >  
    <span className='bg-white flex   mx-2 w-fit px-2  rounded-xl bg-opacity-20 text-text opacity-60 '>  <h2 className="text-sm font-light">{movie.movie?.original_language}</h2> </span>

    <span className='bg-white flex   mx-2 w-fit px-2  rounded-xl bg-opacity-20 text-text  '> <motion.span animate={{rotate:isHovered ? 360:0 }}><AiFillStar color='yellow' className='pt-1'/></motion.span><h2 className="text-sm font-light  opacity-60 pl-1">{movie.movie?.vote_average}</h2>
  </span>
  <h2 className="text-sm font-light  opacity-60  text-text pl-3">{movie.movie?.release_date
} </h2> </span> 

 
  </div>
</motion.div>



  );
};

export default MostRatedCard;
