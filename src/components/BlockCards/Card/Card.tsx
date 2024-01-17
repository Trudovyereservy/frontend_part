import Link from 'next/link';
import Image from 'next/image';
import { ICardProps } from './Card.props';
import styles from './Card.module.scss';

const Card = ({ title, text, imgUrl }: ICardProps) => {
  return (
    <li className={styles.card}>
      <div className={styles.card__image_wrapper}>
        <Image
          className={styles.card__image}
          src={imgUrl}
          alt="Обложка новости"
          width={360}
          height={227}
        />
        <span className={styles.card__image_title}>Пример</span>
      </div>
      <h2 className={styles.card__title}>{title}</h2>
      <p className={styles.card__text}>{text}</p>
    </li>
  );
};
export { Card };
