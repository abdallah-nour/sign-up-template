import * as yup from 'yup'
export default yup.object().shape({
  email: yup
    .string()
    .email('Enter a Valid Email')
  .required('required field')
  ,
  password: yup.string().min(4)
    // .matches(/(?=.*?[A-Z])/, 'password must have an upper case char.')
    // .matches(/(?=.*?[a-z])/, 'password must have a lower case char.')
    // .matches(/(?=.*?[0-9])/, 'password must have a number.')
  //   .required('required field'),
});

export const fieldSchema = (fieldName) => {
  switch (fieldName) {
    case "email":
      return yup.string().email('invalid Email').required('required filed');
    //
    case "password":
      return yup
        .string()
        .min(4, 'password length at least 4 chars')
        // .matches(/(?=.*?[A-Z])/, 'password must have an upper case char')
        // .matches(/(?=.*?[a-z])/, 'password must have a lower case char')
        // .matches(/(?=.*?[0-9])/, 'password must have a number')
        .required('required filed');
    //
    // case 'repassword':
    //   return yup
    //     .string()
    //     .oneOf([yup.ref('password')], "passwords doesn't match")
    //     .required('required filed');
    // //
    // case 'checkbox':
    //   return yup
    //     .boolean()
    //     .oneOf([true], 'to register you must approve terms')
    //     .required('to register you must approve terms');
    default:
      throw new Error("invalid fieldName");
  }
};







    // yup.object().shape({
    //   email: yup.string().email('Enter a Valid Email').required('required field'),
    //   password: yup.string().min(4)
    //   // .matches(/(?=.*?[A-Z])/, 'password must have an upper case char.')
    //   // .matches(/(?=.*?[a-z])/, 'password must have a lower case char.')
    //   // .matches(/(?=.*?[0-9])/, 'password must have a number.')
    //   //   .required('required field'),
    //   // repassword: yup.string().oneOf([yup.ref('password')], "Passwords doesn't match").required('required field'),
    //   // checkbox: yup.boolean().oneOf([true], 'to register you must approve terms').required('to register you must approve terms')
    //   // if you remove oneOf in checkbox error just will happen before you make first check.
    // });
