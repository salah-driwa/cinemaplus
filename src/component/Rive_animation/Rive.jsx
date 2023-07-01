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



 
    <div className="">
     <RiveComponent 
    style={{ height: "500px" ,width:'800px' ,position :"relative"  }}
  
   
  />
   </div>
  );

  
}

export default Rive