import React from 'react'
import { Herobanner } from '../component/Herobanner'
import Mostrated from '../component/Mostrated/Mostrated'
import Tranding from '../component/Tranding_section/Tranding'
import Upcaming from '../component/Upcoming/Upcaming'
import Category from '../component/Category/Category'


function Home() {
  return (<>
    <Herobanner/>
    <div className='sm:flex sm:gap-10 sm:mx-12'> <div className=' w-full  h-[1200px] overflow-y-hidden  my-10  sm:mb-0 mb-32  flex  flex-col gap-10 sm:overflow-auto '>   <Tranding/> <Upcaming/> </div>
    <Mostrated/>
    </div>
  
    <section className='    overflow-y-hidden sm:mx-auto  sm:my-10  sm:mb-0 mb-32  flex  flex-col gap-10 sm:overflow-auto   h-[700px]'><Category/></section>

    </>)
}

export default Home