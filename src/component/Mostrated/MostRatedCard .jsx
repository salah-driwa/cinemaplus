import { motion } from 'framer-motion';
import React, {  useState } from 'react';
import {AiFillStar} from 'react-icons/ai'
import 'react-loading-skeleton/dist/skeleton.css'

const MostRatedCard = ({ movie,genres }) => {

  
  const [isHovered, setIsHovered] = useState(false);

  const getGenreNames = () => {
    const genreNames = movie.movie.genre_ids
      .slice(0, 1) // Get the first two genre IDs
      .map((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : '';
      });
    return genreNames.join(', ');
  };
  
    
  return (
    <motion.div
    onHoverStart={()=>setIsHovered(true)}
    onHoverEnd={()=>setIsHovered(false)}
  className="flex  rounded-md p-10 sm:w-11/12 m-4 sm:m-3  bg-opacity-20  cursor-pointer
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
    <span className='flex' > <span className='bg-white flex   mx-2 w-fit px-2  rounded-xl bg-opacity-20 text-text  '> <motion.span animate={{rotate:isHovered ? 360:0 }}><AiFillStar color='yellow' className='pt-1'/></motion.span><h2 className="text-sm font-light  opacity-60 pl-1">{movie.movie?.vote_average}</h2>
  </span>  
  {movie.movie.genre_ids.length > 0 && (
    <span
      className="bg-white h-fit flex mx-2 w-fit px-2 rounded-xl bg-opacity-20 text-text"
      style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '160px', // Adjust the value based on your preference
      }}
    >
      <h2 className="text-sm font-light opacity-60 pl-1">
        {getGenreNames()} ..
      </h2>
    </span>
  )}
   
  <h2 className="bg-white flex text-sm   mx-2 w-fit px-2  rounded-xl bg-opacity-20 text-text opacity-60 ">{movie.movie?.release_date.substring(0, 4)
} </h2> 

</span> 

 
  </div>
 
</motion.div>



  );
};

export default MostRatedCard;
