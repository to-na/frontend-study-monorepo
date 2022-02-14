import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';

const WithSpinner = (WrappedComponent: any) => {
  const Spinner = ({ isLoading, ...otherProps }: any) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpinner;
