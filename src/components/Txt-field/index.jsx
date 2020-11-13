import Txt from '../Txt'
import './style.css';
export default function TxtField(props) {
  let { name, type, descText, placeholder, margin, error, value, onChange, onBlur, onClick } = props;
  return (
    <div className='txt-field-container' style={{ marginTop: margin }} >
      <label htmlFor={name}>
        <Txt color='#696F79'>
          {descText}
        </Txt>
      </label>
      <div className='popup' name={name} onClick={onClick} >
        <span className='popup-txt' name={name} onClick={onClick} style={{ visibility: error && 'visible' }} >
          {error}
        </span>
      </div>
      <div className='container-txt-field'>
        <input className='txt-field' id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur} onClick={onClick} value={value} />
        <span className='valid-span' style={{ visibility: error && 'visible' }}>❌</span>
        {}
      </div>
    </div >
  );
}