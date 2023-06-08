import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Blue from './components/Blue'
import Red from './components/Red'
import Tony from './components/Tony'
import Footer from './components/Footer'
import './App.css'
import './index.css'

function App() {
  return (
    <>
      <div id="container">
      
        <NavBar />
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/tony" element={<Tony />} />
          </Routes>
        </div>

        <div id="footer">
          <Footer />
        </div>
      </div>
      
    </>
  )
}

export default App
