import * as React from 'react';

import styles from '@/components/Pagination/Pagination.module.scss';
import { useCardCount } from '@/hooks/useCardCount';
import useWindowSize from '@/hooks/useWindowSize';
import { BREAKPOINT_TABLET } from '@/utils/constResizeWindow';

import { PaginationArrow } from './PaginationArrow';
import { PaginationEllipsis } from './PaginationEllipsis';
import { PaginationItem } from './PaginationItem';

type PaginationItemProps = {
  totalCards: number;
  currentPage: number;
};

export const Pagination = ({ totalCards, currentPage }: PaginationItemProps) => {
  const width: number = useWindowSize();
  const cardsPerPage: number = useCardCount(width);

  const paginationItemsToDisplay = width > BREAKPOINT_TABLET ? 5 : 3;

  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const lastPage = totalPages;

  function renderPaginationItems() {
    // number of items to display before and after the current page
    const siblings = (paginationItemsToDisplay - 3) / 2;

    // getting an array with page numbers to display
    function range(start: number, end: number) {
      const length = end - start + 1;

      return Array.from({ length }, (_, i) => i + start);
    }

    // no dots are visible
    if (totalPages <= paginationItemsToDisplay) {
      return (
        <>
          {range(1, totalPages).map((page) => (
            <PaginationItem
              href={`?limit=${cardsPerPage}&page=${page}`}
              pageNumber={page}
              currentPage={currentPage}
              key={page}
            />
          ))}
        </>
      );
    }

    // only the left dots are visible
    if (totalPages > paginationItemsToDisplay && currentPage + siblings * 2 >= totalPages) {
      return (
        <>
          <PaginationItem href={`?limit=${cardsPerPage}&page=${1}`} pageNumber={1} />
          <PaginationEllipsis />
          {range(totalPages - (siblings * 2 + 1), totalPages).map((page) => (
            <PaginationItem
              href={`?limit=${cardsPerPage}&page=${page}`}
              pageNumber={page}
              currentPage={currentPage}
              key={page}
            />
          ))}
        </>
      );
    }

    // only the right dots are visible
    if (totalPages > paginationItemsToDisplay && currentPage <= siblings + 2) {
      return (
        <>
          {range(1, siblings * 2 + 2).map((page) => (
            <PaginationItem
              href={`?limit=${cardsPerPage}&page=${page}`}
              pageNumber={page}
              currentPage={currentPage}
              key={page}
            />
          ))}

          <PaginationEllipsis />
          <PaginationItem href={`?limit=${cardsPerPage}&page=${lastPage}`} pageNumber={lastPage} />
        </>
      );
    }

    // both the left and the right dots are visible
    if (totalPages > paginationItemsToDisplay && currentPage > siblings * 2 + 1) {
      return (
        <>
          <PaginationItem href={`?limit=${cardsPerPage}&page=${1}`} pageNumber={1} />
          <PaginationEllipsis />

          {range(currentPage - siblings, currentPage + siblings).map((page) => (
            <PaginationItem
              href={`?limit=${cardsPerPage}&page=${page}`}
              pageNumber={page}
              currentPage={currentPage}
              key={page}
            />
          ))}

          <PaginationEllipsis />
          <PaginationItem href={`?limit=${cardsPerPage}&page=${lastPage}`} pageNumber={lastPage} />
        </>
      );
    }
  }

  return (
    <nav role="navigation" aria-label="pagination" className={styles.pagination}>
      <ul className={styles.pagination__content}>
        <PaginationArrow
          href={`?limit=${cardsPerPage}&page=${currentPage - 1}`}
          currentPage={currentPage}
          direction="previous"
        />

        {renderPaginationItems()}

        <PaginationArrow
          href={`?limit=${cardsPerPage}&page=${currentPage + 1}`}
          currentPage={currentPage}
          lastPage={lastPage}
          direction="next"
        />
      </ul>
    </nav>
  );
};
