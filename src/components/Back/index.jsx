import React, { Component } from 'react';
import './style.css';
import arrow from '../../images/arrow.svg';
function Back() {
    return (
        <div className="container-back">
            <button className="back-btn">
                <img className='arrow-img' src={arrow} alt="" />
                Back
                </button>
        </div>
    );
}
export default Back;