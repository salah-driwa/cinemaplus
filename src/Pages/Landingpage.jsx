import React from 'react'
import img from '../asets/landingbg.jpg'
import { Link } from 'react-router-dom'
import Button from '../component/Button'
import Rive from '../component/Rive_animation/Rive'
function Landingpage() {
  return (
    <div className=' h-screen relative'>
          
      <div className=' z-20'>
      <h1 className=' text-3xl text-center  text-text pt-32  z-20 font-extrabold '>Unleash the Magic of Movies, Anytime, Anywhere</h1>
      <p className=' text-text  pt-8 text-lg opacity-60  text-center sm:px-0  px-10'>Explore, stream, and enjoy a vast collection of movies from the comfort of your own screen.</p>
      </div>
      <div className=''>
         <div className='absolute w-full sm:h-[800px] h-[400px]  bg-gradient-to-b top-0 from-black -z-10 opacity-50  '></div>
         <img src={img} alt='landing-bg'  className=' absolute top-0 -z-20  h-52 w-full object-cover sm:brightness-75  brightness-[40%] '/>
         <div className='absolute w-full sm:h-[200px] h-[400px]  bg-gradient-to-t  top-2   from-black -z-10   '></div>
      </div>
      
      <div className='  flex justify-center items-center py-6'>
      <Link to="/home" > 
  <Button className="w-64">Go Home </Button>
  </Link>
  
  </div>
  <div className=' h-screen   w-full mb-32   '> 
  <div className=' z-20 flex justify-center align-middle gap-0'>
    <div className=' mt-20   '>
      <h1 className=' text-3xl text-left text-text pt-32  z-20 font-extrabold '>Enjoy on your TV</h1>
      <p className=' text-text   pt-8 text-lg opacity-60 text-left  sm:px-0  px-10'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
      </div>
     <div className=' relative'>
      <img src="https://i.gifer.com/H95B.gif" className='  h-[170px] absolute  right-1/3 top-[160px]   w-[299px]' alt="GIF" />

      <Rive/>
      </div>
      </div>
      </div>


    </div>
  )
}

export default Landingpage