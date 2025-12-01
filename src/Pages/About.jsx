import React from 'react';
import { Link } from 'react-router';
import about from '../assets/about.jpg';
import { ReTitle } from 're-title';

const About = () => {
    return (
        <div className="bg-linear-to-b from-[#FFFBEA] to-[#FFF4D1] py-16 px-6">
            <ReTitle title='About-us | Toy Verse'></ReTitle>
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#6f4e37] mb-12 tracking-wide">
                    About <span className="text-[#E1AD01]">ToyVerse</span>
                </h1>
                {/* about us */}
                <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
                    <img
                        src={about}
                        alt="Toy Store"
                        className="w-full lg:w-1/2 rounded-3xl shadow-xl border border-[#FFE8A3]/60 object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="lg:w-1/2 space-y-4 bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-md border border-[#FFE8A3]/50">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#6f4e37]">Our Story</h2>
                        <p className="text-[#5b3f2c] leading-relaxed">
                            Welcome to <span className="font-semibold text-[#E1AD01]">ToyVerse</span> — where playtime
                            meets imagination! For years, we've been dedicated to bringing joy and creativity to children
                            through high-quality, meaningful toys. Our mission is to make every playtime safe,
                            educational, and filled with wonder ✨.
                        </p>
                        <p className="text-[#5b3f2c] leading-relaxed">
                            From classic building sets to modern interactive experiences, every toy we select is chosen
                            with love and care to inspire curiosity and lifelong learning. Because here, every smile
                            matters 💛.
                        </p>
                    </div>
                </div>
                {/* Values Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-[#6f4e37] mb-10">
                        Our <span className="text-[#E1AD01]">Values</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-[#FFF9E5] p-8 rounded-3xl shadow-md border border-[#F7E5A3]/70 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-bold text-[#6f4e37] mb-3">Quality Toys</h3>
                            <p className="text-[#5b3f2c]">
                                We offer only the best — safe, durable, and exciting toys for every age.
                            </p>
                        </div>

                        <div className="bg-[#FFF9E5] p-8 rounded-3xl shadow-md border border-[#F7E5A3]/70 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-bold text-[#6f4e37] mb-3">Creativity</h3>
                            <p className="text-[#5b3f2c]">
                                Each toy sparks imagination, creative play, and problem-solving skills.
                            </p>
                        </div>

                        <div className="bg-[#FFF9E5] p-8 rounded-3xl shadow-md border border-[#F7E5A3]/70 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-bold text-[#6f4e37] mb-3">Customer Happiness</h3>
                            <p className="text-[#5b3f2c]">
                                We care deeply about smiles — every child, every parent, every memory.
                            </p>
                        </div>
                    </div>
                </div>
                {/* join us section */}
                <div className="text-center bg-white/70 border border-[#FFE8A3]/60 shadow-md rounded-3xl py-12 px-8 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#6f4e37] mb-4">
                        Join Us for Fun & Learning!
                    </h2>
                    <p className="text-[#5b3f2c] mb-8 leading-relaxed">
                        Explore our magical collection and make every playtime a new adventure filled with laughter and discovery.
                    </p>
                    <Link
                        to="/all-toys"
                        className="btn bg-[#E1AD01] border-none text-white text-lg font-semibold px-8 rounded-2xl shadow-md hover:bg-[#c89b0d] transition-all duration-300"
                    >
                        Browse Toys
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
