import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const BookIcon = () => (
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
    </svg>
)

const Navbar = () => {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Hotels", path: "/rooms" },
        { name: "Experience", path: "/experience" },
        { name: "About", path: "/about" },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/') {
            setIsScrolled(true)
            return
        } else {
            setIsScrolled(false)
        }
        setIsScrolled(prev => location.pathname !== "/" ? true : prev)
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-4 transition-all duration-500 md:px-16 lg:px-24 xl:px-32 ${isScrolled ? "bg-white/80 py-3 text-gray-700 shadow-md backdrop-blur-lg md:py-4" : "py-4 md:py-6"}`}
        >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
                <img
                    src={assets.logo}
                    alt="logo"
                    className={`h-9 ${isScrolled && "opacity-80 invert"}`}
                />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-4 md:flex lg:gap-8">
                {navLinks.map((link, i) => (
                    <a
                        key={i}
                        href={link.path}
                        className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}
                    >
                        {link.name}
                        <div
                            className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 transition-all duration-300 group-hover:w-full`}
                        />
                    </a>
                ))}
                <button onClick={() => navigate('/owner')}
                    className={`cursor-pointer rounded-full border px-4 py-1 text-sm font-light ${isScrolled ? "text-black" : "text-white"} transition-all`}
                >
                    Dashboard
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden items-center gap-4 md:flex">
                <img
                    src={assets.searchIcon}
                    alt="search"
                    className={`${isScrolled && "invert"} h-7 transition-all duration-500`}
                />

                {
                    user
                        ?
                        (<UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="My Bookings" labelIcon={<BookIcon />} onClick={() => navigate('/my-bookings')} />
                            </UserButton.MenuItems>
                        </UserButton>)
                        :
                        (<button onClick={openSignIn} className="cursor-pointer ml-4 rounded-full bg-black px-8 py-2.5 text-white transition-all duration-500">
                            Login
                        </button>)
                }
            </div>

            {/* Mobile Menu Button */}

            <div className="flex items-center gap-3 md:hidden">
                {user && <UserButton>
                    <UserButton.MenuItems>
                        <UserButton.Action label="My Bookings" labelIcon={<BookIcon />} onClick={() => navigate('/my-bookings')} />
                    </UserButton.MenuItems>
                </UserButton>}
                <img
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    src={assets.menuIcon}
                    alt=""
                    className={`${isScrolled && "invert"} h-4`}
                />
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-6 bg-white text-base font-medium text-gray-800 transition-all duration-500 md:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <button
                    className="absolute top-4 right-4"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <img src={assets.closeIcon} alt="close menu" className="h-6.5" />
                </button>

                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </a>
                ))}

                {user && <button className="cursor-pointer rounded-full border px-4 py-1 text-sm font-light transition-all" onClick={() => navigate('/owner')}>
                    Dashboard
                </button>}

                {!user && <button onClick={openSignIn} className="rounded-full bg-black px-8 py-2.5 text-white transition-all duration-500">
                    Login
                </button>}
            </div>
        </nav>
    );
};

export default Navbar;
