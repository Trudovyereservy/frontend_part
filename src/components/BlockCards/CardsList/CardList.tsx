import { useMemo } from 'react';

import { useCardCount } from '../../../hooks/useCardCount';
import useWindowSize from '../../../hooks/useWindowSize';
import { Card } from '../Card/Card';
import { ICardBlogProps } from '../Card/Card.props';

import styles from './CardsList.module.scss';

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
