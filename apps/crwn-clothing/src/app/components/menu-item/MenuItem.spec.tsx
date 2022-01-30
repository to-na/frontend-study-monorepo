import { render } from '@testing-library/react';

import MenuItem from './MenuItem';

describe('MenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuItem title="SHIRTS" imageUrl="" />);
    expect(baseElement).toBeTruthy();
  });
});
