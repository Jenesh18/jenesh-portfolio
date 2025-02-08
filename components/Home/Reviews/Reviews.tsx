import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Slider from './Slider'

const Reviews = () => {
    return (
        <div className='pt-16 pb-16 bg-[#050709]'>
            {/*Section Heading*/}
            <SectionHeading>Clients Reviews</SectionHeading>
            <div className='w-[90%] sm:w-[80%] mx-auto mt-20'>
              {/* Review Card Slider */}
              <Slider />
            </div>
        </div>
    )
}

export default Reviews