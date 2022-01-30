import './homepage.styles.scss';

import Directory from '../../components/directory/Directory';
/* eslint-disable-next-line */
export interface HomePageProps {}

export const HomePage = (props: HomePageProps) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
