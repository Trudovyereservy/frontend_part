import Image from 'next/image';
import Link from 'next/link';

import { ISlideProps } from './Slide.props';

import styles from './Slide.module.scss';

const Slide = ({ imgUrl, linkUrl }: ISlideProps) => (
  <li >
    <Link href={linkUrl} className={styles.slide__link}>
      <Image
        className={styles.slide__image}
        src={imgUrl}
        alt="Картинка из жизни спортшколы"
        width={500}
        height={500}
      />
    </Link>
  </li>
);
export { Slide };
