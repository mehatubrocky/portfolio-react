import React from 'react';
import { FiMonitor } from "react-icons/fi";
import CardData from "../utils/data.json";
import * as Icon from "react-icons";

export const Service = () => {
    return (
        <section className='bg-gray-200 py-10'>
            <div className='container mx-auto'>
                <p className='text text-3xl text-black font-bold px-10'><span className='underline'>Wha</span>t I Can Do.</p>
            <div className="w-full h-full py-10 px-5">
                <div className='grid grid-flow-row md:grid-cols-3 gap-10 items-center justify-items-center cursor-pointer'>
                    {
                    CardData.map(({id,name,decp,icon}) => (
                        <div key={id} className="w-[300px] h-[300px] rounded-3xl bg-gray-300 backdrop-blur-3xl hover:drop-shadow-lg grid items-center justify-items-center">
                            

                            <div className='grid items-center justify-items-center'>
                               <p className='text text-lg font-semibold'>{name}</p>
                               <p className='text break-all p-2'>{decp}</p>
                           </div>
                    </div>
                       ))
                    }
                </div>
            </div>
            </div>
        </section>
    );
};

export default Service;


