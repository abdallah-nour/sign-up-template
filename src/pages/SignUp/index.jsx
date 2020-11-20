import React, { Component } from 'react';

import Quote from '../../components/Quote/index'
import Logo from '../../components/Logo/index'
import Back from '../../components/Back/index'
import FormContainer from '../../components/FormContainer'
import Button from '../../components/Button'
import OrTxt from '../../components/OrTxt/index'
import Container from '../../components/Container'
import Txt from '../../components/Txt'
import SignUpForm from '../../components/SignUpForm'

import gridImg from '../../images/grid-img.svg'
import quoteImg2 from '../../images/quote-img-2.svg'
import google from '../../images/google-logo.svg'
import './style.css'

class SignUp extends Component {
  render() {
    return (
      <Container maxWidth='1380px'>
        <div className='left'>
          <div className='left-container'>
            <Logo size="small"></Logo>
            <Quote marginTop='140px' >
              <img className="grid-img" src={gridImg} alt="" />
              <Txt lineHeight='38px'>
                I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I
                imagine a lot of things about their lives... about the day ahead of them.
              </Txt>
              <Txt marginTop='7vh'>
                Hideo Kojima
              </Txt>
              <img className='quote-img2' src={quoteImg2} alt='' />
            </Quote>
          </div>
        </div>
        <div className="right">
          <div className='right-container'>
            <Back></Back>
            <FormContainer>
              <h2 className='head-txt' key='head-txt'>Register Individual Account!</h2>
              <p className="para">For the purpose of gamers regulation, your details are required.</p>
              <hr className="break-line"></hr>
              <SignUpForm></SignUpForm>
              <OrTxt></OrTxt>
              <Button name='google-register' color='black' background="white" icon={google}> Register with Google</Button>
            </FormContainer>
          </div>
        </div>
      </Container>
    );
  }
}
export default SignUp;