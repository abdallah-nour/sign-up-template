import Txt from '../Txt'
import './style.css'

export default function PasswordPower({ color, width, visibility, children }) {
  return (
    <div className='power-container' style={{ display: visibility && 'block' }}>
      <div className='fill-container'>
        <div className='fill' style={{ backgroundColor: color, width: width }}>
        </div>
      </div>
      <Txt color={color} fontWeight='500'>{children}</Txt>
    </div >
  );
}
