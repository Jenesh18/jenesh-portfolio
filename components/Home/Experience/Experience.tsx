import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '@/Data/data';
import SectionHeading from '@/components/Helper/SectionHeading';
import Image from 'next/image';
import { FiCalendar, FiMapPin, FiBriefcase, FiAward } from 'react-icons/fi';

const Experience = () => {
  return (
    <div className="py-20 bg-[#0f0715]" id="experience">
      <SectionHeading>Work Experience</SectionHeading>
      
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative mt-16">
          {/* Timeline Start Point */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-6">
            <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-[#050709] z-10 flex items-center justify-center">
              <FiBriefcase className="w-3 h-3 text-white" />
            </div>
            <div className="absolute w-10 h-10 rounded-full bg-blue-500/20 animate-ping" />
          </div>

          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-blue-500/40" />
          
          {/* Experience Items */}
          {experienceData.map((experience, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={experience.id}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-[#050709] z-10" />
              </div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                <motion.div 
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)'
                  }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300 shadow-lg group"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-lg bg-gray-800/50 overflow-hidden flex-shrink-0 shadow-inner group-hover:ring-2 ring-blue-500/20 transition-all duration-300">
                      <Image
                        src={experience.companyLogo}
                        alt={experience.company}
                        fill
                        className="object-cover p-2 filter brightness-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {experience.role}
                      </h3>
                      <p className="text-blue-400 font-medium">{experience.company}</p>
                    </div>
                  </div>
                  
                  {/* Duration & Location */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <FiCalendar className="w-4 h-4 text-blue-400" />
                      <span>{experience.duration}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <FiMapPin className="w-4 h-4 text-blue-400" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {experience.description}
                  </p>
                  
                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {experience.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-blue-400 mt-1">•</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Timeline End Point */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -bottom-6">
            <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-[#050709] z-10 flex items-center justify-center">
              <FiAward className="w-3 h-3 text-white" />
            </div>
            <div className="absolute w-10 h-10 rounded-full bg-blue-500/20 animate-ping" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;