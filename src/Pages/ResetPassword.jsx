import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Mail } from "lucide-react";
import { ReTitle } from "re-title";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const { resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const preEmail = location.state?.email || "";

    useEffect(() => {
        if (preEmail) {
            setEmail(preEmail);
        }
    }, [preEmail]);

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (!email) {
            Swal.fire({
                icon: "warning",
                title: "Please enter your email address",
            });
            return;
        }

        resetPassword(email)
            .then(() => {
                Swal.fire({
                    icon: "info",
                    title: "Password reset email sent!",
                    text: "Check your inbox to reset your password.",
                });
                window.open("https://mail.google.com", "_blank");
                navigate("/auth/login");
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "An error occurred",
                    text: `${error.code}`,
                });
            });
    };

    return (
        <div className="min-h-screen bg-linear-to-b from-[#FFFBEA] to-[#FFF4D1] flex items-center justify-center px-4">
            <ReTitle title="Reset-password | Toy Verse"></ReTitle>
            <div className="bg-white w-full max-w-md rounded-3xl shadow-md border border-[#FFE8A3]/60 p-8 md:p-10">
                <div className="text-center mb-8">
                    <div className="mx-auto bg-[#FFF7E0] w-16 h-16 flex items-center justify-center rounded-full shadow-sm mb-4">
                        <Mail size={36} className="text-[#E1AD01]" />
                    </div>
                    <h1 className="text-3xl font-extrabold text-[#6f4e37]">
                        Reset <span className="text-[#E1AD01]">Password</span>
                    </h1>
                    <p className="text-[#6f4e37]/70 mt-2 text-sm md:text-base">
                        Enter your registered email and we'll send you a reset link.
                    </p>
                </div>

                <form onSubmit={handleResetPassword} className="space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-[#6f4e37] font-semibold mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="w-full border border-[#FFE8A3]/70 bg-[#FFFDF5] rounded-xl p-3 focus:ring-2 focus:ring-[#E1AD01] focus:outline-none placeholder:text-gray-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#E1AD01] hover:bg-[#d29a00] text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-300"
                    >
                        Send Reset Link
                    </button>
                </form>

                <p className="text-center text-sm text-[#6f4e37]/70 mt-6">
                    Remember your password?{" "}
                    <span
                        onClick={() => navigate("/auth/login")}
                        className="text-[#E1AD01] font-semibold cursor-pointer hover:underline"
                    >
                        Go back to Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ResetPassword;
