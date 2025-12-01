import React from 'react';
import error from '../assets/error-404.png'
import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
const Error = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col justify-center items-center space-y-5 min-h-screen'>
            <img src={error} alt="" />
            <p className='text-3xl font-bold'>Opps!!Page Not Found</p>
            <button onClick={() => navigate("/")} className='flex gap-2 btn bg-purple-400 w-fit mt-5'><ChevronLeft></ChevronLeft> Go Back</button>
        </div>
    );
};

export default Error;