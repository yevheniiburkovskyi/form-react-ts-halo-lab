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
  const renderOptions = () => {
    if (options.length === 0) {
      return <option value="">--Not Found--</option>;
    }

    return (
      <>
        <option value="">{`--Select ${title}--`}</option>
        {options.map((item) => (
          <option value={item.value} key={item.id}>
            {item.value}
          </option>
        ))}
      </>
    );
  };

  return (
    <FormFieldWrapper title={title} error={error}>
      <select
        id={name}
        className={`${error ? classes.select__error : ''} ${classes.select}`}
        {...register(name)}
      >
        {renderOptions()}
      </select>
    </FormFieldWrapper>
  );
};

export default CustomSelect;
