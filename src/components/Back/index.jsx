import React, { Component } from 'react';
import './style.css';
import arrow from '../../images/arrow.svg';
import Txt from '../Txt'
function Back() {
    return (
        <div className="container-back">
            <button className="back-btn">
                <img className='arrow-img' src={arrow} alt="" />
                <Txt color='#8692A6' >Back</Txt>
                </button>
        </div>
    );
}
export default Back;