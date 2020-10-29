import React, { Component } from 'react';

import Quote from '../../components/Quote/index'
import Logo from '../../components/Logo/index'
import Back from '../../components/Back/index'
import Form from '../../components/Form/index'

import './style.css'
class SignUp extends Component {
  render() {
    return (
      <div className='content'>
        <div className="container-signup">
          <div className='left'>
            <div className='left-container'>
              <Logo size="small"></Logo>
              <Quote className="quote">
                I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.
        </Quote>
            </div>
          </div>
          <div className="right">
            <div className='right-container'>
              <Back></Back>
              <Form>
              {/* <Form> */}
                <h2 className='head-txt'>
                  Register Individual Account!
        </h2>
                <p className="para">For the purpose of gamers regulation, your details are required.</p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;