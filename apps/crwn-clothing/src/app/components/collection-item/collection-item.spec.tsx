import { render } from '@testing-library/react';

import CollectionItem from './collection-item';

describe('CollectionItems', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CollectionItem id={0} name={''} imageUrl={''} price={0} />
    );
    expect(baseElement).toBeTruthy();
  });
});
