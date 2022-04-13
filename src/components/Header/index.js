import { Link } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/tomtomcat.png'

const Header = () => {
  return (
    <div className="header">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <h1>TOMTOMCAT</h1>
    </div>
  )
}

export default Header
