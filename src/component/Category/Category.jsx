import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import requests from '../../Requests';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import CategoryCard from './Categorycard';
import Skeltoncards from '../Tranding_section/Skeltoncards';

function Category() {
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Action');
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);

    
    const compareGenres = (prevGenres, newGenres) => {
      if (prevGenres.length !== newGenres.length) {
        return false;
      }
    
      for (let i = 0; i < prevGenres.length; i++) {
        if (prevGenres[i].id !== newGenres[i].id || prevGenres[i].name !== newGenres[i].name) {
          return false;
        }
      }
    
      return true;
    };
    
    const prevGenresRef = useRef([]);
    
    useEffect(() => {
      axios
        .get(requests.requestGenreList)
        .then((response) => {
          const newGenres = response.data.genres;
          if (newGenres.length > 0) {
            if (!compareGenres(prevGenresRef.current, newGenres)) {
              setGenres(newGenres);
              console.log(newGenres);
            } else {
              console.log("Genres data is the same as the previous value.");
            }
            prevGenresRef.current = newGenres;
          } else {
            console.log("Genres data is not available.");
          }
        })
        .catch((error) => {
          console.log(error);
          // Handle errors
        });
    }, []);
    



  useEffect(() => {
    const delay = 2000;
    const timer = setTimeout(() => {
    axios.get(requests.requestAction).then((response) => {
      const movies = response.data.results.map((movie) => ({
        ...movie,
        category: 'Action',
      }));
      setLoading(false);
      setActionMovies(movies);
    });
  }, delay);
  return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    axios.get(requests.requestComedy).then((response) => {
      const movies = response.data.results.map((movie) => ({
        ...movie,
        category: 'Comedy',
      }));
      setComedyMovies(movies);
    });
  }, []);

  useEffect(() => {
    axios.get(requests.requestRomance).then((response) => {
      const movies = response.data.results.map((movie) => ({
        ...movie,
        category: 'Romance',
      }));
      setRomanceMovies(movies);
    });
  }, []);

  useEffect(() => {
    axios.get(requests.requestHorror).then((response) => {
      const movies = response.data.results.map((movie) => ({
        ...movie,
        category: 'Horror',
      }));
      setHorrorMovies(movies);
    });
  }, []);

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -1000,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 1000,
      behavior: 'smooth',
    });
  };

  const switchCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="sm:text-4xl text-2xl text-text mt-7  sm:mt-10  h-[500px]">
      <div className="flex items-center sm:mb-7 ml-10 ">
        <motion.span
          animate={{ y: [0, 5, 0]}}
          transition={{ repeat: 'true', duration: 1.3 }}
        >
          <BiSolidCategoryAlt />
        </motion.span>
        <span className=" sm:ml-2">Category</span>
        <div className="flex ml-auto  sm:mr-32 mr-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mr-6 bg-transparent border-none outline-none"
            onClick={scrollLeft}
          >
            <BsFillArrowLeftCircleFill color="red" />
          </motion.button>
          <motion.button
            className="bg-transparent border-none outline-none"
            whileHover={{ scale: 1.1 }}
            onClick={scrollRight}
          >
            <BsFillArrowRightCircleFill color="red" />
          </motion.button>
        </div>
      </div>
      <div className="flex sm:flex-row  mt-10 flex-col justify-center mb-4  pl-7 ">
        <button
          className={`mr-4 focus:outline-none  ${
            activeCategory === 'Action' ? 'text-primary-button' : 'text-gray-500'
          }`}
          onClick={() => switchCategory('Action')}
        >
          Action
        </button>
        <button
          className={`mr-4 focus:outline-none py-2 ${
            activeCategory === 'Comedy' ? 'text-primary-button' : 'text-gray-500'
          }`}
          onClick={() => switchCategory('Comedy')}
        >
          Comedy
        </button>
        <button
          className={`mr-4 focus:outline-none py-2 ${
            activeCategory === 'Romance' ? 'text-primary-button' : 'text-gray-500'
          }`}
          onClick={() => switchCategory('Romance')}
        >
          Romance
        </button>
        <button
          className={`focus:outline-none text-center mr-4 py-2  ${
            activeCategory === 'Horror' ? 'text-primary-button' : 'text-gray-500'
          }`}
          onClick={() => switchCategory('Horror')}
        >
          Horror
        </button>
      </div>
      <div className="flex overflow-x-auto snap-mandatory snap-x scrollbar-hide  w-11/12 m-auto" ref={containerRef}>
        { loading  ?( Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <Skeltoncards />
          </div>
        ))
         ) : (activeCategory === 'Action' &&
          actionMovies.map((movie) => (
            <div className="snap-center">
              <CategoryCard movie={movie} genres={genres} />
            </div>
          )))}
        {activeCategory === 'Comedy' &&
          comedyMovies.map((movie) => (
            <div className="snap-center">
              <CategoryCard movie={movie} genres={genres} />
            </div>
          ))}
        {activeCategory === 'Romance' &&
          romanceMovies.map((movie) => (
            <div className="snap-center">
              <CategoryCard movie={movie}  genres={genres}/>
            </div>
          ))}
        {activeCategory === 'Horror' &&
          horrorMovies.map((movie) => (
            <div className="snap-center">
              <CategoryCard movie={movie} genres={genres} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Category;
