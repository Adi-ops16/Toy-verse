import React from "react";
import { FaSearch, FaShoppingCart, FaSmileBeam } from "react-icons/fa";

const steps = [
    {
        icon: <FaSearch />,
        title: "1. Browse Toys",
        description: "Explore a wide collection of fun and creative toys curated for all age groups."
    },
    {
        icon: <FaShoppingCart />,
        title: "2. Select & Add to Cart",
        description: "Check details, read descriptions, and add your favorite toys to the cart with ease."
    },
    {
        icon: <FaSmileBeam />,
        title: "3. Enjoy the Fun!",
        description: "Secure authentication and a smooth experience—ToyVerse makes toy shopping joyful 💛"
    }
];

const HowItWorks = () => {
    return (
        <div className="py-16 px-6 mb-20 bg-linear-to-br from-[#FFFBEA] via-[#FFF7E0] to-[#E6DAA8] rounded-2xl shadow-md">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#6f4e37] mb-6">
                How ToyVerse Works
            </h2>

            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 font-medium">
                Discover toys effortlessly! ToyVerse gives you a smooth, fun, and secure shopping experience —
                from browsing to bringing joy home 🎁
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-white/70 rounded-xl p-8 shadow"
                    >
                        <div className="bg-[#E1AD01]/20 text-[#E1AD01] p-4 rounded-full text-3xl mb-4">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-[#6f4e37] mb-2">
                            {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
