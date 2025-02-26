import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';

interface ProjectModalProps {
    project: any;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 rounded-xl overflow-hidden w-[95%] max-w-2xl max-h-[85vh] overflow-y-auto"
            >
                {/* Header Image */}
                <div className="relative h-56 w-full">
                    <Image
                        src={project.image || '/default-image.jpg'}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"/>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                        <FiX size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-5">
                    <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack?.map((tech: string, index: number) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                        <Link
                            href={project.liveUrl || '#'}
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-sm text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <FiExternalLink size={16} />
                            View Live
                        </Link>
                        <Link
                            href={project.githubUrl || '#'}
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-sm text-white rounded-lg hover:bg-gray-600 transition-colors"
                        >
                            <FiGithub size={16} />
                            Source Code
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal; 