// import React, { useEffect, useState } from 'react';

// const images = [
//     'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
//     'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww',
//      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww',
//       'https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2Zlc3Npb25hbCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
// ];
// export default function Carousel3D() {
//   const [activeIndex, setActiveIndex] = useState(2);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const goLeft = () => {
//     setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const goRight = () => {
//     setActiveIndex((prev) => (prev + 1) % images.length);
//   };

//   return (
//     <div className="relative w-full max-w-6xl h-[500px] mx-auto flex items-center justify-center overflow-hidden">
//       <button
//         onClick={goLeft}
//         className="absolute left-4 z-30 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
//       >
//         ◀
//       </button>
//       <button
//         onClick={goRight}
//         className="absolute right-4 z-30 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
//       >
//         ▶
//       </button>

//       <div className="relative flex items-center justify-center w-full h-full">
//         {images.map((src, i) => {
//           const offset = i - activeIndex;
//           const isActive = i === activeIndex;
//           const className = `absolute transition-transform duration-700 ease-in-out rounded-lg shadow-lg ${
//             isActive
//               ? 'z-30 scale-100 opacity-100'
//               : offset === -1
//               ? 'z-20 scale-95 opacity-80 -translate-x-[60%]'
//               : offset === 1
//               ? 'z-20 scale-95 opacity-80 translate-x-[60%]'
//               : 'z-10 scale-90 opacity-0'
//           }`;

//           return (
//             <img
//               key={i}
//               src={src}
//               alt={`slide-${i}`}
//               onClick={() => setActiveIndex(i)}
//               className={`${className} w-[300px] h-[400px] object-cover cursor-pointer`}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';

// const images = [
//     'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
//     'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww',
//      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww',
//       'https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2Zlc3Npb25hbCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
// ];

// export default function Carousel3D() {
//   const [activeIndex, setActiveIndex] = useState(2);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const goLeft = () => {
//     setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const goRight = () => {
//     setActiveIndex((prev) => (prev + 1) % images.length);
//   };

//   const getOffset = (i) => {
//     const diff = i - activeIndex;
//     if (diff === 0) return 0;
//     if (diff === 1 || (i === 0 && activeIndex === images.length - 1)) return 1;
//     if (diff === -1 || (i === images.length - 1 && activeIndex === 0)) return -1;
//     return diff;
//   };

//   return (
//     <div className="relative w-full max-w-6xl h-[500px] mx-auto flex items-center justify-center overflow-hidden">
//       <button
//         onClick={goLeft}
//         className="absolute left-4 z-30 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
//       >
//         ◀
//       </button>
//       <button
//         onClick={goRight}
//         className="absolute right-4 z-30 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
//       >
//         ▶
//       </button>

//       <div className="relative flex items-center justify-center w-full h-full">
//         {images.map((src, i) => {
//           const offset = getOffset(i);
//           const isActive = i === activeIndex;

//           const baseClass = 'absolute transition-transform duration-700 ease-in-out rounded-lg shadow-lg w-[300px] h-[400px] object-cover cursor-pointer';
//           const transformStyles =
//             offset === 0
//               ? 'z-30 scale-100 opacity-100'
//               : offset === -1
//               ? 'z-20 scale-90 opacity-80 -translate-x-[60%]'
//               : offset === 1
//               ? 'z-20 scale-90 opacity-80 translate-x-[60%]'
//               : 'z-10 scale-75 opacity-0';

//           return (
//             <img
//               key={i}
//               src={src}
//               alt={`slide-${i}`}
//               onClick={() => setActiveIndex(i)}
//               className={`${baseClass} ${transformStyles}`}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';

// const images = [
//     'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww',
//     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww',
//     'https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2Zlc3Npb25hbCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
//     "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// ];

// export default function Carousel3D() {
//   const [activeIndex, setActiveIndex] = useState(2);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const goLeft = () => {
//     setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const goRight = () => {
//     setActiveIndex((prev) => (prev + 1) % images.length);
//   };

//   const getOffset = (i) => {
//     const diff = i - activeIndex;
//     if (diff > images.length / 2) return diff - images.length;
//     if (diff < -images.length / 2) return diff + images.length;
//     return diff;
//   };

//   return (
//     <div className="relative w-full max-w-6xl h-[500px] mx-auto flex items-center justify-center overflow-hidden">
//       <button
//         onClick={goLeft}
//         className="absolute left-4 z-30 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
//       >
//         ◀
//       </button>
//       <button
//         onClick={goRight}
//         className="absolute right-4 z-30 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
//       >
//         ▶
//       </button>

//       <div className="relative flex items-center justify-center w-full h-full">
//         {images.map((src, i) => {
//           const offset = getOffset(i);
//           const absOffset = Math.abs(offset);

//           if (absOffset > 2) return null; // Only show front and 2 back on each side

//           let z = 30 - absOffset;
//           let scale = offset === 0 ? 1.1 : 0.8 - absOffset * 0.1;
//           let translateX = offset * 70;
//           let opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.2;

//           return (
//             <img
//               key={i}
//               src={src}
//               alt={`slide-${i}`}
//               onClick={() => setActiveIndex(i)}
//               className="absolute transition-all duration-700 ease-in-out rounded-lg shadow-lg w-[300px] h-[400px] object-cover cursor-pointer"
//               style={{
//                 transform: `translateX(${translateX}%) scale(${scale})`,
//                 zIndex: z,
//                 opacity
//               }}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2Zlc3Npb25hbCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
];

const team = [
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

export default function Carousel3D() {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % team.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goLeft = () => {
    setActiveIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const goRight = () => {
    setActiveIndex((prev) => (prev + 1) % team.length);
  };

  const getOffset = (i) => {
    const diff = i - activeIndex;
    if (diff > team.length / 2) return diff - team.length;
    if (diff < -team.length / 2) return diff + team.length;
    return diff;
  };

  return (
    <div className="relative w-full max-w-6xl h-[500px] mx-auto flex items-center justify-center overflow-hidden">
      {/* <button
        onClick={goLeft}
        className="absolute left-4 z-30 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
      >
        ◀
      </button>
      <button
        onClick={goRight}
        className="absolute right-4 z-30 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
      >
        ▶
      </button> */}
      <button
        onClick={goLeft}

        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white dark:bg-white/10 dark:hover:bg-white/20 text-primary dark:text-white p-2 rounded-full shadow-md transition"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goRight}

        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white dark:bg-white/10 dark:hover:bg-white/20 text-primary dark:text-white p-2 rounded-full shadow-md transition"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>

      <div className="relative flex items-center justify-center w-full h-full">
        {team?.map((src, i) => {
          const offset = getOffset(i);
          const absOffset = Math.abs(offset);

          if (absOffset > 2) return null;

          let z = 30 - absOffset;
          let scale = offset === 0 ? 1 : 0.85 - absOffset * 0.05;
          let translateX = offset * 65;
          let opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.2;

          return (
            <img
              key={i}
              src={src?.image}
              alt={`slide-${i}`}
              onClick={() => setActiveIndex(i)}
              className="absolute object-cover transition-all duration-700 ease-in-out rounded-lg shadow-lg w-[280px] h-[380px] cursor-pointer"
              style={{
                transform: `translateX(${translateX}%) scale(${scale})`,
                zIndex: z,
                opacity,
                left: '50%',
                transformOrigin: 'center center',
                transform: `translateX(-50%) translateX(${translateX}%) scale(${scale})`
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
