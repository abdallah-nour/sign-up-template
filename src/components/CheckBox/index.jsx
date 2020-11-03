import React, { Component } from 'react';
import Txt from '../Txt'
import './style.css';
class CheckBox extends Component {
    state = {
        isChecked: false,
    }
    handleChange = e => {
        let { checked } = e.target;
        this.setState({ isChecked: checked });
    }
    render() {
        let { children, name, marginTop } = this.props;
        let { isChecked } = this.state;
        return (
            <div className="container-check">
                <input name={name} className="checkbox" id={name} type='checkbox' defaultChecked={false} onChange={this.handleChange} style={{marginTop:marginTop}}
                />
                <label className="checkbox-txt" htmlFor={name}>{children}</label>
            </div>
        );
    }
}

export default CheckBox;