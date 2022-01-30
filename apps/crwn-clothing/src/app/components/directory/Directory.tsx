import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';

type DirectoryProps = Record<string, never>;
type DirectoryState = {
  sections: Array<{
    title: string;
    imageUrl: string;
    id: number;
    size?: string;
  }>;
};
class Directory extends React.Component<DirectoryProps, DirectoryState> {
  constructor(props: DirectoryProps) {
    super(props);

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          id: 4,
          size: 'large',
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          id: 5,
          size: 'large',
        },
      ],
    };
  }

  override render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, size, id }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
