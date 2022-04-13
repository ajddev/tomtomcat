import { Link } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapLocationDot,
  faRoute,
  faChartArea,
} from '@fortawesome/free-solid-svg-icons'

const Navigation = () => (
  <div className="navigation">
    <Link className="nav-btn active" to="/">
      <FontAwesomeIcon icon={faMapLocationDot} />
      <h1>Map</h1>
    </Link>
    <Link className="nav-btn" to="/">
      <FontAwesomeIcon icon={faRoute} />
      <h1>Proximity</h1>
    </Link>
    <Link className="nav-btn" to="/">
      <FontAwesomeIcon icon={faChartArea} />
      <h1>Geofence</h1>
    </Link>
  </div>
)
export default Navigation
