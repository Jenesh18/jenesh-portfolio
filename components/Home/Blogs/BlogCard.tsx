import Image from 'next/image';
import React from 'react';

// Define the props type
 type FeaturedWork = {
    id: number;
    type: string;
    title: string;
    description: string;
    highlights: string[];
    platform: string;
    link: string;
    image: string;
    badge: string;
};

type Props = {
  work: FeaturedWork;
}

const BlogCard = ({ work }: Props) => {
  const { title, description, highlights, platform, link, image, badge } = work;

  return (
    <div className='bg-indigo-950 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'>
      <Image src={image} alt={title} width={300} height={300} className='w-full h-[250px] object-cover' />
      
      <div className='p-6'>
        <span className='px-4 py-1.5 rounded-full text-sm font-semibold text-white' 
          style={{ backgroundColor: badge === 'Learning' ? '#3b82f6' : badge === 'Open Source' ? '#10b981' : '#f59e0b' }}>
          {badge}
        </span>
        
        <h1 className='sm:text-lg text-base cursor-pointer hover:text-gray-100 hover:underline transition-all duration-200 mt-4 mb-2 text-gray-200 font-bold'>{title}</h1>
        <p className='text-gray-400 text-sm font-semibold text-opacity-70'>{description}</p>
        
        <ul className='mt-3 text-gray-300 text-sm'>
          {highlights.map((point, index) => (
            <li key={index} className='flex items-center gap-2'>
              ✅ {point}
            </li>
          ))}
        </ul>
        
        <div className='mt-4 flex items-center justify-between'>
          <h1 className='text-sm text-gray-400 font-bold'>{platform}</h1>
          <a href={link} target='_blank' rel='noopener noreferrer' className='text-base hover:text-rose-500 text-gray-200 underline font-bold'>
            Explore →
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
