import { useCardCount } from '@/hooks/useCardCount';
import useWindowSize from '@/hooks/useWindowSize';
import { BREAKPOINT_TABLET } from '@/utils/constResizeWindow';
import { paginationItemsDesktop, paginationItemsMobile } from '@/utils/pagination';

export default function usePagination(totalCards: number) {
  const width: number = useWindowSize();
  const cardsPerPage: number = useCardCount(width);

  const paginationItemsToDisplay =
    width > BREAKPOINT_TABLET ? paginationItemsDesktop : paginationItemsMobile;

  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const lastPage = totalPages;

  return { width, cardsPerPage, paginationItemsToDisplay, totalPages, lastPage };
}
