import Link from 'next/link';
import Image from 'next/image';
import { ICardNewsMainProps } from './Card.props';
import styles from './Card.module.scss';

// const Card = ({ title, subtitle, text, imgUrl, linkUrl, linkText }: ICardProps) => {
const Card = ({ imgUrl, linkUrl, linkText }: ICardNewsMainProps) => {
  return (
    <li className={styles.card}>
      <Image
        className={styles.card__image}
        src={imgUrl}
        alt="Обложка новости"
        width={270}
        height={270}
      />
      <Link className={styles.card__link} href={linkUrl}>
        {linkText}
      </Link>
    </li>
  );
};
export { Card };
