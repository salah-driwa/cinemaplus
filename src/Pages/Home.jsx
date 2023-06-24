import React from 'react'
import { Herobanner } from '../component/Herobanner'
import Mostrated from '../component/Mostrated'
import Tranding from '../component/Tranding_section/Tranding'

function Home() {
  return (<>
    <Herobanner/>
    <div className='flex'>  <Tranding/>
    <Mostrated/></div>
  


    </>)
}

export default Home