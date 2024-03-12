// import Swiper core and required modules
'use Client';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderPosts } from '../../../utils/constans';
import styles from './SwiperTest.module.scss';
import '../../../styles/globals.scss';
import './myswiper.scss';
import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_LAPTOP,
  BREAKPOINT_NETBOOK,
  BREAKPOINT_TABLET,
  BREAKPOINT_MOBILE,
  BREAKPOINT_MOBILE_MIN,
  // customBreakpoints
} from '../../../utils/constResizeWindow';

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
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        spaceBetween={35}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            // customBreakpoints
          // when window width is >= 320px
          // [BREAKPOINT_MOBILE_MIN]: {
          320: {
            // slidesPerView: 1,
            slidesPerView: 'auto',
            initialSlide: 0,
            spaceBetween: 30,
            loop:false,
          },
          // // when window width is >= 394px
          // [BREAKPOINT_MOBILE]: {
          395: {
            // slidesPerView: 'auto',
            slidesPerView: 2,
            spaceBetween: 31,
            loop:false,
          },
          // // when window width is >= 768px
          // [BREAKPOINT_TABLET]: {
          758: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          // // // when window width is >= 1024px
          // [BREAKPOINT_NETBOOK]: {
          880: {
            // slidesPerView: 4,
            spaceBetween: 40
          },
          // // when window width is >= 1280px
          // [BREAKPOINT_LAPTOP]: {
          1024: {
            // slidesPerView: 4,
            spaceBetween: 35
          },
           // // when window width is >= 1440px
          // [BREAKPOINT_DESKTOP]: {
          1280: {
            // slidesPerView: 4,
            // spaceBetween: 35
          }
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
