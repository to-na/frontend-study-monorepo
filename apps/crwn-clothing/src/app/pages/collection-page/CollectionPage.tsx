import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { selectCollections } from '../../redux/shop/shop.selector';
import './collection-page.styles.scss';

const CollectionPage = ({ collections }: any) => {
  const { collectionId }: any = useParams();
  console.log(collectionId);
  console.log(collections);
  const { title, items } = collections[collectionId];
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item: any) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionPage);
