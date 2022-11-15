import React from 'react';
import Img from "../img/myimg.png";

export const About = () => {
    return (
        <section className='bg-white py-10'>
            <div className='container mx-auto'>
                <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center items-center">
                <div className="w-[50%] hidden md:flex">
                    <img src={Img} className=" border-solid border-[7px] border-gray-600" alt="Img" />
                </div>
                <div className='grid items-center justify-items-center p-5'>
                    <p className='text-black text-3xl font-bold py-3'><span className='underline'>Abo</span>ut Me</p>
                    <p className='text-black text break-all'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem porro corporis atque expedita reiciendis, voluptas accusamus nesciunt hic laboriosam amet rerum unde corrupti sint beatae quos nihil, quibusdam illum quia odit alias, mollitia iste doloribus? Quia, explicabo, optio aut cumque illum distinctio delectus ullam ipsam tenetur aliquid dolore esse!</p>
                </div>

                </div>
               
                
            </div>
        </section>
    );
};

export default About;
