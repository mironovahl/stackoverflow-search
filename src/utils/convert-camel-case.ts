import camelCase from 'lodash/camelCase';

export {};
const camelizeObject = <T extends Record<string, unknown>>(obj: T) => {
  const result = Object.keys(obj).reduce<Record<string, unknown>>(
    (acc, key) => {
      acc[camelCase(key)] = obj[key];
      return acc;
    },
    {},
  );

  return result;
};

export const convertCamelCase = <T extends unknown>(input: T) => {
  if (typeof input === 'string') {
    return camelCase(input);
  }

  return camelizeObject(input as Record<string, unknown>);
};
