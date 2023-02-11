import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import { Login } from './pages/login/Login'
import Home from './pages/productList/Home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/listar" element={<Home/>} />   
      <Route path="/" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
