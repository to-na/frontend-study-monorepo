import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionPreview } from '../../components/collection-preview/CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }: any) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }: any) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
