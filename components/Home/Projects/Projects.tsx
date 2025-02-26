import SectionHeading from '@/components/Helper/SectionHeading'
import { projectData } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectModal from './ProjectModal'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    return (
        <div className='py-20 bg-[#050709]' id='projects'>
            <SectionHeading>My Projects</SectionHeading>
            
            <div className='container mx-auto px-4 max-w-7xl'>
                <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projectData.map((project, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            key={project.id}
                            className='group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300'
                        >
                            {/* Project Image with Overlay */}
                            <div className='relative h-48 overflow-hidden'>
                                <Image 
                                    src={project.image || '/default-image.jpg'}
                                    alt={project.title || 'Project Image'}
                                    fill
                                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60'/>
                            </div>

                            {/* Project Content */}
                            <div className='p-6 space-y-4'>
                                {/* Title */}
                                <h3 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300'>
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className='text-gray-400 text-sm line-clamp-2'>
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className='flex flex-wrap gap-2'>
                                    {(project.techStack || []).slice(0, 3).map((tech, index) => (
                                        <span 
                                            key={index}
                                            className='px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack?.length > 3 && (
                                        <span className='px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20'>
                                            +{project.techStack.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className='flex items-center justify-between pt-4'>
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className='flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors duration-300'
                                    >
                                        View Details
                                        <FiArrowRight className='w-4 h-4' />
                                    </button>
                                    <div className='flex items-center gap-4'>
                                        <Link 
                                            href={project.liveUrl || '#'}
                                            target='_blank'
                                            className='text-white hover:text-blue-400 transition-colors duration-300'
                                        >
                                            <FiExternalLink className='w-5 h-5' />
                                        </Link>
                                        <Link 
                                            href={project.githubUrl || '#'}
                                            target='_blank'
                                            className='text-white hover:text-blue-400 transition-colors duration-300'
                                        >
                                            <FiGithub className='w-5 h-5' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal 
                        project={selectedProject} 
                        onClose={() => setSelectedProject(null)} 
                    />
                )}
            </AnimatePresence>
        </div>
    )
}

export default Projects