import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/login/Login'
import { Cadastro } from "./pages/cadastro/Cadastro"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
