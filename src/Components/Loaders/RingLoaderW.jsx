import React from 'react';
import { RingLoader } from 'react-spinners';

const RingLoaderW = () => {
    return (
        <div className='h-11 w-11 z-10'>
            <RingLoader color='black' size={40}></RingLoader>
        </div>
    );
};

export default RingLoaderW;