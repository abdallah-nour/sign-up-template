import React, { Component } from 'react';
import './style.css';
class TxtField extends Component {
    render() {
        return (
            <div className='container-txt-field'>
                <label className="label">
                    Email address*
                </label> <br></br>
                <input className='txt-field' type='text' placeholder='Enter email address' />
            </div>
        );
    }
}

export default TxtField;