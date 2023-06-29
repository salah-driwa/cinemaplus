import React from 'react'
import Skeleton from 'react-loading-skeleton'

function Skeltoncard() {
  return (
    <div className='  w-[92%] m-auto ml-3  pr-24 h-24 relative bg-opacity-20  cursor-pointer my-4
    bg-[#666666]'> 
    <div className='  w-20  absolute top-3  left-2'> <Skeleton   height={70}    width={50} />
    <h1 className=' absolute top-1  left-24 w-full'> <Skeleton   height={20}  width={200} /> </h1>
    <h1 className=' absolute  top-10  left-24 w-full'> <Skeleton   height={20}  width={100} /> </h1>
    </div>
    </div>
  )
}

export default Skeltoncard