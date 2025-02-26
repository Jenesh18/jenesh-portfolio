import React, { ReactNode } from 'react'

// define a props type
type Props = {
    children: ReactNode
}

const SectionHeading = ({ children }: Props) => {
    return (
        <h1 className='relative w-fit mx-auto px-6 py-4 text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase
            bg-gradient-to-r from-blue-600 to-purple-600 
            hover:from-blue-500 hover:to-purple-500
            transform -rotate-3 hover:-rotate-6
            transition-all duration-300 ease-in-out
            shadow-lg hover:shadow-xl
            rounded-sm
            before:content-[""] before:absolute before:inset-0 
            before:bg-white before:opacity-10 before:transform before:skew-x-12'>
            {children}
        </h1>
    )
}

export default SectionHeading