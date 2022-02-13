import React from 'react';

import { CustomButtonStyle } from './CustomButton.styles';

const CustomButton = ({ children, ...props }: any) => (
  <CustomButtonStyle {...props}>{children}</CustomButtonStyle>
);

export default CustomButton;
