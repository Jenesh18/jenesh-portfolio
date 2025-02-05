"use client"
import { navLinks } from '@/constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

// props type
type Props = {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false)

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
                <Image src='/images/logo.png' alt='LOGO' width={170} height={170} className='ml-[-1.5rem] sm:ml-0' />
                {/* Logo end */}
                {/* Nav Items start*/}
                <div className='flex items-center space-x-10'>
                    <div className='hidden lg:flex items-center space-x-8'>
                        {navLinks.map((item) => (
                            <Link key={item.id} href={item.url}>
                                <p className='nav__link'>{item.label}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Nav Items start*/}
                {/* Hire me start*/}
                <div className='flex items-center space-x-4'>
                    <button className='md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg' >
                        Hire me
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