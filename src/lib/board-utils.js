export const getBoardIndexFromCoords = (x, y) => {
  return (x - 1) + 8 * (y - 1)
};
