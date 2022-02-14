import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import CollectionPage from '../collection-page/CollectionPage';

import './shop-page.module.scss';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component<any, any> {
  unsubscribeFromSnapshot = null as any;

  override componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
      }
    );
  }
  override render() {
    return (
      <div className="shop-page">
        <Routes>
          <Route element={<CollectionsOverview />} path="" />
          <Route element={<CollectionPage />} path=":collectionId" />
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
