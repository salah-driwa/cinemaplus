import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {AiFillStar,AiFillHeart} from 'react-icons/ai'

const Upcamingcard = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isfavorit, setisfavorit] = useState(false);
  return (
    <motion.div
    onHoverStart={()=>setIsHovered(true)}
    onHoverEnd={()=>setIsHovered(false)}
  className=" rounded-md    w-72   h-[410px]  m-2 
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
      src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
      alt={movie?.title}
    />
   <motion.div className=" absolute top-0  right-0 px-3 pt-2 z-30  " initial={{opacity:0.7}} whileHover={{scale:1.2,opacity:1}} animate={{
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
   
  <span className='flex my-4' >  
    <span className='bg-white flex   mx-2 w-fit px-2  rounded-xl bg-opacity-20 text-text opacity-60 '>  <h2 className="text-sm font-light">{movie?.original_language}</h2> </span>

    <span className='bg-white flex   mx-2 w-fit px-2  rounded-xl bg-opacity-20 text-text  '> <motion.span animate={{rotate:isHovered ? 360:0 }}><AiFillStar color='yellow' className=' h-5 w-4'/></motion.span><h2 className="text-sm font-light  opacity-60 pl-1">{movie?.vote_average}</h2>
  </span>
  <h2 className="text-sm font-light  opacity-60  text-text pl-3">{movie?.release_date
} </h2> </span> 
<h2 className="text-lg font-bold mb-2 text-text    ">{movie?.original_title}</h2>
    <p className="text-sm text-gray-500">{console.log(movie)}</p>
  </div>
</motion.div>



  );
};

export default Upcamingcard;
