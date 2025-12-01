import React from 'react';
import { RingLoader } from 'react-spinners';
const RingLoaderC = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-200px)]'>
            <RingLoader color='#e1ad01' size={120}></RingLoader>
        </div>
    );
};

export default RingLoaderC;