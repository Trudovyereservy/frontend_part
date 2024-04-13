
'use client';

import { useState, useEffect } from 'react';

import { cardsNewsMain } from '@/utils/constants';

import { Card } from './Card/Card'

import styles from './CardsNews.module.scss';

const CardsNews = () => {
const [visibleCards, setVisibleCards] = useState(cardsNewsMain);
useEffect(() => {
  const resizeListener = () => {
    setVisibleCards(window.innerWidth > 394 ? cardsNewsMain : cardsNewsMain.slice(0, 3));
  };
  resizeListener();
  window.addEventListener('resize', resizeListener);
  return () => {
    window.removeEventListener('resize', resizeListener);
  };
}, []);

return (
    <section className={styles.cardnews}>
      <h2 className={styles.cardslist__title}>Пример текста</h2>
      <ul className={styles.cardslist__container}>
        {visibleCards.map((card) => (
          <Card
            key={card.id}
            imgUrl={card.imgUrl}
            linkUrl={card.linkUrl}
            linkText={card.linkText}
          />
        ))}
      </ul>
    </section>
)};

export { CardsNews };
