'use client'
import React, { useRef, useEffect } from 'react';
import { MdOutlineOndemandVideo } from "react-icons/md";
import { TbDeviceMobileMessage } from "react-icons/tb";

const LiveAccountVideo = () => {
  // URL for the videos
  const videoUrl = "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/videos/GTC+multitrade_account+opening.mp4";
  const videoUrl2 = "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/videos/GTC+multitrade_account+opening_IOS+system.mp4";

  // Refs for both video elements
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  // Effect to start videos from 2 seconds
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 2;
    }
    if (videoRef2.current) {
      videoRef2.current.currentTime = 4; 
    }
  }, []);

  return (
    <section className="py-10">
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* First Video Column */}
          <div className='w-full'>
            <div className='flex flex-row items-center justify-start gap-2 md:mb-6'>
                <p className='text-secondary text-4xl md:text-5xl'><MdOutlineOndemandVideo /></p>
                <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-semibold xl:text-3xl 2xl:text-[30px] capitalize">
                  For Desktop
                </h2>
            </div>
            <video width="100%" controls poster="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/videos/desktop.webp" ref={videoRef}>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Second Video Column */}
          <div className='w-full'>
            <div className='flex flex-row items-center justify-start gap-2 md:mb-6'>
                <p className='text-secondary text-4xl md:text-5xl'><TbDeviceMobileMessage /></p>
                <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-semibold xl:text-3xl 2xl:text-[30px] capitalize">
                  For Mobile
                </h2>
            </div>
            <video width="100%" controls poster="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/videos/desktop.webp" ref={videoRef2}>
              <source src={videoUrl2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveAccountVideo;
