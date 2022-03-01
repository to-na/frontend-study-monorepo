import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection-page/CollectionPage';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import './shop-page.module.scss';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component<any, any> {
  override componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  override render() {
    const { isCollectionFetching, isCollectionsLoaded } = this.props;
    return (
      <div className="shop-page">
        <Routes>
          <Route
            element={
              <CollectionsOverviewWithSpinner
                isLoading={isCollectionFetching}
              />
            }
            path=""
          />
          <Route
            element={
              <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} />
            }
            path=":collectionId"
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
