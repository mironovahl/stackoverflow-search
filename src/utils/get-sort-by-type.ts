import { TSearchItem, TSortBy } from 'src/types';

export const getSortByType = (param: TSortBy) => (
  a: TSearchItem,
  b: TSearchItem,
): number => {
  if (param === null) {
    return 0;
  }

  if (param === 'owner') {
    if (a.owner.displayName > b.owner.displayName) {
      return -1;
    }
    if (a.owner.displayName < b.owner.displayName) {
      return 1;
    }
  }

  if (a[param] > b[param]) {
    return -1;
  }
  if (a[param] < b[param]) {
    return 1;
  }
  return 0;
};
