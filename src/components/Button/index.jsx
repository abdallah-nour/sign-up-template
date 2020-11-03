import React, { Component } from 'react';
import './style.css';
class Button extends Component {
    render() {
        let { name, type, children, color, background, icon, marginTop } = this.props;
        return (
            <div className='container-btn'>
                <button name={name} type={type} className="btn" style={{ backgroundColor: background || '#1565D8', color: color || 'white', marginTop:marginTop }}>
                    <span >
                        <img className='icon' src={icon} alt='' />
                    </span>
                    {children}
                </button>
            </div>
        );
    }
}

export default Button;