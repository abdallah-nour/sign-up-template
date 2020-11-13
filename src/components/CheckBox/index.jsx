import './style.css';
export default function CheckBox(props) {
  let { children, name, marginTop, error, checked, onChange } = props;
  return (
    <div className="container-check">
      <div className='popup-checkbox'>
        <span className='popup-txt-checkbox' id='popup-txt-checkbox' style={{ visibility: error && 'visible' }} >
          {error}
        </span>
      </div>
      <input name={name} className="checkbox" id={name} type='checkbox' checked={checked} onChange={onChange} style={{ marginTop: marginTop }}
      />
      <label className="checkbox-txt" htmlFor={name}>{children}</label>
    </div>
  );
}
