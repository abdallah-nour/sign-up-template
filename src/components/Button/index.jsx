import React, { Component } from 'react';
import './style.css';
class Button extends Component {
    render() {
        return (
            <div className='container-btn'>
                <button className="btn" >
                    Register Account
                </button>
            </div>
        );
    }
}

export default Button;