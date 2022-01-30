import { render } from '@testing-library/react';

import CollectionPreview from './CollectionPreview';

describe('CollectionPreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CollectionPreview title={''} items={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
