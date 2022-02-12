import React from 'react';
import SignIn from '../sign-in/SignIn';

import './form-input.styles.scss';

type FormInputProps = {
  handleChange: any;
  type: 'text' | 'email' | 'password' | undefined;
  label: string;
  value: string;
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
