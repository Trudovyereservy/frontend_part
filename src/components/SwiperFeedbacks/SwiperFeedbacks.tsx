'use сlient';

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SwiperPost } from './SwiperPost/SwiperPost';

import { ISwiperFeedbacksProps } from './SwiperFeedbacks.props';

import { config } from './configSwiper';

import styles from './SwiperFeedbacks.module.scss';
import '@/styles/globals.scss';
import './Myswiper.scss';

const SwiperFeedbacks = ({ sliderPosts }: ISwiperFeedbacksProps) => {
  return (
    <>
      <h2 className={styles.feedbacks__title}>Пример текста</h2>
      <Swiper
        className={styles.myslider}
        modules={[Pagination, Autoplay]}
        loop={config.loop}
        slidesPerView={config.slidesPerView}
        initialSlide={config.initialSlide}
        autoplay={config.autoplay}
        speed={config.speed}
        centeredSlides={config.centeredSlides}
        spaceBetween={config.spaceBetween}
        grabCursor={config.grabCursor}
        pagination={config.pagination}
        breakpoints={config.breakpoints}
      >
        {sliderPosts.map((item, description) => (
          <SwiperSlide key={description} className="myslide">
            <SwiperPost {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperFeedbacks;
