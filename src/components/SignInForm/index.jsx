import { useState } from 'react';
import TxtField from '../Txt-field'
import Button from '../Button'
import axios from '../../axios.config'
import schema from './schema'
import { Redirect } from 'react-router-dom'

function SignInForm(props) {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [errors, setErrors] = useState({});
  let [isThereError, setIsThereError] = useState(true);
  // let [user, setUser] = useState({});
  // put isThereError in errors
  const formValidate = (data, cb) => {
    schema
      .validate(data, { abortEarly: false }) // abortEarly: false, will still running when error occurred and give us all errors.
      .then(_ => {
        // setIsThereError(false);
        setErrors({});
        cb();
        console.log('then in formValidation in then.');
      })
      .catch(err => {
        let errors = {};
        err.inner.map((error) => errors[error.path] = error.message);
        setIsThereError(true);
        setErrors(errors);
        console.log('error in form validition');
      })

  }
  const formSubmit = e => {
    e.preventDefault();
    // let { email, password, isThereError } = this.state;//
    formValidate({ email, password }, () => {
      axios()
        .post('/v1/auth/login', {
          email,
          password
        })
        .then(res => {
          props.setUser(res.data);
          props.setAuthentication(true);
          console.log('TOKEN:', res.data.token);
          // <Redirect to='/' />
        })
        .catch(err => {
          setIsThereError(true);
          console.log('Error in axios post :\n ' + err.message);
          // throw new Error('Error in axios post :\n ' + err.message);
        })
    });
    //
  }
  const handleChange = e => {
    let { name, value } = e.target;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  }
  const handleClick = e => {
    let name = e.target.getAttribute('name');
    let errs = errors;////
    errs[name] = '';
    setErrors(errs);
  }
  return (
    <>
      <form className="container-form" onSubmit={formSubmit} onChange={handleChange} >
        <TxtField type='email' name='email' descText='Email address*' placeholder='Email address' error={errors.email} value={email} onChange={handleChange} onClick={handleClick} />
        <TxtField type='password' name='password' descText='password*' placeholder='Password' error={errors.password} value={password} onChange={handleChange} onClick={handleClick} />
        <Button marginTop='20px'>Sign in</Button>
      </form>
    </>
  );
}
export default SignInForm;