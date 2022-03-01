import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverview.container';
import CollectionPageContainer from '../collection-page/CollectionPage.container';

import './shop-page.module.scss';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component<any, any> {
  override componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  override render() {
    return (
      <div className="shop-page">
        <Routes>
          <Route element={<CollectionsOverviewContainer />} path="" />
          <Route element={<CollectionPageContainer />} path=":collectionId" />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
