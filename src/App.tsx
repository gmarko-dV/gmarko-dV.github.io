import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Entities from './components/Entities'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entities" element={<Entities />} />
      </Routes>
    </>
  )
}

export default App

