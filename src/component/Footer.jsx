import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import AnimationSection from './Animation';
const Footer = () => {
  return (
    <footer className="shadow  bg-black h-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <AnimationSection x={0} y={30}>
          <a href="#/" className="flex items-center mb-4 sm:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CinemaPlus</span>
          </a>
          </AnimationSection>
     
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <AnimationSection x={0} y={30}>
            <li>
              <a href="#/" className="mr-4 hover:underline md:mr-6">About</a>
            </li>
            </AnimationSection>
            <AnimationSection x={0} y={30} delay={0.2}>
            <li>
              <a href="#/" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            </AnimationSection>

            <AnimationSection x={0} y={30} delay={0.3}>
            <li>
              <a href="#/" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            </AnimationSection>
            <AnimationSection x={0} y={30} delay={0.4}>
            <li>
              <a href="#/" className="hover:underline">Contact</a>
            </li>
            </AnimationSection>
          </ul>
        </div>

       
        <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <AnimationSection x={0} y={30} delay={0.4}>
        <div className="flex justify-center items-center m-3">
          <a href="/#" className="mr-4">
            <FaFacebook size={24} className="text-gray-500 hover:text-gray-700" />
          </a>
          <a href="/#" className="mr-4">
            <FaTwitter size={24} className="text-gray-500 hover:text-gray-700" />
          </a>
          <a href="/#" className="mr-4">
            <FaInstagram size={24} className="text-gray-500 hover:text-gray-700" />
          </a>
        </div>
        </AnimationSection>
        <AnimationSection x={0} y={30} delay={0.4}>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        </AnimationSection>
      </div>
    </footer>
  );
};

export default Footer;
