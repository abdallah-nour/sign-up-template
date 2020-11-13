import { Link } from 'react-router-dom'

import Container from '../Container'
import Logo from '../../components/Logo';
import Txt from '../../components/Txt'
import Quote from '../../components/Quote';
import FormContainer from '../../components/FormContainer'
import { MediaList } from '../../components/SocialMediaBtn'
import OrTxt from '../../components/OrTxt'
import psImage from '../../images/ps-hand.png'
import SignInForm from '../../components/SignInForm'

import './style.css'
function SignIn({ setAuthentication }) {
  return (
    <Container maxWidth='1160px'>
      <div className='sign-in-left'>
        <div className='sign-in-left-container'>
          <Logo size='large' /> {/* here we can import images and put them as children*/}
          <Quote version='2' quoteImgColor='#BABABA'>
            <Txt color='#696F79' lineHeight='38px'>
              I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I
              imagine a lot of things about their lives... about the day ahead of them.
              </Txt>
            <Txt color='#000' marginTop='60px'> Hideo Kojima </Txt>
          </Quote>
          <img className='ps-image' src={psImage} alt='' />
        </div>
      </div>
      <hr className='page-divide' /> {/* just for mobile layout */}
      <div className='sign-in-right'>
        <div className='sign-in-right-container'>
          <FormContainer>
            <div className='form-txt-container'>
              <Txt color='black' fontSize='38px' txtAlign='center' fontWeight='bold'>
                Join the game!
							</Txt>
              <Txt color='#8692A6' fontSize='14px' txtAlign='center' marginTop='5px'>Go inside the best gamers social network!</Txt>
            </div>
            <MediaList marginTop='20px'></MediaList>
            <OrTxt margin='3vmin'></OrTxt>
            <SignInForm setAuthentication={setAuthentication}></SignInForm>
            <p>Don't have account? <Link to='/SignUp'>SignUp</Link> </p>
          </FormContainer>
        </div>
      </div>
    </Container>
  );
}

export default SignIn;