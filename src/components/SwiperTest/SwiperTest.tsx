// import Swiper core and required modules
"use сlient";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ISwiperTestProps } from "./SwiperTest.props";

import styles from "./SwiperTest.module.scss";
import "../../styles/globals.scss";
import "./myswiper.scss";

const SwiperTest = ({ sliderPosts }: ISwiperTestProps) => {
  return (
    <>
      <h2 className={styles.feedbacks__title}>Пример текста</h2>
      <Swiper
        className={styles.myslider}
        modules={[Pagination, Autoplay]}
        loop={true}
        slidesPerView={"auto"}
        initialSlide={1}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        speed={1000}
        centeredSlides={true}
        spaceBetween={35}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // customBreakpoints
          // when window width is >= 320px
          320: {
            slidesPerView: "auto",
            initialSlide: 0,
            spaceBetween: 30,
            loop: false,
          },
          // // when window width is >= 394px
          395: {
            slidesPerView: "auto",
            // slidesPerView: 2,
            initialSlide: 0,
            spaceBetween: 20,
          },
          // // when window width is >= 768px
          480: {
            slidesPerView: "auto",
            spaceBetween: 20,
            loop: true,
          },
          768: {
            initialSlide: 1,
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          // // when window width is >= 1024px
          880: {
            slidesPerView: "auto",
            spaceBetween: 15,
          },
          // // when window width is >= 1280px
          1024: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          // // when window width is >= 1440px
          1280: {
            spaceBetween: 34,
            slidesPerView: "auto",
          },
        }}
      >
        {sliderPosts.map((item, index) => (
          <SwiperSlide key={index} className="myslide">
            <p className={styles.feedbackCard__textPost}>{item.post}</p>
            <div className={styles.feedbackCard__about}>
              <p className={styles.feedbackCard__textName}>{item.name}</p>
              <p className={styles.feedbackCard__textDescription}>
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperTest;
