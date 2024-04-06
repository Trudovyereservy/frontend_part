'use client';

import {useMemo} from 'react';

import { Coach } from '@/api/generated/data-contracts'
import { Card } from '@/components/CoachCards/Card/Card';
import { useCardCount } from '@/hooks/useCardCount';
import useWindowSize from '@/hooks/useWindowSize';

import styles from './CoachList.module.scss';

interface ICoachListProps {
  coachCards: Coach[]
}

const CoachList: React.FC<ICoachListProps> = ({ coachCards }) => {
  const width: number = useWindowSize();
  const count = useCardCount(width);

  const visibleCoachCards = useMemo(() => coachCards.slice(0, count), [coachCards, count]);

  return (
    <section className={styles.cardslist}>
      <ul className={styles.cardslist__container}>
        {visibleCoachCards.map((card) => (
          <Card
            key={card.id}
            {...card}
          />
        ))}
      </ul>
    </section>
  );
};

export { CoachList };