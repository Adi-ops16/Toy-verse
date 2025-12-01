import React from 'react';
import banner from '../assets/banner.jpg';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div
            className="my-12 rounded-3xl overflow-hidden relative py-5"
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="absolute inset-0 bg-[#00000070]"></div>

            {/* Banner content */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center h-[500px] px-6 space-y-6">
                <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg leading-snug permanent">
                    Welcome to <span className="text-[#E1AD01]">ToyVerse</span> — <br /> Discover the Magic of Playtime ✨
                </h1>

                <p className="text-lg md:text-xl text-[#FFFBEA] font-medium max-w-2xl">
                    Bring joy and imagination to every child’s day! Explore our collection of
                    action figures, dolls, puzzles, and creative toys — handpicked to inspire fun and learning.
                </p>

                <Link
                    to="/all-toys"
                    className="btn bg-[#6f4e37] hover:bg-[#5b3f2c] text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                    Shop Now <ShoppingCart size={20} />
                </Link>
            </div>
        </div>
    );
};

export default Banner;
