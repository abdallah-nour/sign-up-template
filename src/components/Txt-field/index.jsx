import React, { Component } from 'react';
import Txt from '../Txt'
import './style.css';
class TxtField extends Component {
	state = {
		name: '',
		value: '',
	}
	updateValue = (e) => {
		let { name, value } = e.target;
		this.setState({ name: name, value: value });
		// }
		// Q1:here i can use document.getById() to add and remove classes
	}

	// checkValidation = _ => {
	// 	let { name, value } = this.state;
	// 	if (name === 'email') {
	// 		if (!value.includes('@') || !value.includes('.')) {
	// 			console.log('invalid email');
	// 		}
	// 	} else if (name === 'password') {
	// 		if (value.length < 8) {
	// 			console.log('your password should be at least 8 chars');
	// 		}
	// 	} else if (name === 'repassword') {
	// 		// if(value)
	// 	}
	// }

	render() {
		let { name, type, descText, placeholder, value, onChange, margin } = this.props;
		// let { value } = this.state;
		return (
			<div className='txt-field-container' style={{marginTop:margin}} >
				<label htmlFor={name}>
					<Txt color='#696F79'>
						{descText}
					</Txt>
				</label>
				<div className='container-txt-field'>
					<input className='txt-field' id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} />
					<span className='valid-span'>❌</span>
				</div>
			</div >
		);
	}
}

export default TxtField;