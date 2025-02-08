import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

// props type
type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'
    return (
        <div>
            {/* overlay start */}
            <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}>
                {/* navlink start */}
                <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300  fixed justify-center flex flex-col h-full w-[80%] sm:w-[80%] bg-[#0f0715] space-y-6 z-[10000]`}>
                    {navLinks.map((item) => (
                        <Link key={item.id} href={item.url}>
                            <p className='nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]'>{item.label}</p>
                        </Link>
                    ))}
                </div>
                {/* navlink end */}
                {/* close button start */}
                <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white' />
                {/* close button end */}
            </div>
            {/* overlay end */}
        </div>
    )
}

export default MobileNav