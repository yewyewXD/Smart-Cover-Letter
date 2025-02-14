import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import Eligible from './pages/Eligible.jsx'
import Ineligible from './pages/Ineligible.jsx'
import SelectBar from './components/SelectBar.jsx'

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <SelectBar />
        </header>
        <main>
          <Routes>
            <Route
              path="/Smart-Cover-Letter/"
              element={<Navigate to="/Smart-Cover-Letter/eligible" />}
            />
            <Route path="/Smart-Cover-Letter/eligible" element={<Eligible />} />
            <Route
              path="/Smart-Cover-Letter/ineligible"
              element={<Ineligible />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
