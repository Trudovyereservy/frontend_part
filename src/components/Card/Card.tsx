import Link from 'next/link';
import Image from 'next/image';
import { ICardProps } from './Card.props';
import styles from './card.module.scss';

const Card = (card: ICardProps) => {
  return (
    <li className={styles.card}>
      <Image
        className={styles.card__image}
        src={card.imgUrl}
        alt="Обложка новости"
        width={360}
        height={210}
      />
      <h2 className={styles.card__title}>{card.title}</h2>
      <h3 className={styles.card__subtitle}>{card.subtitle}</h3>
      <p className={styles.card__text}>{card.text}</p>
      <Link className={styles.card__link} href={card.linkUrl}>
        {card.linkText}
      </Link>
    </li>
  );
};
export { Card };
