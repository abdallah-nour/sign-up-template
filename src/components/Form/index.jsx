import React, { Component } from 'react';
import './style.css';
class Form extends Component {
  state = {
    txtFieldsValues : {
// npm
    }
  }
  formSubmit= e=>{
    e.preventDefault();
    let inputArr = e.target.elements;
    // console.log(e.target.elements['email'].value);
    // console.log(e.target.elements['password'].value);
    // console.log(e.target.elements['repassword'].value);
    // e.target.elements['approval'].value= 'off';
    // console.log(e.target.elements['approval'].checked);
    // console.log(inputArr);
    // if
  }
  render() {
    return (
      <form className="container-form" onSubmit={this.formSubmit}>
        {this.props.children}
      </form>
    );
  }
}

export default Form;