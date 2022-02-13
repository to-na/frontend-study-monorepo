import './menu-item.styles.scss';
import { useNavigate } from 'react-router-dom';
/* eslint-disable-next-line */
export interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
}

const MenuItem = ({ title, imageUrl, size, linkUrl }: any): any => {
  const navigate = useNavigate();
  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`)}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
