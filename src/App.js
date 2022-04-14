import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Map from './components/Map'
import Proximity from './components/Proximity'
import Geofence from './components/Geofence'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Map />} />
          <Route path="proximity" element={<Proximity />} />
          <Route path="geofence" element={<Geofence />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
