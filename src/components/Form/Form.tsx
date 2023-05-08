import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { IComparedDoctorParams, IDoctorDataArrays, IRegister } from '../../types/types';
import FormLayout from './FormLayout/FormLayout';
import { schema, useFilterOptions, findDoctorByName, formInitialValues } from '.';

import classes from './Form.module.scss';

const Form = ({ data }: { data: IDoctorDataArrays }) => {
  const [formValues, setFormValues] = useState(formInitialValues);
  const { options, doctors } = useFilterOptions(data, formValues);

  const methods = useForm<IRegister>({
    defaultValues: { ...formInitialValues },
    resolver: yupResolver(schema),
  });

  const { reset, watch, handleSubmit } = methods;

  const onSubmit = (data: IRegister) => {
    alert(JSON.stringify(data));
    setFormValues({ ...formInitialValues });
    reset({ ...formInitialValues });
  };

  const handleChange = () => {
    const currentFormValues = watch();
    if (currentFormValues.doctor) {
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
    <FormProvider {...methods}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
        <FormLayout options={options} />
      </form>
    </FormProvider>
  );
};

export default Form;
