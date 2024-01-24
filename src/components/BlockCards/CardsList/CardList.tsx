import styles from './CardsList.module.scss';
import { Card } from '../Card/Card';
import {ICardBlogProps} from '../Card/Card.props'
import useWindowSize from '../../../hooks/useWindowSize';
import { useState, useEffect } from 'react';

const CardsList = ({ blogCards }: { blogCards: ICardBlogProps[] }) => {
  const [count, setCount] = useState<number>(0);
  const width: number = useWindowSize();
  const getLimit = () => {
    if (width === 1024) {
      setCount(9);
    } else if (width < 1440) {
      setCount(8);
    } else {
      setCount(9);
    }
  };
  useEffect(() => {
    getLimit();
  }, [width]);

  return (
    <section className={styles.cardslist}>
      <ul className={styles.cardslist__container}>
        {blogCards.slice(0, count).map((card) => (
          <Card
            key={card.id}
            title={card.title}
            text={card.text}
            imgUrl={card.imgUrl}
            linkUrl={card.linkUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export { CardsList };
