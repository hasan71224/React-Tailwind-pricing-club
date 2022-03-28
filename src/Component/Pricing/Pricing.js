import React from 'react';
import PrOption from '../PrOption/PrOption';

const Pricing = () => {
    const options=[
        {id:1, name:'free', price: 0, benefits:[
            'Everything On free',
            'Unlimited deals',
            'Lockalized deal',
            'Unlimited revition',
            'After 3 month service'

        ]},
        {id:2, name:'standerd', price: 9.99, benefits:[
            'Everything On Standerd',
            'Unlimited deals',
            'Lockalized deal',
            'Unlimited revition',
            'After 3 month service'

        ]},
        {id:3, name:'premium', price: 19.99, benefits:[
            'Everything On Premium',
            'Unlimited deals',
            'Lockalized deal',
            'Unlimited revition',
            'After 3 month service'

        ]}
    ]
    return (
        <div className='bg-indigo-300 p-5 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best deal in the town</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ullam fugit non laborum dolores repellat perferendis quaerat eveniet minima doloremque provident quas voluptas, a, rerum ad sit dolorem neque saepe?</p>

            <div className='grid md:grid-cols-3 gap-3 mt-5'>
               {
                   options.map(option=> <PrOption
                   key={option.id}
                   option={option}
                   ></PrOption>)
               }
            </div>
        </div>
    );
};

export default Pricing;