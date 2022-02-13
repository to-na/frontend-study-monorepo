import { HomePageStyle } from './HomePage.styles';
import Directory from '../../components/directory/Directory';
/* eslint-disable-next-line */
export interface HomePageProps {}

export const HomePage = (props: HomePageProps) => {
  return (
    <HomePageStyle>
      <Directory />
    </HomePageStyle>
  );
};

export default HomePage;
