import React from 'react'
import Skeleton from 'react-loading-skeleton'

function Skeltoncards() {
  return (
    <div className='  rounded-md     w-72  mr-3  h-[410px] 
    bg-opacity-20  cursor-pointer 
   relative
  bg-[#666666]'> 
    <div className='  absolute top-3  left-3'> <Skeleton   height={280}    width={265} />
  
    </div>
    <div className='  absolute bottom-10    left-3'><Skeleton   height={35}    width={265} />
  </div>
    </div>
  )
}

export default Skeltoncards

