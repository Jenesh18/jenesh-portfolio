import React from 'react'
import ContactForm from './ContactForm'
import ContactDetail from './ContactDetail'

const Contact = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 w-[90%] mx-auto items-center mt-10'>
        {/* Contact Form */}
        <div 
         data-aos="fade-left" 
         data-aos-anchor-placement="top-center"
        >
          <ContactForm />
        </div>
        {/* Contact Info */}
        <div
         data-aos="fade-right" 
         data-aos-delay='100'
         data-aos-anchor-placement="top-center"
        >
          <ContactDetail />
        </div>
      </div>
    </div>
  )
}

export default Contact