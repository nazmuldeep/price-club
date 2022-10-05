import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Everything is Free',
                'Extra feature',
                'Unnecessary feature',
                'will never feature',
                'gorgeous feature',
                'Narvous feature',
                'Happy feature',
            ]
        },
        {
            id: 2, name: 'Medium', price: 10.90, features: [
                'Everything is Medium',
                'Extra feature',
                'Unnecessary feature',
                'will never feature',
                'gorgeous feature',
                'Narvous feature',
                'Happy feature',
            ]
        },
        {
            id: 3, name: 'Premium', price: 30.99, features: [
                'Everything is Premium',
                'Extra feature',
                'Unnecessary feature',
                'will never feature',
                'gorgeous feature',
                'Narvous feature',
                'Happy feature',
            ]
        },
    ]

    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-400 text-white p-12 '>Best deal in town</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    >

                    </PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;