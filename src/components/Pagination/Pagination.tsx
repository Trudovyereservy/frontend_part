import * as React from 'react';

import styles from '@/components/Pagination/Pagination.module.scss';
import { useCardCount } from '@/hooks/useCardCount';
import useWindowSize from '@/hooks/useWindowSize';

import { PaginationEllipsis } from './PaginationEllipsis';
import { PaginationItem } from './PaginationItem';
import { PaginationNext } from './PaginationNext';
import { PaginationPrevious } from './PaginationPrevious';

type PaginationItemProps = {
  totalCards: number;
  currentPage: number;
};
//TODO Remove default values
export const Pagination = ({ totalCards = 117, currentPage = 3 }: PaginationItemProps) => {
  const width: number = useWindowSize();
  const cardsPerPage: number = useCardCount(width);

  const paginationItemsToDisplay = 5; //TODO Add to constants

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

    // both the left and the right dots are visible
    if (
      totalPages > paginationItemsToDisplay &&
      currentPage > siblings * 2 + 1 &&
      currentPage + siblings * 2 <= totalPages
    ) {
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

    // only the right dots are visible
    if (totalPages > paginationItemsToDisplay && currentPage < totalPages) {
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
  }

  return (
    <nav role="navigation" aria-label="pagination" className={styles.pagination}>
      <ul className={styles.pagination__content}>
        <PaginationPrevious
          href={`?limit=${cardsPerPage}&page=${currentPage - 1}`}
          currentPage={currentPage}
        />

        {renderPaginationItems()}

        <PaginationNext
          href={`?limit=${cardsPerPage}&page=${currentPage + 1}`}
          currentPage={currentPage}
          lastPage={lastPage}
        />
      </ul>
    </nav>
  );
};
