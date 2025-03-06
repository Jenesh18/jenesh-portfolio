"use client"
import Image from 'next/image';
import React from 'react'

// define a props type
type Skill = {
    id: number;
    title: string;
    image: string;
}

type Props = {
    skill: Skill
}

const SkillCard: React.FC<Props> = ({ skill }) => {
    const { image,  title } = skill
    return (
        <div className="flex flex-col items-center  hover:bg-blue-900 duration-300 transition-all justify-center bg-gray-800 rounded-lg p-4 h-40">
            <Image
             src={image}
             alt={title}
             width={80} 
             height={80}
             className='object-cover mx-auto'
             />
            <h1 className='text-[18px] mt-4 text-white font-[600]'>{title}</h1>
        </div>
    )
}

export default SkillCard