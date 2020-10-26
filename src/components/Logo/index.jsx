import React, { Component } from 'react';
import image from '../../images/Group 4.png';
import './style.css'
function Logo ({size}){
    return(
        <img className="logo" src={image}/>
    );
}

export default Logo;


