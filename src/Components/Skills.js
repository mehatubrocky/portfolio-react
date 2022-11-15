import React from 'react';
import { heroData } from '../utils/data';

export const Skills = () => {
  return (
    <section className='bg-white py-10'>
      <div className='mx-auto container'>
        <p className='text text-3xl text-black font-bold px-10'><span className='underline'>My</span> Skills.</p>
        <div className='py-10'>
          <div className='grid md:grid-cols-6 grid-cols-3 gap-2 items-center place-items-center hover:cursor-pointer'>
            {
              heroData && heroData.map((n) =>
              <div key={n.id} className='w-[50%] hover:drop-shadow-lg grid items-center justify-items-center'>
              
              <img src={n.imgSrc}/>
              
            </div>
              )
            }
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
