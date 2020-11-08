import React from 'react';
import Txt from '../Txt'
import './style.css'
function OrTxt({margin}) {
    return (
        <div className="container-or-txt" style={{marginTop:margin, marginBottom:margin}}>
            <hr/>
            <Txt fontSize='14px' color='#bababa'>Or</Txt>
            <hr/>
        </div>
    );
}

export default OrTxt;