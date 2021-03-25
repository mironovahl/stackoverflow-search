import { TSearchItem, TSortBy } from 'src/types';

export const sort = (param: TSortBy) => (
  a: TSearchItem,
  b: TSearchItem,
): number => {
  if (param === null) {
    return 0;
  }
  if (a[param] > b[param]) {
    return 1;
  }
  if (a[param] < b[param]) {
    return -1;
  }
  return 0;
};
