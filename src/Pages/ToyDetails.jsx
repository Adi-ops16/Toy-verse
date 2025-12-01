import React, { use } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ToysContext } from '../provider/ToysProvider';
import { ChevronLeft, StarHalfIcon, StarIcon } from 'lucide-react';
import Swal from 'sweetalert2';
import { ReTitle } from 're-title';

const ToyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { toys } = use(ToysContext);

    const singleToy = toys.find(toy => toy.toyId == id);
    const {
        toyId, toyName, sellerName, sellerEmail, price, rating, availableQuantity, description, pictureURL } = singleToy || {};

    const handleTryNow = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Your request has been successful! 🎉",
            text: "We will contact you as soon as possible.",
            confirmButtonColor: "#6f4e37",
            confirmButtonText: "Great!"
        });
    };

    return (
        <div className="min-h-[calc(100vh-150px)] bg-linear-to-b from-[#FFFBEA] to-[#FFF4D1] py-14 px-6 flex flex-col lg:flex-row justify-center items-center gap-10 rounded-3xl shadow-inner">
            {/* title head */}
            <ReTitle title={`Toy-Details-${toyId} | Toy Verse`}></ReTitle>
            {/* Image Section */}
            <figure className="lg:w-[45%] w-full bg-white rounded-3xl shadow-lg overflow-hidden border border-[#FFE8A3]/60">
                <img
                    src={pictureURL}
                    alt={toyName}
                    className="w-full h-[500px] object-contain hover:scale-105 transition-transform duration-500 ease-in-out"
                />
            </figure>

            {/* Details Section */}
            <div className="lg:w-[45%] w-full space-y-6 bg-white shadow-md rounded-3xl p-8 border border-[#FFE8A3]/50">
                <h1 className="text-3xl font-extrabold text-[#6f4e37] tracking-wide">
                    {toyName}
                </h1>
                <p className="text-[#5b3f2c] text-base opacity-90 leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-col md:flex-row justify-between font-semibold text-[#6f4e37] bg-[#FFF9E5] p-3 rounded-lg border border-[#F7E5A3]/70">
                    <p>Company: <span className="font-bold">{sellerName}</span></p>
                    <p>{sellerEmail}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-[#6f4e37]">
                        Available: <span className="text-[#E1AD01]">{availableQuantity} pcs</span>
                    </p>
                    <p className="text-2xl font-extrabold text-[#E1AD01] drop-shadow-sm">
                        ৳{price}
                    </p>
                </div>
                <div className="flex items-center gap-2 text-[#6f4e37]">
                    {[...Array(4)].map((_, i) => (
                        <StarIcon key={i} fill="#6f4e37" color="#6f4e37" size={22} />
                    ))}
                    <StarHalfIcon fill="#6f4e37" color="#6f4e37" size={22} />
                    <span className="text-xl font-bold ml-2">{rating}</span>
                </div>
                {/* Try Now Form */}
                <form onSubmit={handleTryNow} className="mt-5 space-y-4">
                    <fieldset className="space-y-2">
                        <label className="block text-[#6f4e37] font-semibold">Name</label>
                        <input
                            type="text"
                            className="w-full input border border-[#E1AD01]/60 bg-[#FFFDF6] focus:outline-none focus:ring-2 focus:ring-[#E1AD01] rounded-xl"
                            placeholder="your name"
                            required
                        />
                        <label className="block text-[#6f4e37] font-semibold">Email</label>
                        <input
                            type="email"
                            className="w-full input border border-[#E1AD01]/60 bg-[#FFFDF6] focus:outline-none focus:ring-2 focus:ring-[#E1AD01] rounded-xl"
                            placeholder="example@gmail.com"
                            required
                        />
                    </fieldset>
                    <button
                        type="submit"
                        className="btn w-full text-white bg-[#E1AD01] hover:bg-[#c89b0d] border-none rounded-xl font-bold text-lg transition-all duration-300"
                    >
                        Try Now
                    </button>
                </form>
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 mt-6 btn bg-[#6f4e37] text-white border-none rounded-xl px-6 hover:bg-[#5a3f2a] transition-all duration-300"
                >
                    <ChevronLeft size={20} /> Go Back
                </button>
            </div>
        </div>
    );
};

export default ToyDetails;
