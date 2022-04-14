import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapLocationDot,
  faRoute,
  faChartArea,
} from '@fortawesome/free-solid-svg-icons'

const Navigation = () => (
  <>
    <div className="navigation">
      <NavLink exact="true" activeclassname="active" className="nav-btn" to="/">
        <FontAwesomeIcon icon={faMapLocationDot} />
        <h1>Map</h1>
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="nav-btn"
        to="/proximity"
      >
        <FontAwesomeIcon icon={faRoute} />
        <h1>Proximity</h1>
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="nav-btn"
        to="/geofence"
      >
        <FontAwesomeIcon icon={faChartArea} />
        <h1>Geofence</h1>
      </NavLink>
    </div>
  </>
)
export default Navigation
