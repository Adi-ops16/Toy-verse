import React from 'react';
import Swal from 'sweetalert2';

const NewsLetter = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Thank you for subscribing!",
            text: "You're now part of our ToyVerse community 🎉",
            confirmButtonColor: "#E1AD01"
        });
    };

    return (
        <div className="bg-linear-to-br from-[#FFFBEA] via-[#FFF7E0] to-[#E6DAA8] py-12 px-6 mb-20 rounded-2xl shadow-md text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#6f4e37] mb-3">Stay in the Loop!</h1>
            <p className="text-gray-700 font-medium mb-6">
                Subscribe to get the latest toy trends, exclusive offers, and fun updates from ToyVerse 🎠
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full sm:flex-1 px-4 py-2 border border-[#E1AD01]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1AD01] transition"
                />
                <button
                    type="submit"
                    className="bg-[#E1AD01] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#d29a00] transition"
                >
                    Subscribe
                </button>
            </form>

            <p className="text-xs text-gray-500 mt-3">
                We respect your privacy — no spam, only toy joy 💛
            </p>
        </div>
    );
};

export default NewsLetter;
