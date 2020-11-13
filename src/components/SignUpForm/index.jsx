import React, { Component, useReducer } from 'react';
import { Redirect } from 'react-router-dom'
import TxtField from '../Txt-field'
import PasswordPower from '../PasswordPower'
import CheckBox from '../CheckBox'
import Button from '../Button'
import axios from 'axios'
import schema, { fieldSchema } from './schema'

class SignUpForm extends Component {
  state = {
    email: '', password: '', repassword: '', checkbox: false,
    visibility: false,
    score: {},
    errors: {},
    isThereError: true,
  }
/**
 * reducer for inputs
 * useState for visibility
 * useState for score
 * useState for errors
 * isThereError
 */
  fetchData = () => {
    let { email, password } = this.state;
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
        this.setState({ isThereError: true });
        console.log('Error in asxios post :\n ' + err.message);
        // throw new Error('Error in asxios post :\n ' + err.message);
        // handle login
      })
  }

  formValidate = (data) => {
    schema
      .validate(data, { abortEarly: false }) // abortEarly: false, will still running when error occurred and give us all errors.
      .then(_ => {
        this.setState({ isThereError: false, errors: {} });// this.setstate
        console.log('Valid form');
      })
      .catch(err => {
        let errors = {};
        console.log('inValid form');
            err.inner.map((error) => errors[error.path] = error.message);
        this.setState({ isThereError: true, errors });// here
      });
  }
  //
  formSubmit = e => {
    e.preventDefault();
    let { email, password } = this.state;// here 
    console.log(email, password);
    this.formValidate({ email, password }); // here 
    // this.fetchData();
    if (!this.state.isThereError) this.fetchData(); // here * 2
  }
  //
  handleChange = e => {
    let { name } = e.target;
    let value = ((name === 'checkbox') ? e.target.checked : e.target.value);
    this.setState({ [name]: value }); // here
    if (name === "password") this.passwordScore(value);// here
  }

  handleBlur = e => {
    let { name, value } = e.target;
    fieldSchema(name)
      .validate(value)
      .then((res) => {
        console.log(res);
        this.setState(({ errors }) => ({ errors: { ...errors, [name]: '' } })); // here 
      })
      .catch((err) => {
        console.log(err);
        this.setState(({ errors }) => ({ errors: { ...errors, [name]: err.message } })); // here 
      });
  }

  handleClick = e => {
    let name = e.target.getAttribute('name');
    let errors = this.state.errors; // here 
    errors[name] = '';
    this.setState({ errors }); // here 
  }

  render() {
    let { visibility, errors, email, password, repassword, checkbox, score } = this.state; /// here 
    let totalScore = 5, color, txt;
    for (const key in score) totalScore += score[key];
    if (totalScore <= 40) { color = 'red'; txt = 'Very Weak Password.'; }
    else if (totalScore <= 60) { color = 'orange'; txt = 'Not bad but you know you can do it better.' }
    else if (totalScore <= 100) { color = 'green'; txt = 'Very Good Password.' }

    return (
      <>
        <form className="container-form" onSubmit={this.formSubmit} onChange={this.handleChange} > {/** here 2 */}
          <TxtField type='email' name='email' descText='Email address*' placeholder='Enter email address' error={errors.email} value={email} onChange={this.handleChange} onBlur={this.handleBlur} onClick={this.handleClick} />{/** here 3 */}
          <TxtField type='password' name='password' descText='Create password*' placeholder='Password' error={errors.password} value={password} onChange={this.handleChange} onBlur={this.handleBlur} onClick={this.handleClick} />{/** here 3 */}
          <PasswordPower visibility={visibility} color={color} width={totalScore + '%'}>{txt}</PasswordPower>
          <TxtField type='password' name='repassword' descText='Repeat password*' placeholder='Repeat password' error={errors.repassword} value={repassword} onChange={this.handleChange} onBlur={this.handleBlur} onClick={this.handleClick} /> {/** here 3 */}
          <CheckBox name='checkbox' error={errors.checkbox} checked={checkbox} onChange={this.handleChange} onBlur={this.handleBlur} onClick={this.handleClick}>I agree to terms & conditions</CheckBox>{/** here 3 */}
          <Button name='register' type='submit' >Register Account</Button>
        </form>
      </>
    );
  }
  //  //  //  //  //  //  //  //
  passwordScore = (value) => {
    this.setState({ score: {} }); // 
    this.setState({ visibility: true }); //
    if (value.length >= 6) {
      let score = this.state.score; // 
      score.length = 25;
      this.setState({ score }); // 
    }
    if (/[A-Z]$/.test(value)) {
      let score = this.state.score; //
      score.capitalChar = 20;
      this.setState({ score }); // 
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
    // let { score } = this.state;
    // let totalScore = 5;
    // for (const key in score) totalScore += score[key];
    // this.setState({ total: totalScore });
    // if (totalScore <= 40) this.setState({ color: 'red', txt: 'Very Weak Password.' })
    // else if (totalScore <= 60) this.setState({ color: 'orange', txt: 'Not bad but you know you can do it better.' })
    // else if (totalScore <= 100) this.setState({ color: 'green', txt: 'Very Good Password.' })
  }
}// class END

export default SignUpForm;