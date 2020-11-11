import React, { Component } from 'react';
import * as yup from 'yup'
import './style.css';
class FormContainer extends Component {
  state = {
    values: {},
    errors: {}
  }
  

  formSubmit = e => {
    e.preventDefault();
    let { email, password, repassword } = this.state.values;
    let { children } = this.props;
    let schema = yup.object().shape({
      email: yup.string().required(),
      password: yup.string().min(4).required(),
      repassword: yup.string().oneOf([yup.ref('password')], "Password dosen't match"),
    });
    schema.validate({ email, password, repassword }, { abortEarly: false })
      .then(data => {
        console.log('valid data');
        console.log(data);
      })
      .catch(err => {
        console.log(err);
        let errors = {};
        // err.forEach();
      })
    //////////////////////
    // let isThereRepassword = false;
    // children.map(child => {
    //   if (child.props.name === 'repassword') isThereRepassword = true;
    // })
    // if (isThereRepassword) {
    // }
  }
  handleChange = e => {
    let { name, value } = e.target;
    let values = this.state.values;
    values[name] = value;
    this.setState({ values });

    // if (name === 'password') {
    // }


    // e.target.onFocus = this.formSubmit;
    // will check if we have a repassword
    // then we will add a function for it
  }
  render() {
    return (
      // <form className="container-form" onSubmit={this.formSubmit} onChange={this.handleChange}>
      <div className="container-form"> {this.props.children}</div>
        // {/* {this.props.children[3].props.err = 'a'} */ }
    // {/* {console.log(this.props.children[3].props.err)} */ }
    // {/* </form> */ }
    );
  }
}

export default FormContainer;