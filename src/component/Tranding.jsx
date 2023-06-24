import { motion } from 'framer-motion'
import React from 'react'
import {AiFillFire} from 'react-icons/ai'
function Tranding() {
    
  return (
    <div className=' text-4xl text-text h-screen w-full mt-10 ml-10'>
 <div className='flex'> <motion.span animate={{y:[0,5,0] }} whileHover={{scale:[1.3,1]}} transition={{repeat:'true',duration:1.3}}><AiFillFire/></motion.span> <span className='ml-2'>Tranding</span></div>  
    
    </div>
  )
}

export default Tranding