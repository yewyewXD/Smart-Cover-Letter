import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import Eligible from './pages/Eligible.jsx'
import Ineligible from './pages/Ineligible.jsx'
import SelectBar from './components/SelectBar.jsx'

function App() {
  return (
    <BrowserRouter>
      <header>
        <SelectBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/eligible" />} />
          <Route path="/eligible" element={Eligible} />
          <Route path="/ineligible" element={Ineligible} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
