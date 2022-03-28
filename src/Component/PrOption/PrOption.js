import React from 'react';
import {ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/solid'
import Benefit from '../Benefit/Benefit';

const PrOption = (props) => {
    const{name, price, benefits}= props.option
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-4xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left'> Benefits: </h3>
                {
                    benefits.map(benefit=> <Benefit benefit={benefit}></Benefit>)
                } 
            </div>
            <button className='bg-blue-600 flex justify-center w-full text-sm font-bold py-2 mt-3 rounded hover:bg-blue-800 text-white'>Buy Now
                <ArrowRightIcon className='w-5 h-5 ml-3'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PrOption;