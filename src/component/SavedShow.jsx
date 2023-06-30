import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { motion } from 'framer-motion';

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
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-10 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hover:scale-110'
          size={40}
          
        />
        <div
          id={'slider'}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative px-5  mx-0 sm:mx-28 snap-mandatory snap-x overflow-auto'
        >
         
          {movies.map((item) => (
           
            <motion.div
           
              key={item.id}
              className='w-[230px] snap-center sm:w-[200px] md:w-[240px] lg:w-[280px]  h-96 sm:h-[450px] inline-block cursor-pointer relative p-2 bg-opacity-10 rounded-md bg-slate-300 mx-2 my-8 '
              style={{
                borderRadius: '4px',
                padding: '10px',
                boxSizing: 'border-box',
                
              }}
              whileHover={{
                background:'linear-gradient(#141414 , #141414 ) 50% 50%/calc(100% - 7px) calc(100% - 7px) no-repeat, linear-gradient(90deg, red 0%, purple 100%)', 
                scale: 1.01,
              }}  >
              <img
                className='w-full h-auto block scrollbar-hide   overflow-hidden'
                src={`https://image.tmdb.org/t/p/w500/${item?.poster}`}
                alt={item?.title}
              />
          <div className='w-full h-fit  my-2 text-white'>
  <div>
    <p className='whitespace-normal text-sm w-full md:text-sm font-extrabold flex justify-center items-center text-center break-words'>
      {item?.title}
    </p>
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
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-10 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  hover:scale-110'
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;