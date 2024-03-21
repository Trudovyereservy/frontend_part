import styles from "./Pagination.module.scss";
import Link from "next/link";
import classNames from "classnames";

type PaginationPreviousProps = {
  href: string;
  isDisabled?: boolean;
};

export const PaginationPrevious = ({
  href,
  isDisabled,
}: PaginationPreviousProps) => (
  <li
    className={classNames(
      styles.pagination__item,
      styles.pagination__chevronInverse,
      {
        [styles.pagination__chevronInverse_disabled]: isDisabled,
      },
    )}
  >
    {isDisabled ? null : (
      <Link
        aria-label={`Go to previous page`}
        className={styles.pagination__link}
        href={href}
      />
    )}
  </li>
);
