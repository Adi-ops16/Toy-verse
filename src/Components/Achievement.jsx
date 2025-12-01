import { HeartHandshake, Trophy, Truck, User } from 'lucide-react';
import React from 'react';

const achievements = [
    {
        icon: <Truck size={30} />,
        title: 'Fast Delivery',
        desc: '95% On-Time Delivery',
    },
    {
        icon: <User size={30} />,
        title: 'Happy Customers',
        desc: '50,000+ Smiling Customers',
    },
    {
        icon: <HeartHandshake size={30} />,
        title: 'Community Impact',
        desc: 'Partnered with 15+ Child Care Foundations',
    },
    {
        icon: <Trophy size={30} />,
        title: 'Awards',
        desc: 'Voted #1 Toy Store (2024)',
    },
];

const Achievement = () => {
    return (
        <section className="my-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#6f4e37] mb-10">
                Our Achievements 🏅
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
                {achievements.map((a, i) => (
                    <div
                        key={i}
                        className="bg-linear-to-b from-[#FFFBEA] to-[#FFF4D2] hover:from-[#FFF7E0] hover:to-[#FFE9A0] border border-[#FFE5A0]/50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center max-w-[250px]"
                    >
                        <h2 className="flex items-center gap-2 text-[#E1AD01] text-2xl font-bold mb-2 permanent">
                            {a.icon}
                            {a.title}
                        </h2>
                        <p className="text-[#6f4e37] font-semibold">{a.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievement;
