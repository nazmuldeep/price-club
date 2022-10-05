import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className="h-6 w-4 text-green-500" />
            <h3 className='ml-2'>{feature}</h3>
        </div>
    );
};

export default Feature;