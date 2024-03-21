import styles from "./Pagination.module.scss";
import Link from "next/link";
import classNames from "classnames";

type PaginationNextProps = {
  href: string;
  isDisabled?: boolean;
};

export const PaginationNext = ({ href, isDisabled }: PaginationNextProps) => (
  <li
    className={classNames(styles.pagination__item, styles.pagination__chevron, {
      [styles.pagination__chevron_disabled]: isDisabled,
    })}
  >
    {isDisabled ? null : (
      <Link
        aria-label={`Go to next page`}
        className={styles.pagination__link}
        href={href}
      />
    )}
  </li>
);
