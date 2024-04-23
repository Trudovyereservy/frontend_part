import { paginationRange } from '@/utils/pagination';

import { PaginationItem } from './PaginationItem';

type PaginationListProps = {
  start: number;
  end: number;
  cardsPerPage: number;
  currentPage: number;
};

export const PaginationList = ({
  start,
  end,
  cardsPerPage,
  currentPage,
}: PaginationListProps) => (
  <>
    {paginationRange(start, end).map((page) => (
      <PaginationItem
        href={`?limit=${cardsPerPage}&page=${page}`}
        pageNumber={page}
        currentPage={currentPage}
        key={page}
      />
    ))}
  </>
);
