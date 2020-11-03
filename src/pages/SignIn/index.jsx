import React, { Component } from 'react';

import Container from '../Container'
import Logo from '../../components/Logo';
import Txt from '../../components/Txt'
import Quote from '../../components/Quote';
import Form from '../../components/Form'
import { MediaList } from '../../components/SocialMediaBtn'
import OrTxt from '../../components/OrTxt'
import InputsGenerator from '../../components/InputsGenerator'
import PasswordPower from '../../components/PasswordPower'
import CheckBox from '../../components/CheckBox'
import Button from '../../components/Button'
import psImage from '../../images/ps-hand.png'

import './style.css'
class SignIn extends Component {
	render() {
		return (
			<Container maxWidth='1160px'>
				<div className='sign-in-left'>
					<div className='sign-in-left-container'>
						<Logo size='large'></Logo> {/* here we can import images and put them as children*/}
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
				<hr className='page-divide'/>
				<div className='sign-in-right'>
					<div className='sign-in-right-container'>
						<Form>
							<div className='form-txt-container'>
								<Txt color='black' fontSize='38px' txtAlign='center' fontWeight='bold'>
									Join the game!
							</Txt>
								<Txt color='#8692A6' fontSize='14px' txtAlign='center' marginTop='5px'>Go inside the best gamers social network!</Txt>
							</div>
							<MediaList></MediaList>
							<OrTxt margin='3vmin'></OrTxt>
							<InputsGenerator>
								{{ type: 'email', name: 'email', descText: 'Your email*', placeholder: 'Write your email', margin:'2vmin'}}
								{{ type: 'password', name: 'password', descText: 'Choose a password', placeholder: '•••••••••' }}
							</InputsGenerator>
							<PasswordPower width='70%' color='#FFC107'></PasswordPower>
							<CheckBox marginTop='10px' name='terms'>I agree to <a href='#'>terms & conditions</a> </CheckBox>
							<CheckBox name='news'>I’d like being informed about latest news and tips</CheckBox>
							<Button marginTop='20px'>Sign up for free</Button>
						</Form>
					</div>
				</div>
			</Container>
		);
	}
}

export default SignIn;