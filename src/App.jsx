import { useState } from 'react'
import './App.css'
import "./CSS/utility.css"
import Login from './pages/Login'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      {/* <Login/> */}
    </>
  )
}

export default App
