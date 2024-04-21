// getting an array with page numbers to display
function paginationRange(start: number, end: number) {
  const length = end - start + 1;

  return Array.from({ length }, (_, i) => i + start);
}

export { paginationRange };
