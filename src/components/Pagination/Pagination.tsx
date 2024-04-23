import { useMemo } from 'react';

import styles from '@/components/Pagination/Pagination.module.scss';
import usePagination from '@/hooks/usePagination';

import { PaginationArrow } from './PaginationArrow';
import { PaginationEllipsis } from './PaginationEllipsis';
import { PaginationItem } from './PaginationItem';
import { PaginationList } from './PaginationList';

type PaginationItemProps = {
  totalCards: number;
  currentPage: number;
};

export const Pagination = ({ totalCards, currentPage }: PaginationItemProps) => {
  const { cardsPerPage, paginationItemsToDisplay, totalPages, lastPage } =
    usePagination(totalCards);

  // number of items to display before and after the current page
  const siblings = (paginationItemsToDisplay - 3) / 2;

  const ellipsisNotVisible = totalPages <= paginationItemsToDisplay;
  const ellipsisLeftVisible =
    totalPages > paginationItemsToDisplay && currentPage + siblings * 2 >= totalPages;
  const ellipsisRightVisible = totalPages > paginationItemsToDisplay && currentPage <= siblings + 2;
  const ellipsisLeftAndRightVisible =
    totalPages > paginationItemsToDisplay && currentPage > siblings * 2 + 1;

  function renderPaginationItems() {
    // no dots are visible
    if (ellipsisNotVisible) {
      return (
        <PaginationList
          start={1}
          end={totalPages}
          cardsPerPage={cardsPerPage}
          currentPage={currentPage}
        />
      );
    }

    // only the left dots are visible
    if (ellipsisLeftVisible) {
      return (
        <>
          <PaginationItem href={`?limit=${cardsPerPage}&page=${1}`} pageNumber={1} />
          <PaginationEllipsis />
          <PaginationList
            start={totalPages - (siblings * 2 + 1)}
            end={totalPages}
            cardsPerPage={cardsPerPage}
            currentPage={currentPage}
          />
        </>
      );
    }

    // only the right dots are visible
    if (ellipsisRightVisible) {
      return (
        <>
          <PaginationList
            start={1}
            end={siblings * 2 + 2}
            cardsPerPage={cardsPerPage}
            currentPage={currentPage}
          />

          <PaginationEllipsis />
          <PaginationItem href={`?limit=${cardsPerPage}&page=${lastPage}`} pageNumber={lastPage} />
        </>
      );
    }

    // both the left and the right dots are visible
    if (ellipsisLeftAndRightVisible) {
      return (
        <>
          <PaginationItem href={`?limit=${cardsPerPage}&page=${1}`} pageNumber={1} />
          <PaginationEllipsis />

          <PaginationList
            start={currentPage - siblings}
            end={currentPage + siblings}
            cardsPerPage={cardsPerPage}
            currentPage={currentPage}
          />

          <PaginationEllipsis />
          <PaginationItem href={`?limit=${cardsPerPage}&page=${lastPage}`} pageNumber={lastPage} />
        </>
      );
    }
  }

  const renderedItems = useMemo(() => renderPaginationItems(), [totalPages, currentPage]);

  return (
    <nav role="navigation" aria-label="pagination" className={styles.pagination}>
      <ul className={styles.pagination__content}>
        <PaginationArrow
          href={`?limit=${cardsPerPage}&page=${currentPage - 1}`}
          currentPage={currentPage}
          direction="previous"
        />

        {renderedItems}

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
