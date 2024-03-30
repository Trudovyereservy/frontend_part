import styles from './Pagination.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

type PaginationNextProps = {
  href: string;
  currentPage: number;
  lastPage: number;
};

export const PaginationNext = ({ href, currentPage, lastPage }: PaginationNextProps) => {
  const isDisabled = currentPage === lastPage ? true : false;

  return (
    <li
      className={classNames(styles.pagination__item, styles.pagination__chevron, {
        [styles.pagination__chevron_disabled]: isDisabled,
      })}
    >
      {isDisabled ? null : (
        <Link aria-label={`Go to next page`} className={styles.pagination__link} href={href} />
      )}
    </li>
  );
};
