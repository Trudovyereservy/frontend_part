import styles from './CardsList.module.scss';
import { useMemo } from 'react';
import { Card } from '../Card/Card';
import { ICardBlogProps } from '../Card/Card.props';
import useWindowSize from '../../../hooks/useWindowSize';
import { useCardCount } from '../../../hooks/useCardCount';

const CardsList = ({ blogCards }: { blogCards: ICardBlogProps[] }) => {
  const width: number = useWindowSize();
  const count = useCardCount(width);

  const visibleCoachCards = useMemo(() => blogCards.slice(0, count), [blogCards, count]);

  return (
    <section className={styles.cardslist}>
      <ul className={styles.cardslist__container}>
        {visibleCoachCards.map((card) => (
          <Card
            title={card.title}
            shortDescription={card.shortDescription}
            imgUrl={card.imgUrl}
            linkUrl={card.linkUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export { CardsList };
