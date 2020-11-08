import React, { Component } from 'react';
import Txt from '../Txt'
import './style.css';
class TxtField extends Component {
	state = {
		error: '',
	}
	// updateValue = (e) => {
	// 	let { name, value } = e.target;
	// 	this.setState({ name: name, value: value });
	// }

	render() {
		let { name, type, descText, placeholder, margin, error, errorClick, value } = this.props;

		return (
			<div className='txt-field-container' style={{ marginTop: margin }} >
				<label htmlFor={name}>
					<Txt color='#696F79'>
						{descText}
					</Txt>
				</label>
				<div className='popup' onClick={errorClick}>
					<span className='popup-txt' style={{ visibility: error && 'visible' }} >
						{error}
					</span>
				</div>
				<div className='container-txt-field'>
					<input className='txt-field' id={name} name={name} type={type} placeholder={placeholder} />
					<span className='valid-span' style={{ visibility: error && 'visible' }}>❌</span>
					{}
				</div>
			</div >
		);
	}
}

export default TxtField;