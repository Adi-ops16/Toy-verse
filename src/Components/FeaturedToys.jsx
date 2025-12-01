import React, { use } from 'react';
import { ToysContext } from '../provider/ToysProvider';
import SkeletonLoader from './Loaders/SkeletonLoader';
import { Link } from 'react-router';

const FeaturedToys = () => {
    const { toys, loading } = use(ToysContext);
    const featuredToys = toys.filter(toy => toy.featured === true);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {
                loading ? (
                    <SkeletonLoader />
                ) : (
                    featuredToys.map((featuredToy) => (
                        <div
                            key={featuredToy?.toyId}
                            data-aos="fade-up"
                            className="bg-[#FFF7E0] shadow-lg rounded-2xl border border-[#f3c13a]/20 overflow-hidden flex flex-col h-full"
                        >
                            <figure className="bg-white w-full h-48 md:h-56 lg:h-64 flex items-center justify-center">
                                <img
                                    className="object-cover h-full w-full"
                                    src={featuredToy?.pictureURL}
                                    alt={featuredToy?.toyName}
                                />
                            </figure>

                            <div className="p-4 flex-1 flex flex-col justify-between text-[#6f4e37]">
                                <div>
                                    <h2 className="text-xl font-bold text-[#e1ad01] mb-2">{featuredToy?.toyName}</h2>
                                    <p className="text-sm leading-relaxed line-clamp-2 opacity-90">{featuredToy?.description}</p>
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center justify-between text-sm opacity-90 mb-3">
                                        <span>Available: <strong>{featuredToy?.availableQuantity}x</strong></span>
                                        <span>Ratings: ⭐ {featuredToy?.rating}</span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p className="text-xl font-bold text-[#6f4e37]">{featuredToy?.price} <span className="text-sm font-medium">TK</span></p>
                                        <Link
                                            to={`/toy-details/${featuredToy?.toyId}`}
                                            className="inline-flex items-center gap-2 bg-[#e1ad01] hover:bg-[#f5c400] text-[#6f4e37] font-bold px-4 py-2 rounded-lg transition"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default FeaturedToys;
