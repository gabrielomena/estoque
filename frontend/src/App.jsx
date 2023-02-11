import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/listar" element={<Navbar/>} />   
    </Routes>
  </BrowserRouter>
  )
}

export default App
