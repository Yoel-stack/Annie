'use client';

import Image from 'next/image';
import { Swiper as SwiperType } from 'swiper';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';

interface Props {
  images: string[];
  title: string;
};


export const SwiperS = ({ images, title }: Props) => {
  
  //Esto es un "Generic" en TypeScript
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null); 

  return (
    <div className=''>
      <div className="flex flex-row gap-6 sm:gap-4 w-full h-[280px] sm:h-[400px] md:h-[450px]">
        <div className="w-[75%] sm:w-[78%] md:w-[80%] h-full overflow-hidden rounded-lg">
          <Swiper
            spaceBetween={2}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {images.map((images) => (
              <SwiperSlide
                key={images}
                className="w-full h-full flex justify-center items-center"
              >
                <Image
                  width={1000}
                  height={1000}
                  // quality={100}
                  src={`/articles/${images}`}
                  alt={title}
                  className="rounded w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-[17%] sm:w-[22%] md:w-[20%] h-full overflow-hidden">
          <Swiper
            onSwiper={setThumbsSwiper}
            direction="vertical"
            spaceBetween={1}
            slidesPerView={7}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {images.map((images) => (
              <SwiperSlide
                key={images}
                className="w-full h-full rounded-md overflow-hidden"
              >
                <Image
                  width={300}
                  height={300}
                  src={`/articles/${images}`}
                  alt={title}
                  className="rounded cursor-pointer border hover:border-gray-400 transition-all object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
