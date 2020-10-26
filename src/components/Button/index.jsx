import React, { Component } from 'react';
import './style.css';
class Button extends Component {
    render() {
        return (
            <div className='container-btn'>
                <label className="label">
                    Email address*
                </label> <br></br>
                <input className='btn' type='text' placeholder='Enter email address' />
            </div>
        );
    }
}

export default Button;