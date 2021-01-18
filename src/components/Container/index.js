import React from 'react';
import './style.css'
function Container({maxWidth, children}) {
    return (
            <div className='container' style={{maxWidth:maxWidth}}>
                {children}
            </div>
    );
}
export default Container;
