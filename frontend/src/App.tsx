import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'
import About from './components/Header/About'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
