import React, { ReactNode } from 'react';

import { FieldError } from 'react-hook-form';

import classes from './FormFieldWrapper.module.scss';

interface IProps {
  children: ReactNode;
  title: string;
  error?: FieldError;
}

const FormFieldWrapper: React.FC<IProps> = ({ children, title, error }) => {
  return (
    <div className={classes.wrapper}>
      {' '}
      <label className={classes.field__label} htmlFor={title}>
        {title}
      </label>
      {children}
      {error && <p className={classes.wrapper__error}>{error.message}</p>}
    </div>
  );
};

export default FormFieldWrapper;
