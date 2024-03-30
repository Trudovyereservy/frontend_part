import styles from './Pagination.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

type PaginationItemProps = {
  href: string;
  pageNumber: number;
  currentPage?: number;
};

export const PaginationItem = ({ href, pageNumber, currentPage }: PaginationItemProps) => {
  const isSelected = pageNumber === currentPage ? true : false;

  return (
    <li
      className={classNames(styles.pagination__item, {
        [styles.pagination__item_type_selected]: isSelected,
      })}
    >
      {isSelected ? (
        <span>{pageNumber}</span>
      ) : (
        <Link
          aria-label={`Go to page ${pageNumber}`}
          className={styles.pagination__link}
          href={href}
        >
          <span>{pageNumber}</span>
        </Link>
      )}
    </li>
  );
};