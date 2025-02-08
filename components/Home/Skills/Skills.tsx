import SectionHeading from '@/components/Helper/SectionHeading'
import { skillsData } from '@/Data/data'
import React from 'react'
import SkillCard from './SkillCard'

export const Skills = () => {
    return (
        <div className='bg-[#0f0715] pt-16 pb-16'>
            {/* Skills */}
            <SectionHeading>My Skills</SectionHeading>
            <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center'>
              {skillsData.map((skill) => {
                return (
                  <div key={skill.id} className=''>
                   {/* Skill Card */}
                   <SkillCard skill={skill} />
                  </div>
                )
              })}
            </div>
        </div>
    )
}
