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
  return (
    <FormFieldWrapper title={title} error={error}>
      <input
        type="text"
        id={name}
        placeholder={name in placeholders ? placeholders[name as keyof IInputPlaceholders] : ''}
        className={
          (error && `${classes.field__input} ${classes.field__error}`) || classes.field__input
        }
        {...register(name)}
      />
    </FormFieldWrapper>
  );
};

export default CustomInput;
