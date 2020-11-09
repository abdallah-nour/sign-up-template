// import * as yup from 'yup'

// export const fieldSchema = (fieldName) => {
// 	switch (fieldName) {
// 		case "email":
// 			return yup.string().email().required();
// 		//
// 		case "password":
// 			return yup
// 				.string()
// 				.matches(
// 					/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)(?=.{8,}).*$/,
// 					"password must be 8 char"
// 				)
// 				.required();
// 		//
// 		case 'repassword':
// 			return yup
// 				.string()
// 				.oneOf([ref('password')], "passwords doesn't match")
// 				.required('required filed');
// 		//
// 		case 'checkbox':
// 			return yup
// 				.boolean()
// 				.oneOf([true])
// 				.required();
// 		default:
// 			throw new Error("invalid fieldName");
// 	}
// };