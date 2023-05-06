import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import FormFieldWrapper from '../../components/FormFieldWrapper/FormFieldWrapper';

import classes from './CustomInput.module.scss';
import { IRegister } from '../../types/types';

interface IProps {
  title: string;
  type: string;
  name: keyof IRegister;
  register: UseFormRegister<IRegister>;
  error?: FieldError;
}

const CustomInput: React.FC<IProps> = ({ title, type, name, register, error }) => {
  return (
    <FormFieldWrapper title={title} error={error}>
      <input
        type={type}
        id={name}
        className={
          (error && `${classes.field__input} ${classes.field__error}`) || classes.field__input
        }
        {...register(name)}
      />
    </FormFieldWrapper>
  );
};

export default CustomInput;
