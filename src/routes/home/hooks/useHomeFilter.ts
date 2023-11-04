import { useState } from 'react';

export type HomeFilter = {
  university: string | null;
  country: string | null;
  language: string | null;
  // restricted on typing duration by mantine. Proper type should be <"durationFilterOption" | null>
  duration: string | null;
  cost: string | null;
};

const DEFAULT_HOME_FILTER: HomeFilter = {
  university: '',
  country: '',
  language: '',
  duration: '',
  cost: '',
};

export const useHomeFilter = () => {
  const [filter, setFilter] = useState(DEFAULT_HOME_FILTER);

  return { filter, setFilter };
};
