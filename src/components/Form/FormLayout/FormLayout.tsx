import React from 'react';
import { useFormContext } from 'react-hook-form';

import { CustomButton, CustomInput, CustomSelect, MaskedInput, genderArr } from '..';
import { IFilteredOptions } from '../../../hooks/useFilterOptions';
import { IRegister } from 'types/types';

interface IProps {
  options: IFilteredOptions;
}

const FormLayout: React.FC<IProps> = ({ options }) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext<IRegister>();
  return (
    <>
      <CustomInput title="Name" name="name" register={register} error={errors.name} />
      <MaskedInput
        title="Birthday Date"
        name="birthday"
        register={register}
        error={errors.birthday}
        setValue={setValue}
      />
      <CustomSelect
        title="Sex"
        name="sex"
        options={genderArr}
        register={register}
        error={errors.sex}
      />
      <CustomSelect
        title="City"
        name="city"
        options={options.filteredCitiesOptions}
        register={register}
        error={errors.city}
      />
      <CustomSelect
        title="Doctor Specialty"
        name="specialty"
        options={options.filteredSpecialtiesOptions}
        register={register}
        error={errors.specialty}
      />
      <CustomSelect
        title="Doctor"
        name="doctor"
        options={options.filteredDoctorsOptions}
        register={register}
        error={errors.doctor}
      />
      <CustomInput title="Email" name="email" register={register} error={errors.email} />
      <CustomInput title="Mobile number" name="phone" register={register} error={errors.phone} />
      <CustomButton title="Submit" />
    </>
  );
};

export default FormLayout;
