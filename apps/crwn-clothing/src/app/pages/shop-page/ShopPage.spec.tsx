import { render } from '@testing-library/react';

import ShopPage from './ShopPage';

describe('ShopPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShopPage />);
    expect(baseElement).toBeTruthy();
  });
});
