import React from 'react'
import axios from 'axios'
import requests  from '../../Requests'
import { useState,useEffect } from 'react'
import MostRatedCard from './MostRatedCard '


function Mostrated()  
 {
    const [movies,setMovies] =useState([])

    useEffect(()=>{
        axios.get(requests.requestTopRated).then((response)=>
        { setMovies(response.data.results)
        })
    },[])

  return (
    <div className='  sm:w-[600px] mt-10 '>
        <span className=' ml-3 text-4xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r  from-primary-button to-violet-500'>Most Rated</span> 
        {movies.slice(0,10).map((movie) => (<div>  <MostRatedCard
      movie={{movie
      }}

    />
   </div>
  
    
  )) }

    </div>
  )
}

export default Mostrated