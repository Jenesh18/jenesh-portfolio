import SectionHeading from '@/components/Helper/SectionHeading'
import { aboutInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const About = () => {
  return (
    <div className="py-20 bg-[#050709] relative overflow-hidden" id='about'>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full mix-blend-overlay blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full mix-blend-overlay blur-3xl animate-pulse delay-1000" />
        <div className="absolute w-full h-full bg-[#050709]/80 backdrop-blur-3xl" />
      </div>

      <div className="relative">
      <SectionHeading>About Me</SectionHeading>
      
        <div className='container mx-auto px-4 max-w-7xl'>
        <div className='mt-16 grid lg:grid-cols-2 gap-16 items-center'>
            {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
              <div className='relative'>
                
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                  className='text-4xl md:text-5xl lg:text-6xl font-bold py-4'
              >
                <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
                  {aboutInfo.title}
                </span>
              </motion.h1>
              </div>
              
              <div className='space-y-6'>
                {aboutInfo.description.split('\n\n').map((paragraph, idx) => (
                  <motion.p 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className='text-lg text-gray-300 leading-relaxed'
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <a 
                  href="#contact" 
                  className="group relative inline-flex items-center gap-2 px-8 py-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                >
                  <span className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-300" />
                  <span className="relative text-white font-medium">
                  Let's work together 
                  </span>
                  <FiArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='lg:pl-10'
          >
            <div className='grid grid-cols-2 gap-6'>
              {aboutInfo.stats.map((stat, index) => (
                <motion.div 
                  key={stat.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  className='group relative'
                >
                    {/* Animated Border */}
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 group-hover:opacity-100 blur group-hover:blur-md transition duration-500" />
                    
                    {/* Card Content */}
                    <div className='relative p-6 rounded-xl bg-gray-900/90 h-full flex flex-col items-center justify-center gap-4 border border-gray-800/50 group-hover:border-transparent transition-colors duration-300'>
                      {/* Icon Container */}
                      <div className='relative w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-3 transform group-hover:scale-110 transition-all duration-300'>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Image
                        src={stat.icon}
                        alt={stat.label}
                        fill
                          className='object-contain p-2 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]'
                      />
                    </div>
                    
                      {/* Text Content */}
                    <div className='text-center'>
                        <motion.div 
                          className='text-3xl font-bold mb-1'
                        whileHover={{ scale: 1.1 }}
                      >
                          <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
                        {stat.value}
                          </span>
                        </motion.div>
                        <p className='text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300'>
                          {stat.label}
                        </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About