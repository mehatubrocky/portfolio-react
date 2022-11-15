import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/logo.png";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";


export const Header = () => {

  const [isMenu, setMenu] = useState(false);

  return (
    <header className='w-screen'>
      {/* Desktop & tablet */}
      <div className="fixed z-50 w-screen p-1 px-10">
        <div className='md:flex w-full h-full items-center justify-between'>
          <Link to={"/"} className='flex items-center gap-2'>
            <img src={Logo} className="w-16 h-16 object-cover" alt="logo" />
          </Link>
          <div className='hidden md:flex items-center gap-6'>
            <motion.ul initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }} className='flex items-center gap-1 font-bold'>
              <li className="text-base px-4 py-2 duration-100 transition-all ease-in-out cursor-pointer">Home</li>
              <li className="text-base px-4 py-2 duration-100 transition-all ease-in-out cursor-pointer">About</li>
              <li className="text-base px-4 py-2 duration-100 transition-all ease-in-out cursor-pointer">Service</li>
              <li className="text-base px-4 py-2 duration-100 transition-all ease-in-out cursor-pointer">Skills</li>
              <li className="text-base px-4 py-2 duration-100 transition-all ease-in-out cursor-pointer">My Work</li>
              <li className="text-base px-2 py-2 duration-100 transition-all ease-in-out cursor-pointer">Contact</li>
            </motion.ul>
            <button type='button' className='bg-white text text-black text-lg w-full md:w-auto px-4 py-2 rounded-lg transition-all ease-in-out duration-100'> Resume</button>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className='flex p-5 md:hidden w-full h-full items-center justify-end'>
        <div className='flex items-center justify-end'>
          <div onClick={() => setMenu(!isMenu)} className="text text-white text-3xl cursor-pointer" >
            {isMenu ? <FaTimes  /> : <GiHamburgerMenu />}
          </div>
          <div className='w-30 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
            <ul className='flex flex-col justify-items-center'>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2'>Home</li>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2'>About</li>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2'>Service</li>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2'>Skills</li>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2'>My Work</li>
              <button className='bg-white text text-black text-lg w-full md:w-auto px-4 py-2 rounded-lg transition-all ease-in-out duration-100 hover:bg-black hover:text-white '>Resume</button>
            </ul>
          </div>

        </div>

      </div>

    </header>

  );
};

export default Header;
