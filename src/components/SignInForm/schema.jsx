import * as yup from 'yup'
export default yup.object().shape({
  email: yup
    .string()
    .email('Enter a Valid Email')
    .required('required field')
    // .test('email', 'This isn\'t email', (value) => {
    //   console.log(value);
    //   return value != undefined;
    // })
    ,
    password: yup
    .string()
    .required('required field')
    // .test('password', 'This isn\'t password', (value) => {
    //   console.log(value);
    //   return value != undefined;
    // })
  });

export const fieldSchema = (fieldName) => {
  switch (fieldName) {
    case "email":
      return yup
        .string()
        .email('invalid Email')
        .required('required filed');
    case "password":
      return yup
        .string()
        .required('required filed');
    default:
      throw new Error("invalid fieldName");
  }
};
