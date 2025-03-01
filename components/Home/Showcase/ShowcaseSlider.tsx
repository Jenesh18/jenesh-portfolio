"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiAward, FiPackage, FiBook, FiFeather, FiExternalLink } from 'react-icons/fi'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IconType } from 'react-icons'

// Define types to match existing data structure
interface ShowcaseItem {
  id: number
  type: string
  title: string
  description: string
  image: string
  link?: string
  badges: string[]
  issuer?: string
  date?: string
  downloads?: string
  rating?: number
  students?: string
  publisher?: string
  readTime?: string
  status?: string
}

interface Props {
  items: ShowcaseItem[]
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 20
  }
}

const typeColors: Record<string, string> = {
  certificate: "from-gray-600 to-gray-700",
  npm: "from-gray-500 to-gray-600",
  course: "from-gray-700 to-gray-800",
  article: "from-gray-400 to-gray-500"
}

const typeIcons: Record<string, IconType> = {
  certificate: FiAward,
  npm: FiPackage,
  course: FiBook,
  article: FiFeather
}

const ShowcaseSlider: React.FC<Props> = ({ items }) => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all 800ms ease-in-out"
      containerClass="pb-12 pt-4"
      centerMode={true}
      arrows={true}
      swipeable={true}
      draggable={true}
    >
      {items.map((item, idx) => {
        const Icon = typeIcons[item.type]
        const gradientColors = typeColors[item.type]
        
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="px-4 py-2"
          >
            <div className="group relative rounded-xl">
              {/* Animated Background */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradientColors} rounded-xl opacity-30 group-hover:opacity-100 transition duration-500`} />
              
              <div className="relative bg-gray-800 rounded-xl overflow-hidden">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gray-700`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Dynamic Info Based on Type */}
                  <div className="flex items-center gap-4 mb-4">
                    {item.type === 'certificate' && item.issuer && item.date && (
                      <div className="flex items-center gap-4">
                        <span className="text-blue-400">{item.issuer}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{item.date}</span>
                      </div>
                    )}
                    {item.type === 'npm' && item.downloads && (
                      <span className="text-emerald-400 flex items-center gap-2">
                        {item.downloads} downloads
                      </span>
                    )}
                    {item.type === 'course' && item.rating && item.students && (
                      <div className="flex items-center gap-4">
                        <span className="text-yellow-400 flex items-center gap-1">
                          ★ {item.rating}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-purple-400">{item.students} students</span>
                      </div>
                    )}
                    {item.type === 'article' && item.publisher && item.readTime && (
                      <div className="flex items-center gap-4">
                        <span className="text-orange-400">{item.publisher}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{item.readTime} read</span>
                      </div>
                    )}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gray-600 text-white`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 text-white text-sm font-medium hover:opacity-90 transition-opacity`}
                    >
                      Learn more <FiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </Carousel>
  )
}

export default ShowcaseSlider 