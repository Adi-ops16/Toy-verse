import React, { use, useState } from 'react';
import { ToysContext } from '../provider/ToysProvider';
import SkeletonLoader from '../Components/Loaders/SkeletonLoader';
import { Link } from 'react-router';
import ToysCategory from '../Components/ToysCategory';
import { ReTitle } from 're-title';

const AllToys = () => {
    const { toys, loading } = use(ToysContext);
    const [search, setSearch] = useState("")

    const searchedToys = toys.filter(t => t.toyName.toLowerCase().includes(search)) || toys

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 py-10 px-4 lg:px-8 bg-[#FFF9EC]">
            {/* title */}
            <ReTitle title='All-Toys | Toy Verse'></ReTitle>
            {/* Sidebar */}
            <aside className="md:col-span-3 lg:col-span-1 mt-5">
                <ToysCategory />
            </aside>

            {/* All Toys Section */}
            <section className="md:col-span-3 lg:col-span-5 space-y-6">
                <div className="flex flex-wrap items-center justify-between border-b-2 border-[#E1AD01]/60 pb-3">
                    <h1 className="text-3xl font-extrabold text-[#6f4e37] tracking-wide mb-2">
                        All Toys
                    </h1>
                    <div>
                        <label className="input focus-within:outline-0 focus-within:border-2 border rounded-2xl border-[#5b3f2c] bg-[#FFF9EC]">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input
                                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                                type="search"
                                className="grow"
                                placeholder="Search" />
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {loading ? (
                        <SkeletonLoader />
                    ) : (
                        searchedToys.map((toy) => (
                            <div
                                key={toy.toyId}
                                className="card bg-linear-to-b from-[#FFFBEA] to-[#FFF5D7] border border-[#FFE8A3]/50 
                                shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-2xl overflow-hidden"
                            >
                                <figure className="bg-white h-64 flex justify-center items-center border-b border-[#FFE5A0]/60">
                                    <img
                                        className="object-center w-full h-56 transition-transform duration-300 hover:scale-105"
                                        src={toy.pictureURL}
                                        alt={toy.toyName}
                                    />
                                </figure>
                                <div className="card-body p-5 space-y-3">
                                    <h2 className="text-xl font-bold text-[#6f4e37]">
                                        {toy.toyName}
                                    </h2>
                                    <span className="text-sm text-[#5b3f2c] opacity-90 line-clamp-2">
                                        {toy.description}
                                    </span>
                                    <div className="flex items-center justify-between pt-2">
                                        <p className="text-lg font-extrabold text-[#E1AD01]">
                                            ৳{toy.price}
                                        </p>
                                        <Link
                                            to={`/toy-details/${toy.toyId}`}
                                            className="btn btn-sm rounded-lg bg-[#6f4e37] text-white border-0 
                                            hover:bg-[#5a3f2a] shadow-sm hover:shadow-lg transition-all duration-300"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
};

export default AllToys;
