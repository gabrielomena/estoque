import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import { Login } from './pages/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>} />
     
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
