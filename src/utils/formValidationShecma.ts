import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('First name is required')
    .matches(/^[^0-9]*$/gi, 'Name should not contain numbers'),
  sex: yup.string().required('Sex is required'),
  city: yup.string().required('City is required'),
  doctor: yup.string().required('Doctor is required'),
});

export { schema };
