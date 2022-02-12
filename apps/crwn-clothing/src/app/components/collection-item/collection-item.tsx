import { connect } from 'react-redux';

import './collection-item.styles.scss';
import { ShopItem } from '../../pages/shop-page/shop.data';

import CustomButton from '../custom-button/CustomButton';
import { addItem } from '../../redux/cart/cart.actions';

export type CollectionItemProps = ShopItem;

const CollectionItem = ({ item, addItem }: any) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: ShopItem) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
