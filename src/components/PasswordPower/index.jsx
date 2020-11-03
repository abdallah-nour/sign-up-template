import Txt from '../Txt'

import './style.css'
export default function PasswordPower({color, width}) {
    return (
        <div className='power-container'>
            <div className='fill-container'>
                <div className='fill' style={{backgroundColor:color, width:width}}>
                </div>
            </div>
            <Txt color={color} fontWeight='500'>Not bad but you know you can do it better</Txt>
        </div>
    );
}