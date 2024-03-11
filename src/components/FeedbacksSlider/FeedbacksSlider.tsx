import styles from './FeedbacksSlider.module.scss';
import React, { useState, useEffect } from 'react';
import { ICarouselProps } from './FeedbacksSlider.props';
import classNames from 'classnames';
import  Swiper  from './SwiperTest/SwiperTest';

const Carousel = ({ posts }: ICarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [posts.length]);

  const goToPost = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
    <section className={styles.feedbacks__container}>
      <h2 className={styles.feedbacks__title}>Пример текста</h2>
      <div className={styles.feedbacks__carousel}>
        <div
          className={classNames(styles.feedbackCard__container, styles.feedbackCard__content_hidden)}
          onClick={() => goToPost((currentIndex - 1 + posts.length) % posts.length)}
        >
          <div className={classNames(styles.feedbackCard__content, styles.feedbackCard__content_onside)}>
          <p className={styles.feedbackCard__textPost}>
            {posts[(currentIndex - 1 + posts.length) % posts.length].post}
          </p>

          <div className={styles.feedbackCard__about}>
            <p className={styles.feedbackCard__textName}>
              {posts[(currentIndex - 1 + posts.length) % posts.length].name}
            </p>
            <p className={styles.feedbackCard__textDescription}>
              {posts[(currentIndex - 1 + posts.length) % posts.length].description}
            </p>
          </div>
          </div>
        </div>

        <div className={classNames(styles.feedbackCard__container, styles.feedbackCard__active)}>
          <div className={styles.feedbackCard__content}>
            <p className={styles.feedbackCard__textPost}>{posts[currentIndex].post}</p>

            <div className={styles.feedbackCard__about}>
              <p className={styles.feedbackCard__textName}>{posts[currentIndex].name}</p>
              <p className={styles.feedbackCard__textDescription}>
                {posts[currentIndex].description}
              </p>
            </div>
          </div>
        </div>

        <div
          className={styles.feedbackCard__container}
          onClick={() => goToPost((currentIndex + 1) % posts.length)}
        >
          <div className={classNames(styles.feedbackCard__content, styles.feedbackCard__content_onside)}>
          <p className={styles.feedbackCard__textPost}>
            {posts[(currentIndex + 1) % posts.length].post}
          </p>
          <div className={styles.feedbackCard__about}>
            <p className={styles.feedbackCard__textName}>
              {posts[(currentIndex + 1) % posts.length].name}
            </p>
            <p className={styles.feedbackCard__textDescription}>
              {posts[(currentIndex + 1) % posts.length].description}
            </p>
          </div>
          </div>
        </div>
      </div>

      <div className={classNames(styles.feedbacks__indicators, styles.feedbackCard__content_hidden)}>
        {posts.map((_, index) => (
          <span
            key={index}
            className={`${styles.feedbacks__indicator} ${
              currentIndex === index ? styles.feedbacks__indicator_active : ''
            }`}
            onClick={() => goToPost(index)}
          />
        ))}
      </div>
    </section>
    <Swiper />
    </>
  );
};

export default Carousel;
