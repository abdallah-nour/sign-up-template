import React, { Component } from 'react';

import Quote from '../../components/Quote/index'
import Logo from '../../components/Logo/index'
import Back from '../../components/Back/index'
import Form from '../../components/Form/index'
import InputsGenerator from '../../components/InputsGenerator';
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox/index';
import OrTxt from '../../components/OrTxt/index';
import Container from '../Container'
import Txt from '../../components/Txt'

import gridImg from '../../images/grid-img.svg'
import quoteImg2 from '../../images/quote-img-2.svg'
import google from '../../images/google-logo.svg';
import './style.css'
class SignUp extends Component {
  render() {
    return (
      <Container maxWidth='1380px'>
        <div className='left'>
          <div className='left-container'>
            <Logo size="small"></Logo>
            <Quote >
              <img className="grid-img" src={gridImg} alt="" />
              <Txt lineHeight='38px'>
                I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I
                imagine a lot of things about their lives... about the day ahead of them.
        </Txt>
              <Txt marginTop='60px'>
                Hideo Kojima
        </Txt>
              <img className='quote-img2' src={quoteImg2} alt='' />
            </Quote>
          </div>
        </div>
        <div className="right">
          <div className='right-container'>
            <Back></Back>
            <Form>
              <h2 className='head-txt' key='head-txt'>Register Individual Account!</h2>
              <p className="para">For the purpose of gamers regulation, your details are required.</p>
              <hr className="break-line"></hr>
              <InputsGenerator>
                {{ type: 'email', name: 'email', descText: 'Email address*', placeholder: 'Enter email address' }}
                {{ type: 'password', name: 'password', descText: 'Create password*', placeholder: 'Password' }}
                {{ type: 'password', name: 'repassword', descText: 'Repeat password*', placeholder: 'Repeat password' }}
              </InputsGenerator>
              <CheckBox name='approval'>I agree to terms & conditions</CheckBox>
              <Button name='register' type='submit'>Register Account</Button>
              <OrTxt></OrTxt>
              <Button name='google-register' color='black' background="white" icon={google}> Register with Google</Button>
            </Form>
          </div>
        </div>
      </Container>
    );
  }
}
export default SignUp;