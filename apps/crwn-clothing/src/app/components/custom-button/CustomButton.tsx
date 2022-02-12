import React from 'react';

import './custom-button.styles.scss';

type CustomButtonProps = {
  children?: any;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: any;
};
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  type,
  ...otherProps
}: CustomButtonProps) => (
  <button
    type={type}
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    <span>{children}</span>
  </button>
);

export default CustomButton;
