import React from 'react';

const SkeletonLoader = ({ count = 9 }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-3'>
            {
                Array.from({ length: count }).map((_, i) => (
                    <div key={i} className="flex w-96 h-130 flex-col gap-4">
                        <div className="skeleton h-80 w-full"></div>
                        <div className="skeleton h-6 w-28"></div>
                        <div className="skeleton h-6 w-full"></div>
                        <div className="skeleton h-6 w-full"></div>
                        <div className="skeleton h-6 w-full"></div>
                    </div>
                ))
            }
        </div>
    );
};

export default SkeletonLoader;