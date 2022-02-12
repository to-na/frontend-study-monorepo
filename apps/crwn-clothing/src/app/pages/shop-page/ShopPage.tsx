import React from 'react';
import './shop-page.module.scss';
import SHOP_DATA from './shop.data';
import { ShopData } from './shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

type ShopPageProps = Record<string, never>;
type ShopPageState = {
  collections: ShopData[];
};

class ShopPage extends React.Component<ShopPageProps, ShopPageState> {
  constructor(props: ShopPageProps) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  override render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
