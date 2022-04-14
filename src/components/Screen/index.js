import './index.scss'
import { Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Welcome from '../Welcome'
// import Logo from '../../assets/images/tomtomcat.png'

const Screen = () => (
  <>
    <div className="screen">
      <div className="overlay"></div>
    </div>
    <div className="screen">
      <div className="page fade-in">
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Welcome />} />
          </Routes>
          {/* <div className="image">
            <img src={Logo} alt="logo" />
          </div>
          <div className="btn-container">
            <button className="sign-up">Sign Up</button>
            <button className="login">Login</button>
          </div> */}
        </div>
        <div className="exit">╳</div>
      </div>
    </div>
  </>
)

export default Screen
