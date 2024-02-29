import {useMemo} from 'react';
import styles from './CoachList.module.scss';
import { Card } from '../Card/Card';
import { ICardCoachProps } from '../Card/Card.props';
import useWindowSize from '../../../hooks/useWindowSize';
import { useCardCount } from '../../../hooks/useCardCount';

const CoachList = ({ coachCards }: { coachCards: ICardCoachProps[] }) => {
  const width: number = useWindowSize();
  const count = useCardCount(width);

  const visibleCoachCards = useMemo(() => coachCards.slice(0, count), [coachCards, count]);

  return (
    <section className={styles.cardslist}>
      <ul className={styles.cardslist__container}>
        {visibleCoachCards.map((card) => (
          <Card
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