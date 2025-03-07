import { BaseInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='w-full pt-[4vh] mt:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative' id='home'>
            <div className='flex flex-col justify-center h-full w-4/5 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                    {/* Text Content */}
                    <div>
                        {/* Sub heading */}
                        <h1 data-aos="fade-left" className='text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold'>
                            I&apos;m {BaseInfo.name}
                        </h1>

                        {/* Title */}
                        <h1 data-aos="fade-right" data-aos-delay="500" className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>
                            {BaseInfo.position}
                        </h1>

                        {/* Title */}
                        <p data-aos="fade-left" data-aos-delay="200" className='mt-6text-sm md:text-base text-white text-opacity-60'>
                            {BaseInfo.description}
                        </p>

                        {/* Button */}
                        <button data-aos="zoom-in" data-aos-delay="300" className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2'
                            onClick={() => window.open(BaseInfo.resumeURL, '_blank')}
                        >
                            <span>Download CV</span>
                            <FaDownload />
                        </button>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-4" data-aos="fade-up" data-aos-delay="200">
                            {BaseInfo.socialLinks.linkedin && (
                                <a
                                    href={BaseInfo.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-2xl hover:text-blue-500 transition-transform transform hover:scale-110"
                                >
                                    <FaLinkedin />
                                </a>
                            )}
                            {BaseInfo.socialLinks.github && (
                                <a
                                    href={BaseInfo.socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-2xl hover:text-gray-400 transition-transform transform hover:scale-110"
                                >
                                    <FaGithub />
                                </a>
                            )}
                            {BaseInfo.socialLinks.twitter && (
                                <a
                                    href={BaseInfo.socialLinks.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-2xl hover:text-blue-400 transition-transform transform hover:scale-110"
                                >
                                    <FaTwitter />
                                </a>
                            )}
                        </div>

                    </div>
                    <div data-aos="zoom-in" data-aos-delay="400" className='mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden'>
                        <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero