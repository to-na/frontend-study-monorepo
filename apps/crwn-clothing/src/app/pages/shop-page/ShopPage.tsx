import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import CollectionPage from '../collection-page/CollectionPage';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import './shop-page.module.scss';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component<any, any> {
  override state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null as any;

  override componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }
  override render() {
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Routes>
          <Route
            element={<CollectionsOverviewWithSpinner isLoading={loading} />}
            path=""
          />
          <Route
            element={<CollectionPageWithSpinner isLoading={loading} />}
            path=":collectionId"
          />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  updateCollections: (collectionsMap: any) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
