import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 800;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 800;
  };

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedshow);
    });
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
      try {
        const result = movies.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
            savedshow: result
        })
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <section className=' '>
      <h2 className='text-white  font-bold md:text-xl p-4 '>My Shows</h2>
      <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-10 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hover:scale-110'
          size={40}
          
        />
         <MdChevronRight
          onClick={slideRight}
          className='bg-white right-10 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  hover:scale-110'
          size={40}
        />
       <div id={'slider'} className='w-10/12 mx-auto h-fit flex overflow-x-auto ' >
    {movies.map((item) => (
      <motion.div
        key={item.id}
        className='  w-[250px]  h-[450px] cursor-pointer relative p-2 bg-opacity-10 rounded-md bg-slate-300 mx-2 my-8 flex-none'
        
        whileHover={{
          background: 'linear-gradient(#141414 , #141414 ) 50% 50%/calc(100% - 7px) calc(100% - 7px) no-repeat, linear-gradient(90deg, red 0%, purple 100%)',
          scale: 1.01,
        }}
      >
              <Link to={`/movies/${item.id}`}> <img
                className='w-full  h-[350px] block scrollbar-hide  object-cover  overflow-hidden'
                src={`${item.poster}`}
                alt={item?.title}
              /></Link>
          <div className='w-full h-fit  my-2 text-white'>
  <div>
  <Link to={`/movies/${item.id}`}><p className='whitespace-normal text-sm w-full md:text-sm font-extrabold flex justify-center items-center text-center break-words'>
      {item?.title}
    </p></Link>  
  </div>
  <motion.p
    whileHover={{ scale: 1.05, color: 'red' }}
    onClick={() => deleteShow(item.id)}
    className='absolute top-5 right-6 '
  >
    <RiDeleteBin5Line size={35} color='white' />
  </motion.p>
</div>


            </motion.div>
          ))}
      
        </div>
       
    
    </section>
  );
};

export default SavedShows;