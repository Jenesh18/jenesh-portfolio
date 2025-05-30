import SectionHeading from '@/components/Helper/SectionHeading'
import { blogs } from '@/Data/data'
import React from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <div className='pb-16 pt-16 bg-[#050709]'>
      <SectionHeading>Featured Work</SectionHeading>

      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center'>
        {blogs.map((blog, i) => {
          return (<div
            data-aos="zoom-in"
            data-aos-delay={`${i * 150}`}
            data-aos-anchor-placement="top-center"
            key={blog.id}>
            <BlogCard work={blog} />
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blogs