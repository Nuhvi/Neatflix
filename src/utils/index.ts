export const joinWithCol = (arr: [string]) => {
  if (arr.length === 1) return arr[0];
  return arr.join(" | ");
};
