import React, { Component } from 'react';

import Quote from '../../components/Quote/index'
import Logo from '../../components/Logo/index'


import './style.css'
class SignUp extends Component {
	render() {
		return (
			<div className='container-signup'>
				<Logo ></Logo>
				<Quote className="quote">
					I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.
        </Quote>
			</div>
		);
	}
}
export default SignUp;