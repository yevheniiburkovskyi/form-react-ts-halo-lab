import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { IComparedDoctorParams, IDoctorDataArrays, IRegister } from '../../types/types';

import {
  CustomInput,
  MaskedInput,
  CustomSelect,
  genderArr,
  schema,
  useFilterOptions,
  findDoctorByName,
  CustomButton,
  formInitialValues,
} from '.';

import classes from './Form.module.scss';

const Form = ({ data }: { data: IDoctorDataArrays }) => {
  const [formValues, setFormValues] = useState(formInitialValues);
  const { options, doctors } = useFilterOptions(data, formValues);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
  } = useForm<IRegister>({
    defaultValues: { ...formInitialValues },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IRegister) => {
    alert(JSON.stringify(data));
    setFormValues({ ...formInitialValues });
    reset({ ...formInitialValues });
  };

  const handleChange = () => {
    const currentFormValues = watch();
    if (currentFormValues.doctor && doctors) {
      fillInputsWithDoctorParams(currentFormValues, doctors);
    }
    setFormValues({ ...currentFormValues });
  };

  const fillInputsWithDoctorParams = (
    currentFormValues: IRegister,
    doctors: IComparedDoctorParams[]
  ) => {
    const currentDoctor = findDoctorByName(currentFormValues.doctor, doctors);
    if (currentDoctor) {
      reset({
        ...currentFormValues,
        specialty: currentDoctor.specialty,
        city: currentDoctor.city,
      });
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
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
    </form>
  );
};

export default Form;
