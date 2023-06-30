import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {AiFillStar,AiFillHeart} from 'react-icons/ai'


const Trandingcard = ({ movie,genres }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isfavorit, setisfavorit] = useState(false);
  
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
  className=" rounded-md    w-72   h-[410px]  m-5 sm:m-2 
   bg-opacity-20  cursor-pointer overflow-hidden 
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

  <div className=" overflow-hidden  relative ">
    <motion.img
    animate={{  scale:isHovered ?1.1:1}}
        transition={{ duration: 0.6 }}
      className="w-full h-72 object-cover rounded-md  relative"
      src={`https://image.tmdb.org/t/p/original/${movie.movie?.poster_path}`}
      alt={movie?.title}
    /> <motion.div className=" absolute top-0  right-0 px-3 pt-2 z-30  " initial={{opacity:0.7}} whileHover={{scale:1.2,opacity:1}} animate={{
        color: isfavorit ? 'red' : '', opacity: isfavorit ?1:0.7 ,scale:isfavorit ? [1,1.1,1]:1 
      }}    
      onClick={()=>setisfavorit(!isfavorit)}><AiFillHeart className=''/></motion.div> 
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
   
  <span className="flex my-4">
  <span className="bg-white flex mx-2 w-fit px-2 rounded-xl bg-opacity-20 text-text h-fit">
             <motion.span animate={{ rotate: isHovered ? 360 : 0 }}>
               <AiFillStar color="yellow" className="h-5 w-4" />
             </motion.span>
             <h2 className="text-sm font-light opacity-60 pl-1">
               {movie.movie?.vote_average}
             </h2>
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
   
 
          
           <span className="bg-white h-fit flex mx-2 w-fit px-2 rounded-xl bg-opacity-20 text-text opacity-60">
             <h2 className="text-sm font-light">
               {movie.movie?.release_date.substring(0, 4)}
             </h2>
           </span>
         </span>
<h2 className="text-lg font-bold mb-2 text-text  ml-5  ">{movie.movie?.original_title}</h2>
  
  </div>
</motion.div>



  );
};

export default Trandingcard;
