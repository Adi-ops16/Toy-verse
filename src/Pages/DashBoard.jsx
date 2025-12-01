import React, { useContext } from 'react';
import { ToysContext } from '../provider/ToysProvider';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, } from 'recharts';
import { Star, Package, Award, TrendingUp } from 'lucide-react';
import { ReTitle } from 're-title';

const Dashboard = () => {
    const { toys } = useContext(ToysContext);

    // websites stats
    const totalToys = toys.length;
    const totalFeatured = toys.filter(toy => toy.featured).length;
    const totalQuantity = toys.reduce((sum, toy) => sum + toy.availableQuantity, 0);
    const avgRating = (toys.reduce((sum, toy) => sum + toy.rating, 0) / (totalToys || 1)).toFixed(1);

    // chart data making
    const categoryData = Object.values(
        toys.reduce((acc, toy) => {
            if (!acc[toy.subCategory]) {
                acc[toy.subCategory] = { category: toy.subCategory, count: 0 };
            }
            acc[toy.subCategory].count += 1;
            return acc;
        }, {})
    );

    return (
        <div className="min-h-screen bg-linear-to-b from-[#FFFBEA] to-[#FFF4D1] py-12 px-6 lg:px-12">
            {/* title head */}
            <ReTitle title='Dashboard | Toy Verse'></ReTitle>
            {/* title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#6f4e37] mb-12">
                My <span className="text-[#E1AD01]">Dashboard</span>
            </h1>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-[#FFE8A3]/60 flex items-center gap-4 hover:shadow-lg transition-all duration-300">
                    <Package className="text-[#E1AD01]" size={40} />
                    <div>
                        <h2 className="text-lg font-semibold text-[#6f4e37]">Total Toys</h2>
                        <p className="text-3xl font-bold text-[#E1AD01]">{totalToys}</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-[#FFE8A3]/60 flex items-center gap-4 hover:shadow-lg transition-all duration-300">
                    <Award className="text-[#E1AD01]" size={40} />
                    <div>
                        <h2 className="text-lg font-semibold text-[#6f4e37]">Featured Toys</h2>
                        <p className="text-3xl font-bold text-[#E1AD01]">{totalFeatured}</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-[#FFE8A3]/60 flex items-center gap-4 hover:shadow-lg transition-all duration-300">
                    <TrendingUp className="text-[#E1AD01]" size={40} />
                    <div>
                        <h2 className="text-lg font-semibold text-[#6f4e37]">Total Quantity</h2>
                        <p className="text-3xl font-bold text-[#E1AD01]">{totalQuantity}</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-[#FFE8A3]/60 flex items-center gap-4 hover:shadow-lg transition-all duration-300">
                    <Star className="text-[#E1AD01]" size={40} />
                    <div>
                        <h2 className="text-lg font-semibold text-[#6f4e37]">Average Rating</h2>
                        <p className="text-3xl font-bold text-[#E1AD01]">{avgRating} ⭐</p>
                    </div>
                </div>
            </div>
            {/* Chart Section */}
            <div className="bg-white rounded-3xl shadow-md border border-[#FFE8A3]/60 p-6 mb-12">
                <h2 className="text-2xl font-bold text-[#6f4e37] mb-6 text-center">
                    Toys per <span className="text-[#E1AD01]">Category</span>
                </h2>

                {categoryData.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">
                        No category data available.
                    </p>
                ) : (
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart
                            data={categoryData}
                            margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#f4e5b7" />
                            <XAxis dataKey="category" tick={{ fill: '#6f4e37', fontWeight: 500 }} />
                            <YAxis tick={{ fill: '#6f4e37' }} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#fffbe8',
                                    borderRadius: '10px',
                                    border: '1px solid #ffe6a7',
                                }}
                            />
                            <Legend />
                            <Bar dataKey="count" fill="#E1AD01" name="Number of Toys" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </div>
            {/* recently added toys */}
            <div className="bg-white rounded-3xl shadow-md border border-[#FFE8A3]/60 p-10 text-center">
                <h2 className="text-2xl font-bold text-[#6f4e37] mb-4">
                    Recently <span className="text-[#E1AD01]">Added</span> Toys
                </h2>
                <div className="flex flex-col items-center justify-center py-10 text-[#6f4e37]/70">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-[#E1AD01]/70 mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 17v-6h6v6m2 0a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2h10z"
                        />
                    </svg>
                    <p className="text-lg font-medium">
                        You haven't added any toys yet.
                    </p>
                    <p className="text-sm text-[#6f4e37]/60 mt-1">
                        Once you add toys, they'll show up here for quick insights.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
