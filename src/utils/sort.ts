import { TSortBy } from 'src/types';

export const sort = (param: TSortBy) => (a: any, b: any) => {
  if (param === null) {
    return;
  }
  if (a[param] > b[param]) {
    return 1;
  }
  if (a[param] < b[param]) {
    return -1;
  }
  return 0;
};
