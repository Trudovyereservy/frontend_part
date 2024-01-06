import Link from 'next/link';
import { ILinksHeaderProps } from './ILinksHeader.props';
import styles from '../header.module.scss';
import classNames from 'classnames';

const LinksHeader = (links: ILinksHeaderProps) => {
  return (
    <li className={styles.footer}>
      <Link className={classNames(styles.header__navitem, styles.header__navhidden)} href={links.href} >
        {links.title}
      </Link>
    </li>
  );
};
export { LinksHeader };