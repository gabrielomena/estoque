import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import { Login } from './pages/login/Login'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/listar" element={<Navbar/>} />   
      <Route path="/" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
