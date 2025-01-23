import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Home />} /> {/* Home route */}
        </Routes>
    </Router>
    </>
  )
}

export default App
