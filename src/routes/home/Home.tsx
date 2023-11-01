import { APPLICATIONS } from './const';
import css from './home.module.css';

import { Page } from '../../components/page/Page';

console.log('🚀 ~ file: Home.tsx:6 ~ APPLICATIONS:', APPLICATIONS);

export const Home = () => {
  return (
    <Page>
      <div className={css.container}>Home page here</div>
    </Page>
  );
};
