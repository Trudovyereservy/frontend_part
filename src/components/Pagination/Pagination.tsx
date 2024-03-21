import * as React from "react";
import styles from "./Pagination.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { PaginationPrevious } from "./PaginationPrevious";
import { PaginationNext } from "./PaginationNext";
import { PaginationItem } from "./PaginationItem";
import { PaginationEllipsis } from "./PaginationEllipsis";

export const Pagination = ({}) => (
  <nav
    role="navigation"
    aria-label="pagination"
    // className={}
  >
    <ul className={styles.pagination__content}>
      <PaginationPrevious href="#" isDisabled />
      <PaginationItem href="#" />
      <PaginationItem href="#" isSelected />
      <PaginationItem href="#" />
      <PaginationEllipsis />
      <PaginationItem href="#" />
      <PaginationNext href="#" />
    </ul>
  </nav>
);
