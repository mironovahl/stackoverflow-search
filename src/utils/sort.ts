import { TSearchItem, TSortBy } from 'src/types';

export const sort = (param: TSortBy) => (
  a: TSearchItem,
  b: TSearchItem,
): number => {
  if (param === null) {
    return 0;
  }

  if (param === 'owner') {
    if (a.owner.display_name > b.owner.display_name) {
      return -1;
    }
    if (a.owner.display_name < b.owner.display_name) {
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
