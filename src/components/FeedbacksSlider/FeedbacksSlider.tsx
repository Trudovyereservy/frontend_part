import styles from './FeedbacksSlider.module.scss';
import React, { useState, useEffect } from 'react';
import { ICarouselProps } from './FeedbacksSlider.props';
import classNames from 'classnames';

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
    <section className={styles.feedbacks__container}>
      <h2 className={styles.feedbacks__title}>Пример текста</h2>
      <div className={styles.feedbacks__carousel}>
        <div
          className={styles.feedbackCard__container}
          onClick={() => goToPost((currentIndex - 1 + posts.length) % posts.length)}
        >
          {posts[(currentIndex - 1 + posts.length) % posts.length].post}

          <div className={styles.feedbackCard__about}>
            <p className={styles.feedbackCard__textName}>
              {posts[(currentIndex - 1 + posts.length) % posts.length].name}
            </p>
            <p className={styles.feedbackCard__textDescription}>
              {posts[(currentIndex - 1 + posts.length) % posts.length].description}
            </p>
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
          {posts[(currentIndex + 1) % posts.length].post}

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

      <div className={styles.feedbacks__indicators}>
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
  );
};

export default Carousel;
