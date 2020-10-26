import React, { Component } from 'react';
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
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <CheckBox></CheckBox>
      </div>
    );
  }
}

export default Form;