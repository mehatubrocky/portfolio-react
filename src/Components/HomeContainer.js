import React, { useRef, useEffect } from 'react';
import 'animate.css';
import Img from "../img/myimg.png";
import Typed from "typed.js";
import { BsGithub } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import Particle from './Particle';

export const HomeContainer = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front End Developer", "Web Developer", "MERN Stack Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 100,
      showCursor: true,
      smartBackspace: true,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="py-10" id="home">
      <Particle />
      
      <div className="py-10 container mx-auto grid md:grid-cols-2 grid-cols-1 justify-items-center items-center">
        
        <div className='grid items-center justify-items-center'>
        <div className=" font-bold tracking-wide text-white justify-center items-center">
          <div className=' grid items-center justify-items-center'>
            <p className="text-[2.5rem] ">Hi, I'm Mehatub Rocky!</p>
            <p className="text-[1.5rem]"><span ref={el}></span> </p>
          </div>
        <div className="py-5 flex flex-cols items-center justify-center gap-6">
          <button type="button" className='text-white outline outline-1 outline-white p-2 rounded-lg hover:text-black hover:bg-white text-lg font-bold '>My Work</button>
          <button type="button" className='outline outline-1 outline-white p-2 rounded-lg text-black bg-white text-lg font-bold animate-bounce'>Hire me</button>
        </div>
        </div>
        <div className='flex flex-row gap-8 cursor-pointer p-5'>
          <HiMail className='text-white text text-6xl hover:fill-red-400'/>
          <BsGithub className="text-white text text-5xl hover:fill-gray-600" />
          <BsLinkedin className='text-white text text-5xl hover:fill-blue-600' />
          <BsFacebook className='text-white text text-5xl hover:fill-blue-800' />
          <BsInstagram className='text-white text text-5xl hover:fill-purple-800' />
          <FaWhatsappSquare className='text-white text text-5xl hover:fill-green-500'/>
      
        </div>
        </div>
        <div className="w-[-50%]">
        <img src={Img} className="h-[420px] border-solid border-[7px] border-white" alt="Img" />
      </div> 
       
      </div>  
      
     
    </section>
  );
};

export default HomeContainer;
