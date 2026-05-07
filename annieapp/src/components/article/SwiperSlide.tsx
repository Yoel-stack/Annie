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
    <div className='flex flex-row h-[60vh] min-h-[600px] w-full'>
      <div className='w-[80%]'>

      <Swiper
        spaceBetween={5}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((images) => (
          <SwiperSlide key={images} className='p-1'>
            <Image
              width={200}
              height={200}
              src={`/articles/${images}`}
              alt={title}
              className="rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className=''>

      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        >
        {images.map((images) => (
          <SwiperSlide key={images} className='p-1'>
            <Image
              width={200}
              height={200}
              src={`/articles/${images}`}
              alt={title}
              className="rounded cursor-pointer border hover:border-gray-400 transition-all"
              />
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </div>
  );
}
