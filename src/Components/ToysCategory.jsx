import React, { use } from 'react';
import { ToysContext } from '../provider/ToysProvider';
import { NavLink } from 'react-router';

const ToysCategory = () => {
    const { toys } = use(ToysContext);
    const categories = [...new Set(toys.map(toy => toy.subCategory))];
    return (
        <aside className="lg:min-h-screen sticky top-2 bg-linear-to-b from-[#fffaf0] to-[#fff5e1] rounded-2xl shadow-md border border-[#ffe6a7]/50 p-5 flex flex-wrap lg:flex-col justify-evenly  lg:gap-4 gap-3">
            <h1 className="text-2xl font-extrabold text-[#6f4e37] mb-2 lg:mb-4 text-center lg:text-left">
                Categories
            </h1>

            <NavLink
                to="/all-toys"
                className={({ isActive }) =>
                    `block py-2 px-3 rounded-lg font-semibold text-center transition-all duration-300
                    ${isActive
                        ? 'bg-[#6f4e37] text-white shadow-md scale-105'
                        : 'bg-[#ffecb3] hover:bg-[#ffd54f] text-[#6f4e37] hover:scale-105 shadow-sm'}`
                }
            >
                All Toys
            </NavLink>

            {categories.map((category, i) => (
                <NavLink
                    key={i}
                    to={`/toys-by-category/${category}`}
                    className={({ isActive }) =>
                        `block py-2 px-3 rounded-lg font-semibold text-center transition-all duration-300
                        ${isActive
                            ? 'bg-[#6f4e37] text-white shadow-md scale-105'
                            : 'bg-white hover:bg-[#fff3cd] border border-[#ffecb3] text-[#6f4e37] hover:scale-105 shadow-sm'}`
                    }
                >
                    {category}
                </NavLink>
            ))}
        </aside>
    );
};

export default ToysCategory;
