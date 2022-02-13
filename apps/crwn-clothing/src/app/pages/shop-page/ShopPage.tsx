import { Routes, Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection-page/CollectionPage';

import './shop-page.module.scss';

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route element={<CollectionsOverview />} path="" />
        <Route element={<CollectionPage />} path=":collectionId" />
      </Routes>
    </div>
  );
};

export default ShopPage;
