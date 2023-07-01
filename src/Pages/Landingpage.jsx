import React from 'react'
import img from '../asets/landingbg.jpg'
import { Link } from 'react-router-dom'
import Button from '../component/Button'
import Rive from '../component/Rive_animation/Rive'
import AccordionItem from '../component/AccordionItem'
function Landingpage() {
  return (
    <div className=' relative sm:mb-20 mb-10'>
          
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
  <div className='   w-full    '> 
  <div className=' z-20 flex  sm:flex-row flex-col justify-center align-middle '>
    <div className=' mt-20     sm:pl-40  '>
      <h1 className=' text-3xl text-left text-text pt-32  z-20 font-extrabold  pl-8'>Enjoy on your TV</h1>
      <p className=' text-text   pt-8 text-lg opacity-60 text-left  sm:px-0  px-10'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
      </div>
     <div className=' relative '>
      <img src="https://i.gifer.com/H95B.gif" className='  sm:h-[170px] absolute   sm:left-[240px]  sm:top-[160px]   sm:w-[299px]  h-24  w-[150px] top-[105px] left-[100px]' alt="GIF" />

      <Rive/>
      </div>

     
      </div>
      <section className=''>
      <h1 className=' text-3xl text-center text-text   z-20 font-extrabold  pl-8 mb-10'>Enjoy on your TV</h1>
        <AccordionItem question={'What is CinemaPlus?'} answer={'CinemaPlus is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'}></AccordionItem>
        <AccordionItem question={'How much does CinemaPlus cost?'} answer={'Watch CinemaPlus on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD9.99 a month. No extra costs, no contracts.'}></AccordionItem>
        <AccordionItem question={'Where can I watch?'} answer={'Watch anywhere, anytime. Sign in with your CinemaPlus account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the CinemaPlus app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you re on the go and without an internet connection. Take CinemaPlus with you anywhere.'}></AccordionItem>
        <AccordionItem question={'How do i cancel?'} answer={'CinemaPlus is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'}></AccordionItem>
   
   
      </section>
      </div>


    </div>
  )
}

export default Landingpage