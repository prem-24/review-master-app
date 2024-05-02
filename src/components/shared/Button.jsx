
const Button = ({ type, version, children}) => {
  return (
    <button type={type} className={`btn btn-${version}`}>
        { children }
    </button>
  )
}

export default Button