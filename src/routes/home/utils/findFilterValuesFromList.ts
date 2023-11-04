import type { Application } from '../interfaces';

export const findFilterValuesFromList = (
  list: Application[],
  field: 'university' | 'country' | 'duration' | 'cost' | 'language'
) => {
  return list.reduce((acc, val) => {
    if (!acc.includes(val[field].toString())) {
      acc.push(val[field].toString());
    }

    return acc;
  }, [] as Array<string>);
};
