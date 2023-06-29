import React, { useEffect, useState } from 'react'
import requests  from '../Requests'
import axios from 'axios'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import AnimationSection from './Animation'
import { useSwipeable } from 'react-swipeable'
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
    const swipeHandlers = useSwipeable({
      onSwipedLeft: handleNextClick,
      onSwipedRight: handlePrevClick,
    });
      useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
          const movieList = response.data.results;
          const randomMovies = getRandomMovies(movieList, 5);
          setMovies(randomMovies);
        });
      }, []);
      
      // Function to get a random selection of movies
      const getRandomMovies = (movies, count) => {
        const shuffledMovies = movies.sort(() => 0.5 - Math.random());
        return shuffledMovies.slice(0, count);
      };
      

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
    
    <div {...swipeHandlers} className='w-full sm:h-[800px]  h-[500px] text-white'   >
    <motion.div  key={currentSlide}
           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
    className='w-full h-full'>
      <div className='absolute w-full sm:h-[800px] h-[400px]  bg-gradient-to-t from-black z-10 opacity-50'></div>
      <div className='absolute w-full sm:h-[800px] bg-gradient-to-b  opacity-80 from-black z-10'></div>
      <AnimatePresence initial={false}>
    
      <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
        className=' w-full sm:h-[800px]  h-auto   object-cover  absolute z-0 mt-14 sm:mt-0'
        src={`https://image.tmdb.org/t/p/original/${movie[currentSlide]?.backdrop_path}`}
        alt={movie[currentSlide]?.title}
      />

       
      <div className='absolute  w-fit sm:top-[20%]  top-24 mx-10 sm:left-20 sm:px-12  sm:py-10   z-20'>
      <AnimationSection > 
        <h1 className='text-xl md:text-5xl font-bold'>{movie[currentSlide]?.title}</h1></AnimationSection>
        <AnimationSection delay={0.1}> 
        <div className='sm:my-4 mt-20'>
          <motion.button className='border my-5  text-text  border-primary-button rounded-sm  sm:py-2 sm:px-6  sm:h-10 bg-primary-button w-20 h-8'
          whileHover={{scale:1.05,y:-5}}>
            Play
          </motion.button>

         <motion.button className='border text-white border-gray-300 sm:py-2 sm:px-6  sm:h-10 ml-6 rounded-sm  px-3  h-8'
           whileHover={{scale:1.05 ,y:-5}}>
            Watch Later
          </motion.button>
        </div>
        </AnimationSection>

        <AnimationSection>   <p className='text-gray-400 sm:text-sm pl-3'>
          Released: {movie[currentSlide]?.release_date}
        </p></AnimationSection>
        
        <AnimationSection delay={0.3 } >   <p className='w-full md:max-w-[70%]   lg:max-w-[50%] xl:max-w-[35%] text-gray-200 pl-3'>
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
