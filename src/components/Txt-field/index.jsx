import React, { Component } from 'react';
import './style.css';
class TxtField extends Component {
    render() {
        let { descText, placeholder } = this.props;
        return (
            <div className='container-txt-field'>
                <label className="label">
                    {descText}
                </label> 
                <input className='txt-field' type='text' placeholder={placeholder} />
            </div>
        );
    }
}

export default TxtField;