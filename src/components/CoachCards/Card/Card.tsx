'use client';

import { useState } from 'react';

import classNames from 'classnames';
import Image from 'next/image';

import { Coach } from '@/api/generated/data-contracts';

import { ICardCoachProps } from './Card.props';

import styles from './Card.module.scss';

const Card: React.FC<Coach> = ({ photo, name, surname, directions, achievements, patronymic }) => {
  const [openInfo, setOpenInfo] = useState(true);

  function openCard() {
    setOpenInfo((prevState) => !prevState);
  }

  return (
    <li className={styles.card}>
      <div className={styles.card__photo_wrapper}>
        <Image
          className={styles.card__image}
          src={photo || ''}
          alt='Фотография тренера'
          width={360}
          height={360}
        />
        <button
          className={classNames(styles.card__info_additional, {
            [styles.card__info_additional_active]: !openInfo,
          })}
          onClick={openCard}
        ></button>
      </div>
      {openInfo ? (
        <div className={styles.card__info}>
          <h3 className={styles.card__name}>{surname}</h3>
          <h3 className={styles.card__name}>{name}</h3>
          <h3 className={styles.card__name}>{patronymic}</h3>
          {directions.map(({ id, title }) => (
            <p className={styles.card__directions} key={id}>
              {title}
            </p>
          ))}
        </div>
      ) : (
        <p className={styles.card__achievements}>{achievements}</p>
      )}
    </li>
  );
};
export { Card };
