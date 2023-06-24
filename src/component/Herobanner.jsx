import React, { useEffect, useState } from 'react'
import requests  from '../Requests'
import axios from 'axios'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import AnimationSection from './Animation'
export const Herobanner = () => {
    const [movie,setMovies] =useState([])
    const controls = useAnimation();
    const [currentSlide, setCurrentSlide] = useState(0);


    const handlePrevClick = () => {
        setCurrentSlide((currentSlide - 1 + movie.length) % movie.length);
      };
    
      const handleNextClick = () => {
        setCurrentSlide((currentSlide + 1) % movie.length);
      };
    
    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>
        { setMovies(response.data.results)
        })
    },[])

   // console.log(movie)

const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0.4 },
  }

  const goto =(index) =>{
    setCurrentSlide( index);
  }
useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % movie.length);
    }, 5500);

    return () => clearInterval(intervalId);
  }, [currentSlide, movie.length]);



useEffect(() => {
    controls.start({ width: ['3%','100%'] });
  }, [currentSlide, controls]);


  return (
    
    <div className='w-full h-[800px] text-white'>
    <motion.div  key={currentSlide}
           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
    className='w-full h-full'>
      <div className='absolute w-full h-[800px] bg-gradient-to-r from-black z-10'></div>
      <div className='absolute w-full h-[800px] bg-gradient-to-l opacity-20 from-black z-10'></div>
      <AnimatePresence initial={false}>
    
      <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
        className=' w-full h-[800px]    object-cover  absolute z-0'
        src={`https://image.tmdb.org/t/p/original/${movie[currentSlide]?.backdrop_path}`}
        alt={movie[currentSlide]?.title}
      />

       
      <div className='absolute  w-fit top-[20%] left-20 px-12  py-10   z-20'>
      <AnimationSection > 
        <h1 className='text-3xl md:text-5xl font-bold'>{movie[currentSlide]?.title}</h1></AnimationSection>
        <AnimationSection delay={0.1}> 
        <div className='my-4'>
          <motion.button className='border  text-text  border-primary-button rounded-sm  py-2 px-6  bg-primary-button'
          whileHover={{scale:1.05,y:-5}}>
            Play
          </motion.button>

         <motion.button className='border text-white border-gray-300 py-2 px-5 ml-6 rounded-sm  '
           whileHover={{scale:1.05 ,y:-5}}>
            Watch Later
          </motion.button>
        </div>
        </AnimationSection>

        <AnimationSection>   <p className='text-gray-400 text-sm pl-3'>
          Released: {movie[currentSlide]?.release_date}
        </p></AnimationSection>
        
        <AnimationSection delay={0.3 } >   <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 pl-3'>
          {truncateString(movie[currentSlide]?.overview, 150)}
        </p> </AnimationSection> 
      </div>
   
      </AnimatePresence>
      <motion.button
        initial={{scale:1,opacity:0.6}}
        whileHover={{scale:1.08,opacity:1}} 
            className="absolute text-light top-[40vh] xl:top-[40vh] left-2 sm:left-10 text-5xl transform -translate-y-1/2  z-10"
          onClick={handlePrevClick}
        >
          ❰
        </motion.button>

        <motion.button
        initial={{scale:1,opacity:0.6}}
        whileHover={{scale:1.08,opacity:1}}
          className="absolute    text-text top-[40vh] xl:top-[40vh] right-2  sm:right-10 text-5xl transform -translate-y-1/2  z-20"
          onClick={handleNextClick}
        >
          ❱
        </motion.button>


    </motion.div>
    <div className=' relative   bottom-0   -top-20  text-7xl  h-auto z-50 flex justify-center'>
    {movie.map((movie, index) => (
        <motion.button  className=' h-1 text-white  relative ' key={index}
        initial={{opacity:0.4}}
         animate={currentSlide === index ? "visible" :"hidden"}
        variants={variants}   whileHover={{opacity:1}} onClick={() =>goto(index)}>
        —
        </motion.button>
       ))
       }
             <motion.div
  animate={controls}
  transition={{ duration: 5.5 }}
  className="absolute left-0 -bottom-[76px] bg-gradient-to-l from-primary-button via-primary-button to-transparent h-2"
></motion.div>


       </div>
       
       
  </div>
  )
}
