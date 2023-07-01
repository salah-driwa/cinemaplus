import React from 'react'
import { useRive } from "@rive-app/react-canvas";
import riv from './tv-bg.riv'
function Rive() {

  const {  RiveComponent } = useRive({
    src: riv,
    stateMachines: "State Machine 1",
    autoplay: true,
    artboard:"New Artboard"

 });
  return (



 
    <div className=" sm:h-[500px]   sm:w-[800px]  h-[300px] w-screen">
     <RiveComponent 
    style={{ position :"relative"  }}
  
   
  />
   </div>
  );

  
}

export default Rive