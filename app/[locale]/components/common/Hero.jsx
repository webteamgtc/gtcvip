'use client'
import { usePathname } from 'next/navigation';

const Hero = ({ imageUrl, title, description }) => {
  const path= usePathname();
  const isAr = path.includes('/ar');
  return (
    <div className='hero-section'>
      <div className='container md:py-12 3xl:py-16 py-8  border-b border-gray-300'>
        <div className='flex flex-row justify-between gap-4 items-center'>
          <div className={`content-side text-center ltr:text-left rtl:text-right`}>
            <h1 className='text-2xl lg:text-3xl text-primary  mb-3'>{title}</h1>
            <p className=' text-accent text-base max-w-xl'>{description}</p>
            
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
