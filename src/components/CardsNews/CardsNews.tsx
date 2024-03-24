// import Link from 'next/link';
// import Image from 'next/image';
// import { ICardProps } from './Card.props';
import styles from './CardsNews.module.scss';
import { Card } from './Card/Card'
import { cardsNewsMain } from '@/utils/constants';

const CardsNews = () => {
  return (
    <section>
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
};

export { CardsNews };
