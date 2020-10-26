import React, { Component } from 'react';
import image from '../../images/Group 4.png';
import './style.css'
function Logo ({size}){
    return(
        <a href="#">
            <img className={size} src={image}/>
        </a>
    );
}

export default Logo;


