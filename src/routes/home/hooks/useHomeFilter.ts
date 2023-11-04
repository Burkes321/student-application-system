import { useState } from 'react';

// TODO: this is not a hook so we can remove it

type DurationFilterOptions =
  | ''
  | '1 year'
  | '2 years'
  | '3 years'
  | '4 years'
  | '5 years'
  | '6 years'
  | '7 years'
  | '8 years';

export type HomeFilter = {
  university: string | null;
  country: string | null;
  language: string | null;
  duration: DurationFilterOptions | null;
  // TODO: maybe convert the cost to a string
  cost: number | null;
};

const DEFAULT_HOME_FILTER: HomeFilter = {
  university: '',
  country: '',
  language: '',
  duration: '',
  cost: 0,
};

export const useHomeFilter = () => {
  const [filter, setFilter] = useState(DEFAULT_HOME_FILTER);

  return { filter, setFilter };
};
