// getting an array with page numbers to display
function paginationRange(start: number, end: number) {
  const length = end - start + 1;

  return Array.from({ length }, (_, i) => i + start);
}

// number of pagination items to display depending on screen resolution
const paginationItemsDesktop = 5;
const paginationItemsMobile = 3;

export { paginationRange, paginationItemsDesktop, paginationItemsMobile };
