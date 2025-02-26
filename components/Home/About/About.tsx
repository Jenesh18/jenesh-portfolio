import SectionHeading from '@/components/Helper/SectionHeading'
import { aboutInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="py-20 bg-[#050709]" id='about'>
      <SectionHeading>About Me</SectionHeading>
      
      <div className='container mx-auto px-4 max-w-7xl'>
        {/* Main Content */}
        <div className='mt-16 grid lg:grid-cols-2 gap-16'>
          {/* Left Column - Text & Skills */}
          <div data-aos="fade-right" className='space-y-12'>
            <div className='space-y-6'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight'>
                {aboutInfo.title}
              </h1>
              
              <div className='text-gray-400 space-y-4'>
                {aboutInfo.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className='text-lg leading-relaxed'>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div data-aos="fade-left" className='lg:pl-10'>
            <div className='grid grid-cols-2 gap-6'>
              {aboutInfo.stats.map((stat) => (
                <div 
                  key={stat.id}
                  className='group p-6 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300'
                >
                  <div className='relative w-16 h-16 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300'>
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      fill
                      className='object-contain'
                    />
                  </div>
                  <h3 className='text-3xl font-bold text-white text-center mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
                    {stat.value}
                  </h3>
                  <p className='text-gray-400 text-center text-sm'>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About