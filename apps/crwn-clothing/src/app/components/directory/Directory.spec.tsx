import { render } from '@testing-library/react';

import Directory from './Directory';

describe('Directory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Directory />);
    expect(baseElement).toBeTruthy();
  });
});
