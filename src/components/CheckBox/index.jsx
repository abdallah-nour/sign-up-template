import React, { Component } from 'react';
import Txt from '../Txt'
import './style.css';
class CheckBox extends Component {
    render() {
        let { children, name, marginTop, error, checked, onChange } = this.props;
        return (
            <div className="container-check">
                <div className='popup-checkbox'>
                    <span className='popup-txt-checkbox' id='popup-txt-checkbox' style={{ visibility: error && 'visible' }} >
                        {error} 
                    </span>
                </div>
                <input name={name} className="checkbox" id={name} type='checkbox' checked={checked} onChange={onChange} style={{ marginTop: marginTop }}
                />
                <label className="checkbox-txt" htmlFor={name}>{children}</label>
            </div>
        );
    }
}

export default CheckBox;