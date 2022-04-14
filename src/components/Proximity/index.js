import './index.scss'
import { useEffect, useState } from 'react'

const Proximity = () => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  }, [])
  return (
    <div className="proximity">
      {latitude}, {longitude}
    </div>
  )
}

export default Proximity
