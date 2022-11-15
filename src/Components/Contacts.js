import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';



export const Contacts = () => {

    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_44z8zpn', 'template_4qu5t0x', form.current, 'A-E-5r6otwhMjAF14');
      e.target.reset();
    };
  return (
    <section id="contact" className='bg-white py-10'>
      <div className='container mx-auto'>
        <p className='px-10 text text-3xl text-black font-bold'><span className='underline'>Con</span>tacts</p>
        <div className="py-10 grid md:grid-cols-2 grid-cols-1 justify-items-center items-center">
          <div className="w-full">
            <form ref={form} onSubmit={sendEmail} className='p-2 ml-12 grid gap-5'>
              <input class="border-2 border-black w-full p-2" id="name" name="name" type="text" placeholder="Full Name" target="_blank" required/>
              <input class="border-2 border-black w-full p-2" id="email" name="email" type="email" placeholder="Email Address" target="_blank" required/>
              <input class="border-2 border-black w-full p-2" id="phone" name="phone" type="phone" placeholder="Phone Number"  target="_blank" required/>
              <textarea class="border-2 h-[10rem] border-black w-full p-2" name="message" id="message" type="message" placeholder="Your Messsage" target="_blank" required/>
              <button type='submit' className='outline outline-1 outline-white p-2 rounded-lg text-white bg-black text-lg font-bold'>Send Message</button>
            </form>
          </div>

          <div className="w-[50%]">
            <div className='grid grid-flow-row gap-10 items-center justify-items-center cursor-pointer'>


              <div className="w-[300px] h-[100px] rounded-3xl bg-gray-300 backdrop-blur-3xl hover:drop-shadow-lg grid items-center justify-items-center">

                <div className='grid items-center justify-items-center'>
                  <p className='text text-lg font-semibold'>Email</p>
                  <a className='py-2' href="mailto:mehatubrocky.ewu@gmail.com">mehatubrocky.ewu@gmail.com</a> 
                  
                </div>
             </div>
             <div className="w-[300px] h-[100px] rounded-3xl bg-gray-300 backdrop-blur-3xl hover:drop-shadow-lg grid items-center justify-items-center">
             <div className='grid items-center justify-items-center'>
                  <p className='text text-lg font-semibold'>Phone Number</p>
                  <a className='py-2' href="tel:+8801614703000">+8801614703000</a> 
            
                </div>
                </div>
                <div className="w-[300px] h-[100px] rounded-3xl bg-gray-300 backdrop-blur-3xl hover:drop-shadow-lg grid items-center justify-items-center">
             <div className='grid items-center justify-items-center'>
                  <p className='text text-lg font-semibold'>Address</p>
                  <p className='py-2'>Badda,Dhaka-1212</p>
            
                </div>
                </div>



            </div>
          </div>
        </div>



      </div>

    </section>
  );
};

export default Contacts;


