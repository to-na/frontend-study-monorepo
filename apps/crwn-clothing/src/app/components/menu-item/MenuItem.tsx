import './menu-item.styles.scss';

/* eslint-disable-next-line */
export interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
}

export function MenuItem(props: MenuItemProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.imageUrl})`,
      }}
      className={`${props.size} menu-item`}
    >
      <div className="content">
        <h1 className="title">{props.title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
