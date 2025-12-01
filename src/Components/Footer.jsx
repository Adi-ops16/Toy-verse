import React from "react";
import { ToyBrick, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-linear-to-b from-[#e1ad01] to-[#f8e8a0] text-[#6f4e37] font-semibold">
            {/* Main Footer */}
            <div className="footer sm:footer-horizontal px-10 py-12 max-w-7xl mx-auto gap-10">
                {/* About Section */}
                <aside className="">
                    <div className="flex items-center gap-2 mb-3">
                        <ToyBrick size={26} className="text-[#6f4e37]" />
                        <h2 className="text-2xl font-bold">ToyVerse</h2>
                    </div>
                    <p className="text-sm max-w-xs mb-4">
                        Discover, shop, and play! ToyVerse brings joy to kids and collectors with our handpicked toys made for fun and imagination.
                    </p>
                    <div className="space-y-1 text-sm">
                        <p className="flex items-center gap-2"><Phone size={16} /> +880 1918389189</p>
                        <p className="flex items-center gap-2"><Mail size={16} /> support@toyverse.com</p>
                        <p className="flex items-center gap-2"><MapPin size={16} /> Dhaka, Bangladesh</p>
                    </div>
                    {/* Social Media */}
                    <div className="flex items-center gap-4 mt-4">
                        <a href="https://www.facebook.com/" target="_blank" className="hover:text-[#d18c00]">
                            <FaFacebook size={20} />
                        </a>
                        <a href="https://x.com/home" target="_blank" className="hover:text-[#d18c00]">
                            <FaXTwitter size={20} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="hover:text-[#d18c00]">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" className="hover:text-[#d18c00]">
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </aside>

                {/* Services */}
                <nav className="">
                    <h6 className="footer-title text-lg mb-2">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                {/* Company */}
                <nav className="">
                    <h6 className="footer-title text-lg mb-2">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>

                {/* Legal */}
                <nav className="">
                    <h6 className="footer-title text-lg mb-2">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>

            {/* Divider */}
            <div className="border-t border-[#d9a500]/40 mx-10"></div>

            {/* Bottom Copyright */}
            <div className="footer footer-center py-4 text-[#6f4e37] text-sm">
                <p>© {new Date().getFullYear()} ToyVerse. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
