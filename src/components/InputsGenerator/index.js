import React, { Component } from 'react';

import TxtField from '../Txt-field'
class InputsGenerator extends Component {
  state = {
    name: '',
    value: '',
    values: this.props.children.map(obj => {
      return {[obj.name]:''};
    }),
  }

  updateValue = (e) => {
    let { name, value } = e.target;
    let { values} = this.state;
    let copy = [...values];
    console.log(name);
    copy.forEach(obj => {
      console.log(obj[name]);
      if (obj[name] === name) {
        obj[value] = value;
      }
      return obj;
    })
    this.setState({ values:copy })
    // Q1:here i can use document.getById() to add and remove classes
  }

  checkValidation = _ => {
    let { name, value } = this.state;
    if (name === 'email') {
      if (!value.includes('@') || !value.includes('.')) {
        console.log('invalid email');
      }
    } else if (name === 'password') {
      if (value.length < 8) {
        console.log('your password should be at least 8 chars');
      }
    } else if (name === 'repassword') {
    }
  }

  render() {
    let { children, name, type, descText, placeholder } = this.props;
    let { values } = this.state;
    return (
      <>
        {
          children.map((obj) => {
            return <TxtField {...obj} key={obj.name} value={values[name]} onChange={this.updateValue}></TxtField>
          })
        }
      </>
    );
  }
}

export default InputsGenerator;