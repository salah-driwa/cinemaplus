import { motion } from 'framer-motion';
import React from 'react';

const MostRatedCard = ({ movie }) => {
  
  return (
    <motion.div
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
      src={`https://image.tmdb.org/t/p/original/${movie.movie?.backdrop_path}`}
      alt={movie?.title}
    />
  </div>
  <div>
    <h2 className="text-lg font-bold mb-2 text-text">{movie.movie?.original_title}</h2>
    <h2 className="text-lg font-bold mb-2 text-text">{movie.movie?.original_language}</h2>
    <p className="text-sm text-gray-500">{console.log(movie)}</p>
  </div>
</motion.div>



  );
};

export default MostRatedCard;
