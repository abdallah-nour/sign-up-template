import { useState, useEffect, useReducer } from 'react';
import { Redirect } from 'react-router-dom'
import TxtField from '../Txt-field'
import PasswordScore from '../PasswordScore'
import CheckBox from '../CheckBox'
import Button from '../Button'
import axios from 'axios'
import schema, { fieldSchema } from './schema'

const reducerInputs = (state, action) => {
  if (action.type) return { ...state, [action.type]: action.payload };
  else console.log(new Error('invalid action type'));
}
const initInputs = { email: '', password: '', repassword: '', checkbox: false };

function SignUpForm() {
  let [inputs, dispatchInputs] = useReducer(reducerInputs, initInputs);
  let [visibility, setVisibility] = useState(false);
  let [score, setScore] = useState({});//{length:0, numbers:0,capitalChar:0, smallChar:0,}
  let [errors, setErrors] = useState({});

  const fetchData = () => {
    let { email, password } = inputs;
    axios.post('https://fake-api-ahmed.herokuapp.com/v1/auth/signup', {
      email,
      password
    })
      .then(res => {
        console.log(`valid submit. \n result data:`);
        console.log(res.data);
        <Redirect to='/' />
      })
      .catch(err => {
        console.log('Error in axios post :\n ' + err.message);
        // throw new Error('Error in asxios post :\n ' + err.message);
        /* handle login */
      })
  }
  //
  const formValidate = (data, cb) => {
    schema
      .validate(data, { abortEarly: false })  
      .then(_ => {
        setErrors({});
        cb();
        console.log('Valid form');
      })
      .catch(err => {
        let errors = {};
        err.inner.map((error) => errors[error.path] = error.message);
        setErrors(errors);
        console.log('inValid form');
      });
  }
  //
  const formSubmit = e => {
    e.preventDefault();
    let { email, password } = inputs;
    console.log(email, password);
    formValidate({ email, password }, fetchData);
  }
  //
  const handleChange = e => {
    let { name } = e.target;
    let value = ((name === 'checkbox') ? e.target.checked : e.target.value);
    dispatchInputs({ type: name, payload: value });
    if (name === "password") passwordScore(value);// here
  }
  //
  const handleBlur = e => {
    let { name, value } = e.target;
    fieldSchema(name)
      .validate(value)
      .then((res) => {
        if (name) setErrors({ ...errors, [name]: '' });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.message });
      });
  }

  const handleClick = e => {
    let name = e.target.getAttribute('name');
    // let errs =errors; // here 
    // errs[name] = '';
    // console.log(errs,'\n' , errors);
    setErrors({ ...errors, [errors[name]]: '' });
  }
  const passwordScore = (value) => {
    setScore({}); // 
    setVisibility(true); //
    if (value.length >= 6) {
      setScore({ ...score, 'length': 20 }); // 
    }
    if (/[A-Z]$/.test(value)) {
      setScore({ ...score, 'capitalChar': 20 }); // 
    }
    if (/[a-z]$/.test(value)) {
      setScore({ ...score, 'smallChar': 20 }); // 
    }
    if (/[0-9]$/.test(value)) {
      setScore({ ...score, 'numbers': 20 }); // 
    }
  }
  let totalScore = 5, color, txt;
  for (const key in score) totalScore += score[key];
  if (totalScore <= 40) { color = 'red'; txt = 'Very Weak Password.'; }
  else if (totalScore <= 60) { color = 'orange'; txt = 'Not bad but you know you can do it better.' }
  else if (totalScore <= 100) { color = 'green'; txt = 'Very Good Password.' }

  return (
    <>
      <form className="container-form" onSubmit={formSubmit} onChange={handleChange} > {/** here 2 */}
        <TxtField type='email' name='email' descText='Email address*' placeholder='Enter email address' error={errors.email} value={inputs.email} onChange={handleChange} onBlur={handleBlur} onClick={handleClick} />{/** here 3 */}
        <TxtField type='password' name='password' descText='Create password*' placeholder='Password' error={errors.password} value={inputs.password} onChange={handleChange} onBlur={handleBlur} onClick={handleClick} />{/** here 3 */}
        <PasswordScore visibility={visibility} color={color} score={totalScore + '%'}>{txt}</PasswordScore>
        <TxtField type='password' name='repassword' descText='Repeat password*' placeholder='Repeat password' error={errors.repassword} value={inputs.repassword} onChange={handleChange} onBlur={handleBlur} onClick={handleClick} /> {/** here 3 */}
        <CheckBox name='checkbox' error={errors.checkbox} checked={inputs.checkbox} onChange={handleChange} onBlur={handleBlur} onClick={handleClick}>I agree to terms & conditions</CheckBox>{/** here 3 */}
        <Button name='register' type='submit' >Register Account</Button>
      </form>
    </>
  );
}
export default SignUpForm;