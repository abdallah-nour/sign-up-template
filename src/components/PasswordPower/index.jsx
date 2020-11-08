import React, { Component } from 'react'
import Txt from '../Txt'

import './style.css'
export default class PasswordPower extends Component {
    render() {
        let { color, width, children } = this.props;
        return (
            <div className='power-container' style={{ display: this.props.visibility && 'block' }}>
                <div className='fill-container'>
                    <div className='fill' style={{ backgroundColor: color, width: width }}>
                    </div>
                </div>
                <Txt color={color} fontWeight='500'>{children}</Txt>
            </div >
        );
    }
}