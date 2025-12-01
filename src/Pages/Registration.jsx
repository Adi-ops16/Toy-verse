import React, { use, useState } from 'react';
import loginImg from '../assets/login.jpg';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { Eye, EyeClosed, EyeOff } from 'lucide-react';
import { ReTitle } from 're-title';
import { ToysContext } from '../Context/ToysContext';
import { AuthContext } from '../Context/AuthContext';

const Registration = () => {
    const { createUser, setUser, handleGoogleAuth, updateUser } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false)
    const { setLoading } = use(ToysContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleCreateAccount = (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const image = e.target.image.value;
        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();

        // password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text:
                    'Password must be at least 6 characters and contain both uppercase and lowercase letters.',
            });
            return;
        }

        // creating user
        createUser(email, password)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Your account has been created',
                });
                const user = res.user;
                updateUser({ displayName: name, photoURL: image }).then(() => {
                    setUser({ ...user, displayName: name, photoURl: image });
                }).catch(error => {
                    Swal.fire({
                        icon: "error",
                        title: "An error occurred",
                        text: `${error.code}`
                    })
                    setUser(user)
                })
                setLoading(false);
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'An error occurred',
                    text: `${error.code}`,
                });
            });
    };
    const handleGoogleSignUp = () => {
        handleGoogleAuth().then(res => {
            Swal.fire({
                icon: "success",
                title: "Your account has been created"
            })
            const user = res.user
            setUser(user)
            setLoading(false)
            navigate(`${location.state ? location.state : '/'}`)
        })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: 'An error occurred',
                    text: `${error.code}`
                })
            })
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#FFFBEA]">
            {/* title head */}
            <ReTitle title='Register | Toy Verse'></ReTitle>
            {/* Left Side */}
            <div className="w-full md:w-1/2 bg-[#FFF7E0] flex flex-col justify-center items-center px-6 py-10 md:px-10">
                <img
                    src={loginImg}
                    alt="Registration Illustration"
                    className="w-3/4 max-w-xs sm:max-w-sm md:max-w-md"
                />
                <h2 className="text-xl sm:text-2xl font-bold mt-6 text-gray-800 text-center">
                    Welcome! To Toy Verse
                </h2>
                <p className="text-gray-600 text-center mt-2 max-w-sm text-sm sm:text-base">
                    Create an account to continue your toy adventure — discover, shop, and
                    play with joy!
                </p>
            </div>
            {/* Right Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white rounded-t-[50px] md:rounded-t-none md:rounded-l-[50px] shadow-2xl py-10 px-6 sm:px-10">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-[#E1AD01]">
                    ToyVerse
                </h1>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    Create your account
                </p>

                <form
                    onSubmit={handleCreateAccount}
                    className="w-full max-w-sm space-y-5">
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E6DAA8]"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Image</label>
                        <input
                            name="image"
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E6DAA8]"
                            placeholder="Image URL"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E6DAA8]"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Password</label>
                        <div className='relative flex items-center'>
                            <input
                                name="password"
                                type={`${showPassword ? "text" : "password"}`}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E6DAA8] relative"
                                placeholder="••••••••"
                                required
                                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Password must have at least 6 characters, including 1 uppercase and 1 lowercase letter"
                            />
                            <span onClick={() => setShowPassword(!showPassword)} className='z-10 absolute right-4 cursor-pointer'>{showPassword ? <Eye></Eye> : <EyeOff></EyeOff>}</span>
                        </div>
                    </div>
                    {/* Terms & Conditions */}
                    <div className="flex items-center gap-2 ml-3">
                        <input
                            type="checkbox"
                            id="terms"
                            className="accent-[#E1AD01] w-4 h-4"
                            required
                        />
                        <label htmlFor="terms" className="text-sm text-gray-700">
                            I accept the{' '}
                            <a href="#" className="text-[#E1AD01] hover:underline">
                                Terms & Conditions
                            </a>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#E1AD01] text-white py-2 rounded-lg font-semibold hover:bg-[#d29a00] transition"
                    >
                        Create Account
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-2 my-2">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <p className="text-gray-500 text-sm">or</p>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Google Sign-in */}
                    <button
                        onClick={handleGoogleSignUp}
                        type="button"
                        className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-[#FFF7E0] transition"
                    >
                        <svg
                            aria-label="Google logo"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <g>
                                <path d="m0 0H512V512H0" fill="#fff"></path>
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                <path
                                    fill="#4285f4"
                                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                                ></path>
                                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                <path
                                    fill="#ea4335"
                                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                                ></path>
                            </g>
                        </svg>
                        Sign up with Google
                    </button>

                    {/* register page link */}
                    <p className="text-center text-sm mt-4 text-gray-600">
                        Already have an account?{' '}
                        <Link
                            to="/auth/login"
                            className="text-[#E1AD01] font-semibold hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Registration;
