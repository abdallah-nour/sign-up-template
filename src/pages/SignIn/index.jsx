import React, { Component } from 'react';

import Logo from '../../components/Logo';
import Quote from '../../components/Quote';

import psImage from '../../images/ps-hand.png'
import './style.css'
class SignIn extends Component{
	render(){
		return(
			<div className="container-signin">
				<div className='sign-in-left'>
					<Logo size='large'></Logo> {/* here we can import images and put them as children*/}
					<Quote version='2' imgColor='#BABABA' quoteTxtColor='#696F79' writerTxtColor='#000'></Quote>
					<img className='ps-image' src={psImage} alt=''/>
				</div>
			</div>
		);
	}
}

export default SignIn;