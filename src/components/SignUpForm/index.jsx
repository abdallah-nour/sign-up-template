import React, { Component } from 'react';
import * as yup from 'yup'
import TxtField from '../Txt-field'
import PasswordPower from '../PasswordPower'
import CheckBox from '../CheckBox'
import Button from '../Button'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import './style.css'
class SignUpForm extends Component {
  state = {
    values: { checkbox: false },
    visibility: false,
    score: {},
    errors: {},
    isError: true,
  }
  fetchData = (data) => {
    axios.post('https://fake-api-ahmed.herokuapp.com/v1/auth/signup', {
      email: data.email,
      password: data.password
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }
  formSubmit = e => {
    e.preventDefault();
    let { email, password, repassword, checkbox } = this.state.values;
    let schema = yup.object().shape({
      email: yup.string().email('Enter a Valid Email').required('required field'),
      password: yup.string().min(4)
        .matches(/(?=.*?[A-Z])/, 'password must have an upper case char.')
        .matches(/(?=.*?[a-z])/, 'password must have a lower case char.')
        .matches(/(?=.*?[0-9])/, 'password must have a number.')
        .required('required field'),
      repassword: yup.string().oneOf([yup.ref('password')], "Passwords doesn't match").required('required field'),
      checkbox: yup.boolean().oneOf([true], 'to register you must approve terms').required('to register you must approve terms')
      // if you remove oneOf in checkbox error just will happen before you make first check.
    });
    schema.validate({ email, password, repassword, checkbox }, { abortEarly: false }) // abortEarly: false, will still running when error occurred and give us all errors.
      .then(data => {
        this.setState({ isError: false });
        this.fetchData(data);
        <Redirect to='/'></Redirect>
      })
      .catch(err => {
        let errors = {};
        err.inner.map(error => {
          errors[error.path] = error.message;
        })
        this.setState({ errors });
      });
  }
  handleChange = e => {
    let { name } = e.target;
    let value = name === 'checkbox' ? e.target.checked : e.target.value;
    // value 
    let values = this.state.values;
    // let errors = this.state.errors;
    values[name] = value;
    // errors[name] = '';
    this.setState({ values });
    if (name === "password") {
      this.setState({ score: {} });
      this.setState({ visibility: true },
      );
      if (value.length > 6) {
        let score = this.state.score;
        score.length = 25;
        this.setState({ score });
      }
      if (/[A-Z]$/.test(value)) {
        let score = this.state.score;
        score.capitalChar = 20;
        this.setState({ score });
      }
      if (/[a-z]$/.test(value)) {
        let score = this.state.score;
        score.smallChar = 20;
        this.setState({ score });
      }
      if (/[0-9]$/.test(value)) {
        let score = this.state.score;
        score.numbers = 20;
        this.setState({ score });
      }
    }
  }
  formClick = e => {
    let { name, className } = e.target;
    let errors = this.state.errors;
    errors[name] = '';
    this.setState({ errors });
    // console.log(e.target.parentElement.previousSibling);
    // if(className ==='popup-txt') e.target.style = 'visibility:hidden';
    // here what's the best way to hide popup-txt
  }

  render() {
    let { visibility, score, errors, values } = this.state;
    let total = 5, color, txt;
    for (const key in score) {
      total += score[key];
    }
    if (total <= 40) { color = 'red'; txt = 'Very Weak Password.'; }
    else if (total <= 60) { color = 'orange'; txt = 'Not bad but you know you can do it better.' }
    else if (total <= 100) { color = 'green'; txt = 'Very Good Password.' }
    return (
      <>
        <form className="container-form" onSubmit={this.formSubmit} onChange={this.handleChange} onClick={this.formClick}>
          <TxtField type='email' name='email' descText='Email address*' placeholder='Enter email address' error={errors.email} value={values.email} onChange={this.handleChange} />
          <TxtField type='password' name='password' descText='Create password*' placeholder='Password' error={errors.password} value={values.password} onChange={this.handleChange} />
          <PasswordPower visibility={visibility} color={color} width={total + '%'}>{txt}</PasswordPower>
          <TxtField type='password' name='repassword' descText='Repeat password*' placeholder='Repeat password' error={errors.repassword} value={values.repassword} onChange={this.handleChange} />
          <CheckBox name='checkbox' error={errors.checkbox} checked={values.checkbox} onChange={this.handleChange}>I agree to terms & conditions</CheckBox>
          <Button name='register' type='submit' >Register Account</Button>
        </form>
      </>
    );
  }
}

export default SignUpForm;