// getting an array with page numbers to display
function paginationRange(start: number, end: number) {
  const length = end - start + 1;

  return Array.from({ length }, (_, i) => i + start);
}

const paginationItemsDesktop = 5;
const paginationItemsMobile = 3;

export { paginationRange, paginationItemsDesktop, paginationItemsMobile };
