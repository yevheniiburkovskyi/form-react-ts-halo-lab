import React from 'react';
import { FieldError, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import InputMask from 'react-input-mask';

import FormFieldWrapper from '../../components/FormFieldWrapper/FormFieldWrapper';
import { IInputMasks, masks } from '../../utils/masks';

import classes from './CustomInput.module.scss';
import { IRegister } from '../../types/types';

interface IProps {
  title: string;
  name: keyof IRegister;
  register: UseFormRegister<IRegister>;
  error?: FieldError;
  setValue: UseFormSetValue<IRegister>;
}

const CustomInput: React.FC<IProps> = ({ title, name, register, error, setValue }) => {
  return (
    <FormFieldWrapper title={title} error={error}>
      <InputMask
        mask={name in masks ? masks[name as keyof IInputMasks].mask : ''}
        placeholder={name in masks ? masks[name as keyof IInputMasks].placeholder : ''}
        maskChar={null}
        type="text"
        id={name}
        className={
          (error && `${classes.field__input} ${classes.field__error}`) || classes.field__input
        }
        {...register(name)}
        onChange={(e) => setValue(name, e.target.value)}
      />
    </FormFieldWrapper>
  );
};

export default CustomInput;
