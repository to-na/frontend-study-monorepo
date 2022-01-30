import './collection-item.styles.scss';
import { ShopItem } from '../../pages/shop-page/shop.data';

export type CollectionItemProps = ShopItem;

const CollectionItem = (props: CollectionItemProps) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    />
    <div className="collection-footer">
      <span className="name">{props.name}</span>
      <span className="price">{props.price}</span>
    </div>
  </div>
);

export default CollectionItem;
