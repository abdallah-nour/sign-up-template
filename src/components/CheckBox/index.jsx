import React, { Component } from 'react';
// import './style.css';
class CheckBox extends Component {
    render() {
        return (
            <div className="container-check">
                <input className="checkbox" type='checkbox' checked/>
                <label >I agree to terms & conditions</label>
            </div>
        );
    }
}

export default CheckBox;