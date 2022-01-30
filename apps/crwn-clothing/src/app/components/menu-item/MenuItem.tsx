import './menu-item.styles.scss';

/* eslint-disable-next-line */
export interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
}

export function MenuItem(props: MenuItemProps) {
  return (
    <div className={`${props.size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${props.imageUrl})`
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
