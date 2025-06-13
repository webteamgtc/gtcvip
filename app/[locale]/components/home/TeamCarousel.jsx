'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import clsx from 'clsx';

const team = [
    { name: 'iPhone 16 Pro Max', image: '/apartment.webp' },
  { name: 'iPhone 16 Pro Max', image: '/pro/P-01.webp' },
  { name: 'iPhone 16 Pro Max', image: '/pro/P-02.webp' },
  { name: 'iPhone 16 Pro Max', image: '/pro/P-03.webp' },
  { name: 'iPhone 16 Pro Max', image: '/pro/P-04.webp' },
  { name: 'David Williams', image: '/pro/P-05.webp' },
  { name: 'David Williams', image: '/pro/P-06.webp' },
  { name: 'David Williams', image: '/pro/P-07.webp' },
  { name: 'David Williams', image: '/pro/P-08.webp' },
  { name: 'David Williams', image: '/pro/P-09.webp' },
  { name: 'David Williams', image: '/pro/P-10.webp' },
];

export default function TeamCarousel() { 
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto py-10 text-center">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={'auto'}
        centeredSlides={true}
        loop={true}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="pb-6"
      >
        {team.map((member, index) => (
          <SwiperSlide
            key={index}
            className="!w-[200px] md:!w-[250px] lg:!w-[300px] transition-all"
          >
            <div
              className={clsx(
                'rounded-2xl overflow-hidden transform transition duration-500',
                index === activeIndex
                  ? 'scale-110 grayscale-0 opacity-100 shadow-xl dark:shadow-[0_8px_30px_rgba(255,255,255,0.1)]'
                  : 'scale-90 grayscale opacity-20 shadow-md dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)]'
              )}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-46 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Arrows */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white dark:bg-white/10 dark:hover:bg-white/20 text-primary dark:text-white p-2 rounded-full shadow-md transition"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white dark:bg-white/10 dark:hover:bg-white/20 text-primary dark:text-white p-2 rounded-full shadow-md transition"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </Swiper>
    </div>
  );
}
