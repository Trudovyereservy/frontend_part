import styles from './CardsList.module.scss';
import { Card } from '../Card/Card';
import useWindowSize from '../../../hooks/useWindowSize';
import { useState, useEffect } from 'react';

// const CardsList = ({blogCards, count}) => {
const CardsList = ({ blogCards }) => {
  const [count, setCount] = useState(0);
  const width = useWindowSize();
  const getLimit = () => {
    if (width < 1024) {
      setCount(8);
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
            subtitle={card.subtitle}
            text={card.text}
            imgUrl={card.imgUrl}
            linkUrl={card.linkUrl}
            linkText={card.linkText}
          />
        ))}
      </ul>
    </section>
  );
};

export { CardsList };
