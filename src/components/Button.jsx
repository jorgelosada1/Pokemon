import '../sass/Button.scss'
const Button = (props) => {
  return (
    <div className='button__box'>
      <button className="button" onClick={props.handleClick}>{props.icon}</button>
      <div className='button__shodow'></div>
    </div>
  )
}

export {Button}
