import React from 'react'
import { Herobanner } from '../component/Herobanner'
import Mostrated from '../component/Mostrated'
import Tranding from '../component/Tranding_section/Tranding'
import Upcaming from '../component/Upcoming/Upcaming'

function Home() {
  return (<>
    <Herobanner/>
    <div className='flex gap-10'> <div className=' w-full overflow-auto'>   <Tranding/> <Upcaming/></div>
    <Mostrated/>
    </div>
  


    </>)
}

export default Home