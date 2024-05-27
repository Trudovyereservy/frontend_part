'use client';

import React, { useState } from 'react';

import { Swiper as SwiperType } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { config } from './configSwiper';

import '@/styles/globals.scss';

import { ISwiperGalleryProps } from '../SwiperGallery/SwiperGallery.props';

import { SlidePreview } from './SlidePreview/SlidePreview';
import { Slide } from './SwiperSlide/Slide';
import useWindowSize from '@/hooks/useWindowSize';

import './Styles.scss';

export const SwiperGallery = ({ slidesSwiperGallery }: ISwiperGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const width = useWindowSize();
  return (
    <div className="wrapper">
      <Swiper
        loop={config.loop}
        spaceBetween={config.spaceBetween}
        navigation={config.navigation}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        centeredSlides={config.centeredSlides}
        breakpoints={config.breakpoints}
        className="mySwiper2"
      >
        {slidesSwiperGallery.map((item) => (
          <SwiperSlide className="mySwiper2__custom" key={item.id}>
            <Slide imgUrl={item.imgUrl} linkUrl={item.linkUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
      {width > 480 && (
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
      )}
    </div>
  );
};
