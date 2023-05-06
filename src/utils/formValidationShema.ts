import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('name is required')
    .matches(/^[^0-9]*$/gi, 'Name should not contain numbers'),
  birthday: yup.string().required('birthday is required'),
  sex: yup.string().required('Sex is required'),
  city: yup.string().required('City is required'),
  doctor: yup.string().required('Doctor is required'),
  email: yup.string().required('Email is required'),
  phone: yup.string().required('Phone is required'),
});

export { schema };
