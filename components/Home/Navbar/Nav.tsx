"use client"
import { navLinks } from '@/constant/constant'
// import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { HiOutlineMail } from 'react-icons/hi'

// props type
type Props = {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false)

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            }
            if (window.scrollY <= 90) {
                setNavBg(false);
            }
        };
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, [])

    return (
        <div className={`fixed ${navBg ? "bg-[#240b39]" : "fixed"}
         h-[12vh] z-[10] w-full transition-all duration-500 ease-in-out`}>
            <div className='flex justify-between items-center h-full w-[95%] xl:w-[80%] sm:w-[90%] mx-auto'>
                {/* Logo start */}
                <span className=' sm:ml-0 text-white text-2xl font-bold'>
                    Jenesh
                </span>
                {/* Logo end */}
                {/* Nav Items start*/}
                <div className='flex items-center space-x-10'>
                    <div className='hidden lg:flex items-center space-x-8'>
                        {navLinks.map((item) => (
                            <Link 
                                key={item.id} 
                                href={`#${item.url}`}
                                onClick={(e) => handleScroll(e, `#${item.url}`)}
                            >
                                <p className='nav__link'>{item.label}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Nav Items start*/}
                {/* Hire me start*/}
                <div className='flex items-center space-x-4'>
                    <button
                        onClick={() => window.location.href = "mailto:jenesh018@gmail.com"}
                        className="md:px-10 md:py-3 px-8 py-3 text-white font-semibold sm:text-base text-sm bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-200 rounded-lg flex items-center space-x-2"
                    >
                        <HiOutlineMail className="w-5 h-5" />
                        <span>Hire me</span>
                    </button>
                    {/* Burger Menu start*/}
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                    {/* Burger Menu end*/}
                </div>
                {/* Hire me end*/}

            </div>
        </div>
    )
}

export default Nav