import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import FormFieldWrapper from '../../FormFieldWrapper/FormFieldWrapper';
import { placeholders } from '../../../utils/input-utils';
import { IRegister, IInputPlaceholders } from '../../../types/types';

import classes from './CustomInput.module.scss';

interface IProps {
  title: string;
  name: keyof IRegister;
  register: UseFormRegister<IRegister>;
  error?: FieldError;
}

const CustomInput: React.FC<IProps> = ({ title, name, register, error }) => {
  const placeholder = name in placeholders ? placeholders[name as keyof IInputPlaceholders] : '';

  return (
    <FormFieldWrapper title={title} error={error}>
      <input
        type="text"
        id={name}
        placeholder={placeholder}
        className={`${classes.field__input} ${error ? classes.field__error : ''}`}
        {...register(name)}
      />
    </FormFieldWrapper>
  );
};

export default CustomInput;
