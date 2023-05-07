import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import FormFieldWrapper from '../../components/FormFieldWrapper/FormFieldWrapper';
import { ISelectOption } from '../../types/types';
import { IRegister } from '../../types/types';

import classes from './CustomSelect.module.scss';

interface IProps {
  title: string;
  options: ISelectOption[];
  name: keyof IRegister;
  register: UseFormRegister<IRegister>;
  error?: FieldError;
}

const CustomSelect: React.FC<IProps> = ({ title, options, name, register, error }) => {
  return (
    <FormFieldWrapper title={title} error={error}>
      <select
        id={name}
        className={error ? `${classes.select__error} ${classes.select}` : classes.select}
        {...register(name)}
      >
        <option value="">--Select {title}--</option>
        {options.map((item) => (
          <option value={item.value} key={item.id}>
            {item.value}
          </option>
        ))}
      </select>
    </FormFieldWrapper>
  );
};

export default CustomSelect;
