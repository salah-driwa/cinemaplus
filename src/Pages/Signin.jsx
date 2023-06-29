import React, { useEffect, useState } from 'react';
import img from '../asets/landingbg.jpg';
import { motion } from 'framer-motion';
import AnimationSection from '../component/Animation';
import { Link } from 'react-router-dom';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
function Signin() {
  const { login,signInWithGoogle,user  } = UserAuth();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const Navigate= useNavigate()

  const handleGoogleLogin= async (e) => {
    try{
      await signInWithGoogle()
    }
    catch(error){
      console.log(error)
    }
  }
  const handleLogin= async (e) => {
    e.preventDefault();
    try{
      await login(email,password)
    }
    catch(error){
      console.log(error)
    }
  }

useEffect(()=>{
if(user !=null){
  Navigate('/home')
}
   },[user,Navigate])

  return (
    <div className="w-full sm:h-screen flex justify-center items-center ">
      
      <div className=" sm:text-5xl  text-xl  text-text m-5 cursor-pointer   absolute top-0  left-12 h-fit">
      <AnimationSection x={0} y={-10} >
        <Link to={'/home'}>
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
        </Link>
        </AnimationSection>
      </div>
  
      <div className="sm:w-[500px] h-fit sm:p-20 p-10  mx-auto bg-black bg-opacity-75  mt-20">
        <h1 className="text-text text-3xl text-left pb-14 w-full">Sign In</h1>

        <div className="">
          <form className="flex flex-col space-y-4 w-full" onSubmit={handleLogin}>
            <input onChange={(e) => setemail(e.target.value)} type="email" required placeholder="Email" className="px-4 py-3 rounded-sm  bg-gray-800 text-white w-full" />
            <input  onChange={(e) => setpassword(e.target.value)}type="password" required placeholder="Password" className="px-4 py-3 rounded-sm bg-gray-800 text-white" />
            
            <div className="flex justify-between items-center">
              <div className="flex items-center text-white">
                <input type="checkbox" id="remember" className="form-checkbox mr-2" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="/#" className="text-white underline">Help</a>
            </div>
            
         


              <AnimationSection x={-15} y={0} delay={0.4}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  className="text-text text-sm font-extrabold  bg-primary-button rounded-md drop-shadow-md h-12  w-full"
                >
                  Sign In
                </motion.button>
              </AnimationSection>
              <div className=' m-auto'>   <GoogleButton onClick={() => handleGoogleLogin()} /></div>
         
          </form>
        </div>
        <div className=' my-10'>
        <Link to="/Signup" className="text-white hover:underline ">Sign up now.</Link>
        <p className='text-white  text-sm  pt-4'> <span className='opacity-60'>This page is protected by Google reCAPTCHA to ensure you're not a bot.  </span><span className='opacity-100 '> <a href="/#" className=" hover:underline text-blue-600  "> Learn more.</a></span></p>
        </div>
      </div>
      <img src={img} alt="landing-bg" className="absolute -z-20 top-0 w-full   object-contain sm:brightness-60 brightness-[40%] " />
      <div className='absolute w-full sm:h-[200px] h-[400px]  bg-gradient-to-t   lg:bottom-44  xl:bottom-0  bottom-[500px] from-black -z-10   '></div>
    </div>
  );
}

export default Signin;
