import React, { useState } from 'react';
import Logo from '/Logo.png';
import foodBg from '/food-bg.jpg';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="flex items-center justify-between p-4 pl-40 z-10 relative">
            {/* Logo and Text Container */}
            <div className="flex items-center relative md:pt-10 z-20">
                {/* Logo */}
                <img src={Logo} alt="Logo" className="h-24 w-auto mr-4 pl-10 md:pl-0" />

                {/* Text */}
                <div className="font-[oswald] hidden md:block">
                    <h1 className="text-4xl leading-none text-[#0796EF]">
                        DEEP <span className="text-white">NET</span>
                    </h1>
                    <p className="text-4xl leading-none text-[#857878] mt-1">SOFT</p>
                </div>
            </div>

            {/* Background Image */}
            <div className="absolute top-17 md:top-[107px] left-0 w-full -z-10">
                <img src={foodBg} className="w-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>
            <div>
                <h1 className='text-white text-7xl absolute left-40 sm:left-170 pt-20 sm:pt-28 font-[oswald] font-bold tracking-wider red-shadow'>MENU</h1>
                <p className='font-[Kelly-Slab] absolute left-5 sm:mx-100 text-xl text-[#BBBBBB] sm:pt-52 pt-44 text-center tracking-wide'>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to
                    <p> place an order, use the "Order Online" button located below the menu.</p></p>
            </div>
            {/* Navigation */}
            <nav className="hidden md:flex space-x-6 font-[oswald] text-white pr-40 z-30 ">
                <a
                    href="#home"
                    className="text-lg hover:text-[#0796EF] "
                >
                    HOME
                </a>
                <a
                    href="#menu"
                    className="text-lg text-[#0796EF] hover:text-[#0796EF] "
                >
                    MENU
                </a>
                <a
                    href="#reservation"
                    className="text-lg hover:text-[#0796EF] "
                >
                    MAKE A RESERVATION
                </a>
                <a
                    href="#contact"
                    className="text-lg hover:text-[#0796EF] "
                >
                    CONTACT US
                </a>
            </nav>
            {/* Hamburger menu for mobile */}
            <div className="md:hidden flex items-center pb-12">
                <button onClick={toggleMobileMenu}>
                    <svg
                        className="w-6 h-6 text-[#857878] hover:text-[#0796EF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 right-0 bg-white shadow-lg rounded-lg w-48">
                    <a
                        href="#home"
                        className="block px-4 py-2 text-xl text-[#857878] hover:text-[#0796EF]"
                    >
                        HOME
                    </a>
                    <a
                        href="#menu"
                        className="block px-4 py-2 text-xl text-[#857878] hover:text-[#0796EF]"
                    >
                        MENU
                    </a>
                    <a
                        href="#reservation"
                        className="block px-4 py-2 text-xl text-[#857878] hover:text-[#0796EF]"
                    >
                        MAKE A RESERVATION
                    </a>
                    <a
                        href="#contact"
                        className="block px-4 py-2 text-xl text-[#857878] hover:text-[#0796EF]"
                    >
                        CONTACT US
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
