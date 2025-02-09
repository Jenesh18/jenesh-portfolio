import Image from 'next/image';
import React from 'react';

// define a props type
type Blog = {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
};

type Props = {
  blog: Blog;
}

const BlogCard = ({blog}: Props) => {
    const { title, summary, date, image } = blog;
  return (
    <div className='bg-indigo-950 rounded-md overflow-hidden'>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className='w-full h-[250px] object-cover'
         />
        <div className='p-6'>
            <p className='rounded-sm px-6 py-1.5 bg-rose-500 text-white w-fit'>News</p>
            <h1 className='sm:text-lg text-base cursor-pointer hover:text-gray-100 hover:underline transition-all duration-200 mt-6 mb-2 text-gray-200 leading-[1.6rem] font-bold'>{title}</h1>
            <p className='text-gray-400 text-sm font-semibold text-opacity-70'>{summary}</p>
            <div className='mt-4 mb-4 w-full h-1[1.5x] bg-gray-400 opacity-45'></div>
            <div className='flex items-center justify-between'>
                <h1 className='text-sm text-gray-400 font-bold'>{date}</h1>
                <button className='text-base hover:text-rose-500 text-gray-200 underline font-bold'>Read more</button>
            </div>
        </div>
    </div>
  )
}

export default BlogCard