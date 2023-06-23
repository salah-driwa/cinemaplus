import { motion } from 'framer-motion';
import AnimationSection from './Animation';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full   absolute  bg-opacity-0  z-30">
        <AnimationSection x={0} y={-10}>
      <div className="h-full text-3xl text-text m-5 cursor-pointer ">
        <motion.div
          whileHover={{
            scale:1.06,
            textShadow: "0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 55px #ff0000, 0 0 75px #ff0000",
            color: "#ffffff",
            transition: { duration: 1 }
          }}
        >
          CinemaPlus
        </motion.div>
      </div>
      </AnimationSection>
      <div className="flex items-center  text-base gap-10">
      <AnimationSection x={0} y={-10} delay={0.2}>
        <motion.button 
        whileHover={{scale:1.04, textShadow: "2px 2px 8px #ffffff" }} 
    className="text-text mr-4">Account </motion.button>
</AnimationSection>

<AnimationSection x={0} y={-10} delay={0.3}>
        <motion.button 
            whileHover={{scale:1.04, textShadow: "2px 2px 8px #ffffff" }}
         className="text-text mr-4">Favorite</motion.button>
</AnimationSection>

 
<AnimationSection x={0} y={-10} delay={0.4}>        
         <motion.button 
        whileHover={{scale:1.04, textShadow: "2px 2px 8px #ffffff" }}
        className="text-text mr-4  rounded-md  py-3 px-8">Sign In</motion.button>
</AnimationSection>
<AnimationSection x={20}  delay={0.5}>
        <motion.button 
        whileHover={{scale:1.05 , rotate:[0,10,-10,10,-10,10,0]}}
        className="text-text mr-4 bg-primary-button rounded-md  py-3 px-8">Sign Up</motion.button>
</AnimationSection>
      </div>
    </nav>
  );
};

export default Navbar;
