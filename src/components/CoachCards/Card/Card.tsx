import Link from 'next/link';
import Image from 'next/image';
import { ICardCoachProps } from './Card.props';
import styles from './Card.module.scss';
import { coach } from '@/utils/constans';
import { useState } from 'react';

// const Card = ({ name, directions, achievements, imgUrl, linkUrl }: ICardCoachProps) => {
  const Card = () => {
    const [openInfo, setOpenInfo] = useState(true);
    
    function openCard() {
    setOpenInfo(!openInfo);
  }

  return (
    <li className={styles.card}>
      <div className={styles.card__photo_wrapper}>
        <Image
          className={styles.card__image}
          src={coach.photo}
          alt="Фотография тренера"
          width={360}
          height={360}
        />
        <button className={styles.card__info_additional} onClick={openCard}></button>
      </div>
      {openInfo ? 
      <div className={styles.card__info}>
        <h3 className={styles.card__name}>{coach.surname}</h3>
        <h3 className={styles.card__title}>{coach.name}</h3>
        <h3 className={styles.card__title}>{coach.patronymic}</h3>
        <p className={styles.card__directions}>{coach.directions}</p>
      </div> : 
      <p className={styles.card__achievements}>{coach.achievements}</p>
      }
    </li>
  );
};
export { Card };