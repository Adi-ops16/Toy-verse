import React, { use } from "react";
import { Link, useParams } from "react-router";
import noToysFound from "../assets/notoysfound.jpg";
import { ToysContext } from "../provider/ToysProvider";
import SkeletonLoader from "../Components/Loaders/SkeletonLoader";
import ToysCategory from "../Components/ToysCategory";
import { ReTitle } from "re-title";

const ToysByCategory = () => {
    const { category } = useParams();
    const { toys, loading } = use(ToysContext);
    const categoryToys = toys.filter(
        (categoryToy) => categoryToy.subCategory === category
    );

    return (
        <div className="min-h-screen bg-linear-to-b from-[#FFFBEA] to-[#FFF4D1] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
            <ReTitle title="Toys by categories | Toy Verse"></ReTitle>
            {/*Categories*/}
            <aside className="my-10 md:col-span-3 lg:col-span-1 px-4 lg:px-6">
                <div className="sticky top-24  shadow-md border border-[#FFE8A3]/60 rounded-2xl">
                    <ToysCategory />
                </div>
            </aside>

            <main className="col-span-5 my-10 px-4 md:px-6">
                <h1 className="text-3xl font-extrabold text-[#6f4e37] mb-8">
                    {category}
                    <span className="text-[#E1AD01]"> ({categoryToys.length})</span>
                </h1>

                {categoryToys.length === 0 ? (
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src={noToysFound}
                            alt="No toys found"
                            className="max-w-xs md:max-w-md opacity-90"
                        />
                        <p className="text-[#6f4e37] mt-6 font-semibold text-lg">
                            No toys found in this category 😢
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loading ? (
                            <SkeletonLoader />
                        ) : (
                            categoryToys.map((categoryToy) => (
                                <div
                                    key={categoryToy?.toyId}
                                    className="card bg-[#FFFDF5] border border-[#FFE8A3]/70 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl"
                                >
                                    <figure className="bg-white h-72 flex items-center justify-center rounded-t-2xl border-b border-[#FFE8A3]/70">
                                        <img
                                            className="object-contain max-h-64"
                                            src={categoryToy?.pictureURL}
                                            alt="toy"
                                        />
                                    </figure>
                                    <div className="card-body space-y-3">
                                        <h2 className="card-title text-[#6f4e37] text-xl font-bold line-clamp-1">
                                            {categoryToy?.toyName}
                                        </h2>
                                        <p className="text-gray-700 line-clamp-2 text-sm">
                                            {categoryToy?.description}
                                        </p>
                                        <div className="card-actions justify-between items-center mt-3">
                                            <p className="text-lg font-semibold text-[#E1AD01]">
                                                {categoryToy?.price}TK
                                            </p>
                                            <Link
                                                to={`/toy-details/${categoryToy?.toyId}`}
                                                className="btn bg-[#6f4e37] hover:bg-[#573e2c] text-white rounded-xl transition-all duration-300"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </main>
        </div>
    );
};

export default ToysByCategory;
