import styles from './CoachList.module.scss';
import { Card } from '../Card/Card';
import { ICardCoachProps } from '../Card/Card.props';
import useWindowSize from '../../../hooks/useWindowSize';
import { useState, useEffect } from 'react';

const CoachList = ({ coachCards }: { coachCards: ICardCoachProps[] }) => {
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
        {coachCards.slice(0, count).map((card) => (
          <Card
            key={card.id}
            name={card.name}
            surname={card.surname}
            directions={card.directions}
            achievements={card.achievements}
            patronymic={card.patronymic}
            photo={card.photo}
          />
        ))}
      </ul>
    </section>
  );
};

export { CoachList };
