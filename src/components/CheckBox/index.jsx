import React, { Component } from 'react';
import './style.css';
class CheckBox extends Component {
    render() {
        return (
            <div className="container-check">
                <input className="checkbox" id="agree" type='checkbox' 
                />
                <span className='checkmark'></span>
                <label className="checkbox-txt" htmlFor="agree">I agree to terms & conditions</label>
            </div>
                
            
        );
    }
}

export default CheckBox;