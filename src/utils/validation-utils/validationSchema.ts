import * as yup from 'yup';
import { validationPatterns } from './validationPatterns';
import { checkDateValues, checkSiblingInputs } from './validationMethods';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[^\d]+$/, 'Name must not contain numbers'),

  birthday: yup
    .string()
    .required('Birthday is required')
    .test('Invalid email', 'Invalid date', function (value) {
      return validationPatterns.date.test(value);
    })
    .test('Invalid email', 'Invalid date', checkDateValues),

  sex: yup.string().required('Sex is required'),

  city: yup.string().required('City is required'),

  doctor: yup.string().required('Doctor is required'),

  email: yup
    .string()
    .test('Phone number or email', 'Enter at least a phone number or email', function (value) {
      const { phone } = this.parent;
      return !!phone || !!value;
    })
    .test('Invalid email', 'Invalid email', function (value) {
      const { phone } = this.parent;
      return checkSiblingInputs(value, phone, validationPatterns.email);
    }),

  phone: yup
    .string()
    .test('Phone number or email', 'Enter at least a phone number or email', function (value) {
      const { email } = this.parent;
      return !!email || !!value;
    })
    .test('invalid form format', 'Phone format +380XXXXXXXXX', function (value) {
      const { email } = this.parent;
      return checkSiblingInputs(value, email, validationPatterns.phone);
    }),
});

export { schema };
