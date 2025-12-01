import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import ProfileUpdate from "../Components/ProfileUpdate";
import { ReTitle } from "re-title";

const MyProfile = () => {
    const { user } = use(AuthContext);

    const [userStats, setUserStats] = useState({
        favorites: 0,
        addedToys: 0,
        orders: 0,
    });

    useEffect(() => {
        if (!user) return;
        const storageKey = `stats-${user.uid}`;
        const savedStats = localStorage.getItem(storageKey);
        if (savedStats) {
            setUserStats(JSON.parse(savedStats));
        } else {
            const newStats = {
                favorites: Math.floor(Math.random() * 10),
                addedToys: Math.floor(Math.random() * 5),
                orders: Math.floor(Math.random() * 2),
            };
            localStorage.setItem(storageKey, JSON.stringify(newStats));
            setUserStats(newStats);
        }
    }, [user]);

    const { favorites, addedToys, orders } = userStats;

    return (
        <div className="min-h-screen flex justify-center items-center p-6 bg-[#FFF7E0]">
            {/* title head */}
            <ReTitle title="My-Profile | Toy Verse"></ReTitle>
            <div className="w-full max-w-3xl bg-white shadow-lg border border-[#f7e1a5] rounded-2xl p-8 text-center transition-transform transform hover:scale-[1.01] duration-300">
                {/* user info */}
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <img
                            src={user?.photoURL || "https://i.ibb.co/6vK8dLF/default-avatar.png"}
                            alt="Profile"
                            className="w-32 h-32 rounded-full shadow-md border-4 border-[#e1ad01] object-cover"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-[#e1ad01] p-2 rounded-full shadow-sm">
                            <span className="text-white text-sm font-bold">★</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mt-4 text-[#6f4e37]">
                        {user?.displayName || "User Name"}
                    </h2>
                    <p className="text-[#6f4e37]/70 text-sm font-medium">
                        {user?.email || "example@email.com"}
                    </p>
                </div>

                {/* Divider */}
                <div className="border-t border-[#f5d77a] my-6"></div>

                {/* User Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-[#FFF0B3] p-4 rounded-xl shadow-sm hover:shadow-md transition">
                        <p className="text-sm text-[#6f4e37]/70 font-medium">Favorites</p>
                        <h3 className="text-xl font-bold text-[#e1ad01]">{favorites}</h3>
                    </div>
                    <div className="bg-[#FFE6A7] p-4 rounded-xl shadow-sm hover:shadow-md transition">
                        <p className="text-sm text-[#6f4e37]/70 font-medium">Toys Added</p>
                        <h3 className="text-xl font-bold text-[#e1ad01]">{addedToys}</h3>
                    </div>
                    <div className="bg-[#FFF7E0] p-4 rounded-xl shadow-sm hover:shadow-md transition">
                        <p className="text-sm text-[#6f4e37]/70 font-medium">Orders</p>
                        <h3 className="text-xl font-bold text-[#e1ad01]">{orders}</h3>
                    </div>
                </div>
                {/* about user */}
                <div className="mt-8 text-left">
                    <h3 className="text-lg font-semibold text-[#6f4e37] mb-2">About</h3>
                    <p className="text-[#6f4e37]/80 leading-relaxed">
                        Hi, <span className="font-bold">{user?.displayName || "User"}</span>!
                        Welcome to your profile. Here you can view your ToyVerse interactions and update your details anytime.
                    </p>
                </div>
                {/* update profile modal */}
                <div className="mt-8 flex justify-center gap-4 flex-wrap">
                    <button
                        onClick={() => document.getElementById("edit_profile").showModal()}
                        className="bg-[#e1ad01] hover:bg-[#f5c400] text-[#6f4e37] font-semibold px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
                    >
                        Edit Profile
                    </button>
                    {/* favorites button */}
                    <button
                        onClick={() =>
                            Swal.fire({
                                icon: "info",
                                title:
                                    "Favorites details are not available right now. Please check back later!",
                            })
                        }
                        className="bg-[#FFF7E0] hover:bg-[#fbe9b6] text-[#6f4e37] font-semibold px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
                    >
                        View Favorites
                    </button>
                </div>
            </div>

            {/* Modal */}
            <ProfileUpdate />
        </div>
    );
};

export default MyProfile;

