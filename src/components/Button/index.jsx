import './style.css';
export default function Button(props) {
  let { name, type, children, color, background, icon, marginTop } = props;
  return (
    <div className='container-btn'>
      <button name={name} type={type} className="btn" style={{ backgroundColor: background || '#1565D8', color: color || 'white', marginTop: marginTop }}>
        <span >
          <img className='icon' src={icon} alt='' />
        </span>
        {children}
      </button>
    </div>
  );
}
