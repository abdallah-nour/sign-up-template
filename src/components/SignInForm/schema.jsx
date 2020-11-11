import * as yup from 'yup'
export default yup.object().shape({
  email: yup
    .string()
    .email('Enter a Valid Email')
    .required('required field')
  ,
  password: yup
    .string()
    .required('required field')
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
