import Image from 'next/image';
import Link from 'next/link';

import { ISlideProps } from './Slide.props';

const Slide = ({ imgUrl, linkUrl }: ISlideProps) => (
  <li>
    <Link href={linkUrl}>
      <Image src={imgUrl} alt="Картинка из жизни спортшколы" width={500} height={500} />
    </Link>
  </li>
);
export { Slide };
