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

  function renderPaginationItems() {
    // number of items to display before and after the current page
    const siblings = (paginationItemsToDisplay - 3) / 2;

    // no dots are visible
    if (totalPages <= paginationItemsToDisplay) {
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
    if (totalPages > paginationItemsToDisplay && currentPage + siblings * 2 >= totalPages) {
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
    if (totalPages > paginationItemsToDisplay && currentPage <= siblings + 2) {
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
    if (totalPages > paginationItemsToDisplay && currentPage > siblings * 2 + 1) {
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
