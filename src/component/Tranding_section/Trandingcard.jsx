import { motion } from 'framer-motion';
import React, { useState } from 'react';

import {AiFillStar} from 'react-icons/ai'

const MostRatedCard = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
    onHoverStart={()=>setIsHovered(true)}
    onHoverEnd={()=>setIsHovered(false)}
  className=" rounded-md    w-72   h-[410px]  m-2 
   bg-opacity-20  cursor-pointer relative
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

  <div className=" overflow-hidden ">
    <motion.img
    animate={{  scale:isHovered ?1.1:1}}
        transition={{ duration: 0.6 }}
      className="w-full h-72 object-cover rounded-md  scrollbar-hide  overflow-hidden"
      src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
      alt={movie?.title}
    />
     <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-md"
        style={{
          background: isHovered
            ? 'linear-gradient(to top, red, transparent)'
            : 'none',
        }}
        initial={false}
        animate={isHovered ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
  </div>
  <div className=' mt-2'>
   
    <span className='flex' >  
    <span className='bg-white flex   mx-2 w-fit px-2  rounded-xl bg-opacity-20 h-6 text-text opacity-60 '>  <h2 className="text-sm font-light">{movie?.original_language}</h2> </span>

    <span className='bg-white flex   mx-2 w-fit px-2  rounded-xl bg-opacity-20 text-text  '><AiFillStar color='yellow' className='pt-1'/><h2 className="text-sm font-light  opacity-60 pl-1">{movie.movie?.vote_average}</h2>
  </span>
  <h2 className="text-sm font-light  opacity-60  text-text pl-3">{movie.movie?.release_date
} </h2> </span> 
<h2 className="text-lg font-bold mb-2 text-text    ">{movie?.original_title}</h2>
    <p className="text-sm text-gray-500">{console.log(movie)}</p>
  </div>
</motion.div>



  );
};

export default MostRatedCard;
