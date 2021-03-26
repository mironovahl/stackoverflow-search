import camelCase from 'lodash/camelCase';

export const convertToCamelCase = <T extends Record<string, any>>(obj: T) => {
  const result = Object.keys(obj).reduce<T>((acc, key) => {
    let value = obj[key];

    const camelKey = camelCase(key) as keyof T;

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      value = convertToCamelCase(value as T);
    }

    acc[camelKey] = value;

    return acc;
  }, {} as T);

  return result;
};
