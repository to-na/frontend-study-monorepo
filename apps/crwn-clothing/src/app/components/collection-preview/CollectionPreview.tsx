import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item';
/* eslint-disable-next-line */
export type CollectionPreviewProps = {
  title: string;
  items: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }[];
};

export const CollectionPreview = (props: CollectionPreviewProps) => (
  <div className="collection-preview">
    <h1 className="title">{props.title.toUpperCase()}</h1>
    <div className="preview">
      {props.items
        .filter((_, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} id={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
