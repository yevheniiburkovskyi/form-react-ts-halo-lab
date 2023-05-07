import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { IDoctorDataArrays, IRegister } from '../../types/types';

import {
  CustomInput,
  MaskedInput,
  CustomSelect,
  Loading,
  genderArr,
  schema,
  selectApi,
  useFetchAll,
  useFilterOptions,
  findDoctorByName,
  CustomButton,
  formInitialValues,
} from '.';

import classes from './Form.module.scss';

const Form = () => {
  const { data, loading, error } = useFetchAll<IDoctorDataArrays>(selectApi);
  const [formValues, setFormValues] = useState(formInitialValues);
  const { options, doctors } = useFilterOptions(data, formValues);
  const [isFormSubmited, setIsFormSubmited] = useState(false);

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

  function onSubmit(data: IRegister) {
    alert(JSON.stringify(data));
    setIsFormSubmited(true);
  }

  useEffect(() => {
    return () => {
      setIsFormSubmited(false);
      reset({ ...formInitialValues });
      setFormValues({ ...formInitialValues });
    };
  }, [isFormSubmited, reset, setFormValues]);

  function handleChange() {
    const currentFormValues = watch();
    if (currentFormValues.doctor && doctors) {
      const currentDoctor = findDoctorByName(currentFormValues.doctor, doctors);
      if (currentDoctor) {
        reset({
          ...currentFormValues,
          specialty: currentDoctor.specialty,
          city: currentDoctor.city,
        });
      }
    }
    setFormValues({ ...currentFormValues });
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
      {(options && (
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
          <CustomInput
            title="Mobile number"
            name="phone"
            register={register}
            error={errors.phone}
          />
          <CustomButton title="Submit" />
        </>
      )) ||
        (error && <div>Something wrong</div>) ||
        (loading && <Loading />)}
    </form>
  );
};

export default Form;
