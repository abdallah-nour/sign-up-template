import React, { Component } from 'react';
import './style.css';
class CheckBox extends Component {
    render() {
        let {text}= this.props;
        return (
            <div className="container-check">
                <input className="checkbox" id="agree" type='checkbox' 
                />
                <span className='checkmark'></span>
                <label className="checkbox-txt" htmlFor="agree">{text}</label>
            </div>
                
            
        );
    }
}

export default CheckBox;