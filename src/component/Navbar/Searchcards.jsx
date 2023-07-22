import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function Searchcards({ movie }) {
  const { ImageURL, Title, Genres ,movieId } = movie;

  return (
    <Link  to={`/movies/${movieId}`}>
    <motion.div   whileHover={{ scale:1.03}}className="flex flex-row items-center text-white  h-20 bg-black p-2 rounded-lg  bg-opacity-70">
      <img src={ImageURL} alt={Title} className="  h-20  object-cover" />
      <h2 className="text-sm font-bold  p-2">{Title}</h2>
      <p className="text-sm ml-auto">{Genres.join(', ')}</p>
    </motion.div>
    </Link>);
}

export default Searchcards;
