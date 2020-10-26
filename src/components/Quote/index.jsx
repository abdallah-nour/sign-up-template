import React, { Component } from 'react';
import image from '../../images/Quote.svg';
import image2 from '../../images/Quote2.svg';
import './style.css';
function Quote() {
  return (
    <div className='container-q'>
      <img className='quote-img' src={image} alt='' />
      <p class="quote-txt">
        I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I
        imagine a lot of things about their lives... about the day ahead of them.
        </p>
        <p className='quote-txt-writer'>
          Hideo Kojima
        </p>
      <img className='quote-img2' src={image2} alt='' />
    </div>
  );
}

export default Quote;