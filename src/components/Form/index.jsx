import React, { Component } from 'react';
import TxtField from '../Txt-field/index';
import Button from '../Button/index';
import CheckBox from '../CheckBox/index';
import './style.css';
class Form extends Component {
  render() {
    return (
      <div className="container-form">
        <h2 className='head-txt'>
          Register Individual Account!
        </h2>
        <p className="para">For the purpose of gamers regulation, your details are required.</p>
        <TxtField></TxtField>
        <TxtField></TxtField>
        <TxtField></TxtField>
        <CheckBox></CheckBox>
        <Button></Button>
        <p className="or-txt">Or</p>
        <Button></Button>
      </div>
    );
  }
}

export default Form;