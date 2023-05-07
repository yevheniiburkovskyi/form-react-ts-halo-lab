import * as yup from 'yup';

const validationPatterns = {
  email:
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  phone: /^\+380-\d{2}-\d{3}-\d{2}-\d{2}$/,
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[^\d]+$/, 'Name must not contain numbers'),

  birthday: yup.string().required('Birthday is required'),

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
      const { email } = this.parent;
      if (value || email) {
        if (value) {
          return validationPatterns.email.test(value);
        }
        return true;
      }
      return true;
    }),

  phone: yup
    .string()
    .test('Phone number or email', 'Enter at least a phone number or email', function (value) {
      const { email } = this.parent;
      return !!email || !!value;
    })
    .test('invalid form format', 'Phone format should be +380-XX-XXX-XX-XX', function (value) {
      const { email } = this.parent;
      if (value || email) {
        if (value) {
          return validationPatterns.phone.test(value);
        }
        return true;
      }
      return true;
    }),
});

export { schema };
