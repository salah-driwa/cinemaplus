import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import {CgProfile} from 'react-icons/cg';
import{AiOutlineHeart} from 'react-icons/ai';
import {TiArrowSortedDown } from 'react-icons/ti'
import {BiLogOut} from 'react-icons/bi'
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';


function Account() {
    const {user,logout} = UserAuth()
    const [userIcon, setUserIcon] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [ishover, setishover] = useState(false);
    useEffect(() => {
        if (user) {
          const { photoURL } = user;
          setUserIcon(photoURL);
        }
      }, [user]);
 const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      const handlehoverdown = () => {
        setishover(true);
      };
      const handlehoverup = () => {
        setishover(false);
      };

    if(user){
        return(    
            
            

 <div className="relative inline-block mt-2 sm:mr-2 mr-5">
      <button
        onClick={handleMenuToggle}
        className="flex items-center text-white  p-2 focus:outline-none"
      >
        <div className=' text-xl text-text mr-8'> {user.displayName}</div>
        {userIcon ? (
          <img src={userIcon} alt="User Icon" className="w-12 h-12 rounded-full mr-2" />
        ) : (
          <CgProfile size={20} className="mr-2" />
        )}
        <TiArrowSortedDown size={16} />
      </button>

      {isMenuOpen && (
        <div className="absolute right-0  w-40 bg-black rounded shadow-lg">
          <ul className="py-2">
            <li>
              <Link  to='/Favoriteshow'>
                          <motion.button
              whileHover={{ scale: 1.05, color: 'white' }}
              className="flex items-center justify-between w-full hover:bg-slate-400 p-2 text-white"
            >
              <span className="flex items-center gap-3">
              <AiOutlineHeart className="ml-2 " />  Favorite
              
              </span>
            </motion.button>

              </Link>
            </li>
            <li>
              <Link href="/">
              <motion.button
  onClick={() => logout()}
  whileHover={{ scale: 1.05, color: 'white' }}
  className="flex items-center justify-between w-full hover:bg-slate-400 p-2 text-white"
>
  <span className="flex items-center gap-3">
  <BiLogOut className="ml-1" /> Logout

  </span>
</motion.button>

              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
            )
    } else{
return (     
    <div className=' rounded-full drop-shadow-2xl mr-3' >
    <Link to='/Signin' className='sm:block  hidden'  onMouseOver={handlehoverdown} onMouseLeave={handlehoverup}>
        <motion.button   whileHover={{scale:1.1}}>
    <CgProfile size={45}  color='white' width={30}/> </motion.button>
    <motion.div className=' text-text text-xl absolute  w-20   -right-6' animate={{scale: ishover? 1 :0}}>Sign In</motion.div>
      </Link> 


    <Link to='/Signin' className='sm:hidden block mr-6 mt-1'>
        <motion.button   whileHover={{scale:1.1}}>
    <CgProfile size={35}  color='white' width={30}/> </motion.button>  </Link> 
     </div>  );
    }
 
    
}

export default Account