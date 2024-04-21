import classNames from 'classnames';
import Link from 'next/link';

import styles from './Pagination.module.scss';

type PaginationArrowProps = {
  href: string;
  currentPage: number;
  lastPage?: number;
  direction: 'previous' | 'next';
};

export const PaginationArrow = ({
  href,
  currentPage,
  lastPage,
  direction,
}: PaginationArrowProps) => {
  const isNextDisabled = currentPage === lastPage;
  const isPreviousDisabled = currentPage === 1;
  const isDisabled =
    (isNextDisabled && direction === 'next') || (isPreviousDisabled && direction === 'previous');

  const chevronStyle =
    direction === 'next' ? styles.pagination__chevron : styles.pagination__chevronInverse;
  const chevronDisabledStyle =
    direction === 'next'
      ? styles.pagination__chevron_disabled
      : styles.pagination__chevronInverse_disabled;

  return (
    <li
      className={classNames(styles.pagination__item, chevronStyle, {
        [chevronDisabledStyle]: isDisabled,
      })}
    >
      {isDisabled ? null : (
        <Link
          aria-label={`Go to ${direction} page`}
          title={`Go to ${direction} page`}
          className={styles.pagination__link}
          href={href}
        />
      )}
    </li>
  );
};
