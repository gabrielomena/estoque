import { useState } from 'react'
import './App.css'
import { Login } from './pages/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/cadastro" element={} */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
