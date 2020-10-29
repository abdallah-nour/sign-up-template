import React, { Component } from 'react';

import TxtField from '../Txt-field/index';
import Button from '../Button/index';
import CheckBox from '../CheckBox/index';
import OrTxt from '../OrTxt/index';

import google from'../../images/google-logo.svg';
import './style.css';
class Form extends Component {
  render() {
    let { headTxt } = this.props;
    return (
      <div className="container-form">
        {this.props.children}
        <hr className="break-line"></hr>
        <TxtField descText='Email address*' placeholder='Enter email address'></TxtField>
        <TxtField descText='Create password*' placeholder='Password'></TxtField>
        <TxtField descText='Repeat password*' placeholder='Repeat password'></TxtField>
        <CheckBox text='I agree to terms & conditions'></CheckBox>
        <Button text='Register Account'></Button>
        <OrTxt></OrTxt>
        <Button text="Register with Google" color='black' background="white" icon={google}></Button>
      </div>
    );
  }
}

export default Form;