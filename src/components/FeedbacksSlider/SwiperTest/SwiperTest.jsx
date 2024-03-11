// import Swiper core and required modules
'use Client';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderPosts } from '../../../utils/constans';
import styles from './SwiperTest.module.scss';
import '../../../styles/globals.scss';


import './myswiper.scss';

export default () => {
  return (
    <>
      <h2 className={styles.feedbacks__title}>Пример текста</h2>
      <Swiper
        install
        Swiper
        // className="myslider"
        className={styles.myslider}
        // className="myslider"
        modules={[Pagination, Autoplay]}
        loop={true}
        slidesPerView={'auto'}
        initialSlide={1}
        // navigation
        // autoplay={{
        //   delay: 500,
        //   disableOnInteraction: true,
        // }}
        // speed={100}
        centeredSlides={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        spaceBetween={35}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 480px
          394: {
            slidesPerView: 'auto',
            spaceBetween: 35,
          },
          // when window width is >= 640px
          // 640: {
          //   slidesPerView: 4,
          //   spaceBetween: 40
          // }
        }}
      >
        {sliderPosts.map((item, index) => (
          <SwiperSlide key={index} className="myslide">
          {/* <SwiperSlide key={index} className={styles.myslide}> */}
            <p className={styles.feedbackCard__textPost}>{item.post}</p>
            <div className={styles.feedbackCard__about}>
              <p className={styles.feedbackCard__textName}>{item.name}</p>
              <p className={styles.feedbackCard__textDescription}>{item.description}</p>
            </div>
          </SwiperSlide>
          // );
        ))}
      </Swiper>
    </>
  );
};
