import { motion } from 'framer-motion'
import React from 'react'
import axios from 'axios'
import requests  from '../../Requests'
import { useState,useEffect } from 'react'
import Trandingcard from './Trandingcard'
import MostRatedCard from '../MostRatedCard '

import {AiFillFire} from 'react-icons/ai'
function Tranding() {
    
        const [movies,setMovies] =useState([])
    
        useEffect(()=>{
            axios.get(requests.requestTrending).then((response)=>
            { setMovies(response.data.results)
            })
        },[])
    
    
  return (
    <div className=' text-4xl text-text h-screen   w-2/3 mt-10 ml-10 '>
 <div className='flex'> <motion.span animate={{y:[0,5,0] ,scaleY:[1,1.1,0.9,1] }}  transition={{repeat:'true',duration:1.3}}><AiFillFire/></motion.span> <span className='ml-2'>Tranding</span></div>  
    <div className=' flex   overflow-x-auto'>
       
    {movies.map((movie) => ( <div><Trandingcard movie={movie}/>
     </div> 
        )) }
    </div>


    </div>
  )
}

export default Tranding