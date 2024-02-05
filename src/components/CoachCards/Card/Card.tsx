import Link from 'next/link';
import Image from 'next/image';
import { ICardCoachProps } from './Card.props';
import styles from './Card.module.scss';
import { coach } from '@/utils/constans';


// const Card = ({ name, directions, achievements, imgUrl, linkUrl }: ICardCoachProps) => {
const Card = () => {
  return (
    <li className={styles.card}>
      <div className={styles.card__image_wrapper}>
        <Image
          className={styles.card__image}
          src={coach.imgUrl}
          alt="Обложка новости"
          width={360}
          height={360}
        />
        <span className={styles.card__image_title}>Пример</span>
      </div>
      
        <h2 className={styles.card__title}>{coach.name}</h2>
        <p className={styles.card__text}>{coach.achievements}</p>
      
    </li>
  );
};
export { Card };