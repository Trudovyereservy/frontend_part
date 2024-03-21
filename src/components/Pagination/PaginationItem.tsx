import styles from "./Pagination.module.scss";
import Link from "next/link";
import classNames from "classnames";

type PaginationItemProps = {
  href: string;
  isSelected?: boolean;
  itemText?: string;
};

export const PaginationItem = ({
  href,
  isSelected,
  itemText = "#",
}: PaginationItemProps) => (
  <li
    className={classNames(styles.pagination__item, {
      [styles.pagination__item_type_selected]: isSelected,
    })}
  >
    <Link
      //TODO Update page # to use props
      aria-label={`Go to page ${href}`}
      className={styles.pagination__link}
      href={href}
    >
      <span>{itemText}</span>
    </Link>
  </li>
);
