import { ReactNode } from 'react';

import css from './page.module.css';

type Props = {
  children?: ReactNode;
};

export const Page = ({ children }: Props) => {
  return <div className={css.container}>{children}</div>;
};
