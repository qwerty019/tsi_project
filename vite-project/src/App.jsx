import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
