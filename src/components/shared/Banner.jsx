
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import Link from 'next/link';
import { Button } from '@heroui/react';

const images = [
  '/images/banner/banner-1.jpg',
  '/images/banner/banner-2.jpg',
  '/images/banner/banner-3.jpg',
  '/images/banner/banner-5.jpg',
];

const Banner = () => {
  return (
    <section className="relative max-w-8xl mx-auto  mb-5 md:mb-10 h-[60vh] overflow-hidden sm:h-[70vh] md:h-[80vh] lg:h-[90vh] font-inter">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1200}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="absolute inset-0 h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover   bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="flex h-full items-center bg-black/55">
                <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
                  <div className="text-left text-white">
                    <h1 className="font-inter font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl ">
                      Find Your <br />
                      <span className="text-[#F7971D]">Next Read</span>
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg lg:mt-6 lg:text-xl xl:text-2xl font-inter ">
                      Discover, borrow, and read your favorite books online — no
                      waiting, no late fees, just great stories at your
                      fingertips.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4 lg:mt-10">
                      <Link href="/">
                        <Button
                          color="primary"
                          className="bg-[#D97706] font-jetbrains-mono hover:bg-[#B45309] px-6 py-6 text-base lg:px-8 lg:text-lg font-bold"
                        >
                          Browse Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
