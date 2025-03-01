import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import { motion } from 'framer-motion'
import { showcaseItems } from '@/Data/data'
import ShowcaseSlider from './ShowcaseSlider'
import { FiAward, FiPackage, FiBook, FiFeather } from 'react-icons/fi'

const typeIcons = {
  certificate: FiAward,
  npm: FiPackage,
  course: FiBook,
  article: FiFeather
}

const Showcase = () => {
  return (
    <div className='py-20 bg-[#050709] relative overflow-hidden'>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 mix-blend-multiply" />
      </div>

      <div className="relative">
        <SectionHeading>Featured Work</SectionHeading>
        
        <div className='container mx-auto px-4 mt-20'>
          <ShowcaseSlider items={showcaseItems} />
        </div>
      </div>
    </div>
  )
}

export default Showcase 