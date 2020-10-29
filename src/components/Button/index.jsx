import React, { Component } from 'react';
import './style.css';
class Button extends Component {
    render() {
        let { text, color, background, icon } = this.props;
        return (
            <div className='container-btn'>
                <button className="btn" style={{ backgroundColor: background || '#1565D8', color: color || 'white' }}>
                    <span >
                        <img className='icon' src={icon} alt='' />
                    </span>
                    {text}
                </button>
            </div>
        );
    }
}

export default Button;