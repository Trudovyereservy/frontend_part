'use client';

import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { ISwiperGalleryProps } from '../SwiperGallery/SwiperGallery.props';
import '@/styles/globals.scss';
import { Slide } from './SwiperSlide/Slide'
import { SlidePreview } from './SlidePreview/SlidePreview'

import './Styles.scss';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export const SwiperGallery = ({slidesSwiperGallery}:ISwiperGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='wrapper'>
      <Swiper
        loop={true}
        spaceBetween={30}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {slidesSwiperGallery.map((item) => (
          <SwiperSlide key={item.id}>
            <Slide imgUrl={item.imgUrl} linkUrl={item.linkUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={17}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {slidesSwiperGallery.map((item) => (
          <SwiperSlide key={item.id}>
            <SlidePreview imgUrl={item.imgUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}