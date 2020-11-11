import React, { Component, useState } from 'react';
import TxtField from '../Txt-field'
import Button from '../Button'
// import axios from 'axios'
import axios from '../../axios.config'
import schema from './schema'

class SignInForm extends Component {
  state = {
    email: '', password: '',
    errors: {},
    isThereError: true,
  }

  formValidate = (data) => {
    schema
      .validate(data, { abortEarly: false }) // abortEarly: false, will still running when error occurred and give us all errors.
      .then(_ => {
        this.setState({ isThereError: false, errors: {} });
        console.log('here in formValidation in then.');
      })
      .catch(err => {
        let errors = {};
        err.inner.map((error) => errors[error.path] = error.message);
        this.setState({ isThereError: true, errors });
        console.log('error in form validition');
      });
  }
  //
  formSubmit = e => {
    e.preventDefault();
    let { email, password, isThereError } = this.state;
    this.formValidate({ email, password });
    console.log(isThereError);
    if (!isThereError) {
      axios()
        .post('/v1/auth/login', {
          email,
          password
        })
        .then(res => {
          this.setState({ user: res.data });
          this.props.setAuthentication(true, res.data);
          console.log('TOKEN:', res.data.token);
        })
        .catch(err => {
          this.setState({ isThereError: true });
          throw new Error('Error in axios post :\n ' + err.message);
        })
    }
  }
  //
  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleClick = e => {
    let name = e.target.getAttribute('name');
    let errors = this.state.errors;
    errors[name] = '';
    this.setState({ errors });
  }

  render() {
    let { errors, email, password } = this.state;
    return (
      <>
        <form className="container-form" onSubmit={this.formSubmit} onChange={this.handleChange} >
          <TxtField type='email' name='email' descText='Email address*' placeholder='Email address' error={errors.email} value={email} onChange={this.handleChange} onClick={this.handleClick} />
          <TxtField type='password' name='password' descText='password*' placeholder='Password' error={errors.password} value={password} onChange={this.handleChange} onClick={this.handleClick} />
          <Button marginTop='20px'>Sign in</Button>
        </form>
      </>
    );
  }
}
// class END

export default SignInForm;