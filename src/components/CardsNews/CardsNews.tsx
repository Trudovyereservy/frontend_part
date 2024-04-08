import { cardsNewsMain } from '@/utils/constants';

import { Card } from './Card/Card'

import styles from './CardsNews.module.scss';

const CardsNews = () => (
    <section className={styles.cardnews}>
      <h2 className={styles.cardslist__title}>Пример текста</h2>
      <ul className={styles.cardslist__container}>
        {cardsNewsMain.map((card) => (
          <Card
            key={card.id}
            imgUrl={card.imgUrl}
            linkUrl={card.linkUrl}
            linkText={card.linkText}
          />
        ))}
      </ul>
    </section>
  );

export { CardsNews };
