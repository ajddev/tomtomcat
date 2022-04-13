import '@tomtom-international/web-sdk-maps/dist/maps.css'
import { useRef, useEffect, useState } from 'react'
import * as tt from '@tomtom-international/web-sdk-maps'
import './index.scss'

const Map = () => {
  const mapElement = useRef()
  const [map, setMap] = useState({})
  const [longitude, setLongitude] = useState(-86.775)
  const [latitude, setLatitude] = useState(36.164)

  useEffect(() => {
    const element = document.createElement('div')
    element.className = 'marker'

    const nashville = { lng: longitude, lat: latitude }
    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: nashville,
      zoom: 10,
    })

    setMap(map)

    const addMarker = () => {
      new tt.Marker({
        draggable: true,
        element: element,
      })
        .setLngLat(nashville)
        .addTo(map)
    }
    addMarker()

    return () => map.remove()
  }, [longitude, latitude])

  return <>{map && <div ref={mapElement} className="map"></div>}</>
}
export default Map
