import Link from 'next/link';
import { ILinksBlockProps } from './IlinksBlock.props';
import styles from './links.module.scss';
import { buttons }  from '../../utils/constans'

const LinksBlock = (links: ILinksBlockProps) => {
  return (
      <li className={styles.footer__list}>
      <Link className={styles.footer__list_item} href={links.linkUrl}>
        {links.linkText}
      </Link>
    </li>
  );
};
export { LinksBlock };