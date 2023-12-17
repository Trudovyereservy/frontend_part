import Link from 'next/link';
import { ILinksProps } from './Ilinks.props';
// import styles from './links.module.scss';
import styles from '../Footer/footer.module.scss';
import { buttons }  from '../../utils/constans'
import { LinksBlock } from './LinksBlock';

const Links = (links: ILinksProps) => {
  return (
      <li className={styles.footer__list }>
        <h3 className={styles.footer__list_title}>{links.title}</h3>

        <ul className={styles.footer__list}>
              {buttons[0].map((link) => (
                <LinksBlock
                  key={link.id}
                  linkUrl={link.linkUrl}
                  linkText={link.linkText}
                />
              ))}
            </ul>

      {/* <Link className={styles.footer__list_item} href={links.linkUrl}>
        {links.linkText}
      </Link> */}
    </li>
  );
};
export { Links };