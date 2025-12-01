import React, { use } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
import RingLoaderW from './Loaders/RingLoaderW';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
    const { user, logOut, authLoading } = use(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Log Out Successful',
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'An error occurred',
                    text: `${error.code}`,
                });
            });
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/all-toys">All Toys</NavLink>
            </li>
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
                <NavLink to="/auth/my-profile">Profile</NavLink>
            </li>
            <li>
                <NavLink to="/auth/dashboard">Dashboard</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar sticky top-0 bg-linear-to-r from-[#E1AD01] via-[#F3D778] to-[#E1AD01] shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost text-[#6f4e37] lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-[#FFFBEA] text-[#6f4e37] rounded-box mt-3 w-52 p-2 shadow gap-2 font-semibold"
                    >
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2">
                    <img className="w-12 h-12 rounded-full" src={logo} alt="Logo" />
                    <span className="font-extrabold text-lg text-[#6f4e37] hidden sm:inline">
                        ToyVerse
                    </span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-[#6f4e37] font-semibold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-4">
                {user ? (
                    <div className="flex items-center gap-4">
                        {authLoading ? (
                            <RingLoaderW></RingLoaderW>
                        ) : (
                            <div
                                data-tip={user?.displayName}
                                className="tooltip tooltip-bottom"
                            >
                                <img
                                    className="w-11 h-11 rounded-full border-2 border-[#FFF7E0] hover:scale-105 transition-transform duration-200 object-cover"
                                    src={user?.photoURL}
                                    alt="profile pic"
                                />
                            </div>
                        )}
                        <button
                            onClick={handleLogOut}
                            className="btn rounded-md bg-[#FFF7E0] text-[#6f4e37] hover:bg-[#f8e8a0] font-semibold"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link
                        to="/auth/login"
                        className="btn bg-[#FFF7E0] hover:bg-[#f8e8a0] text-[#6f4e37] font-semibold"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
