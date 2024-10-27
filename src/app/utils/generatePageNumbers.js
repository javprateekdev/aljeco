export const generatePageNumbers = (totalPages, siblingCount, currentPage) => {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPages <= totalPageNumbers) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const startPages = [1, 2];
  const endPages = [totalPages - 1, totalPages];
  const middleRange = [];

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 3);
  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPages - 2
  );

  if (leftSiblingIndex > 3) {
    middleRange.push("...");
  }

  for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
    middleRange.push(i);
  }

  if (rightSiblingIndex < totalPages - 2) {
    middleRange.push("...");
  }

  return [...startPages, ...middleRange, ...endPages];
};
