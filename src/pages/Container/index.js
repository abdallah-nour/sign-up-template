import React from 'react';
import './style.css'
function Container({maxWidth, children}) {
    return (
        // <div className="container">
            <div className='content' style={{maxWidth:maxWidth}}>
                {children}
            </div>
        // </div>
    );
}
export default Container;
