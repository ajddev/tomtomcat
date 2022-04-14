import { Outlet } from 'react-router-dom'
import './index.scss'
import Header from '../Header'
// import Map from '../Map'
import Navigation from '../Navigation'
// import Screen from '../Screen'

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Navigation />
    </div>
  )
}

export default Layout
