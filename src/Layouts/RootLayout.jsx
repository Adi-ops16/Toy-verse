import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const RootLayout = () => {

    // aos init
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false
        })
    }, [])
    // aos refresh
    useEffect(() => {
        AOS.refresh()
    }, [])

    return (
        <div className='flex flex-col min-h-screen bg-base-200'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <div>
                    <Outlet></Outlet>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;