import './App.css'
import OhStudio from './pages/OH Studio/OhStudio'
import HapticStudio from './pages/HapticStudio/HapticStudio.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OhStudio />} />
          <Route path="/haptic" element={<HapticStudio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
