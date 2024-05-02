import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import Button from "./shared/Button"
import logoImage from './images/Logo.png'

const Header = ({ text, bgColor, textColor }) => {

  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header className="header"style={headerStyle}>
      <div className="container">
        <div className="header-flex">

         <img src={logoImage} alt="Logo" />
        
          <div className="cont-buttons">
            <Button className="btn" version="secondary">register</Button>
            <Button className="btn" version="primary">Log In</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  bgColor: "#F9FDFB",
  textColor: "#ffffff"
}

Header.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header
