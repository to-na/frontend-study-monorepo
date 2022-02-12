import React from 'react';
import SignIn from '../sign-in/SignIn';

import './form-input.styles.scss';

type FormInputProps = {
  handleChange?: any;
  onChange?: any;
  type: 'text' | 'email' | 'password' | undefined;
  name?: string;
  label: string;
  value: string;
  required?: boolean;
};

const FormInput = ({
  handleChange,
  label,
  type,
  ...otherProps
}: FormInputProps) => (
  <div className="group">
    <input
      type={type}
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${
          otherProps['value'].length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
