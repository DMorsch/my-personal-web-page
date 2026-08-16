import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'
import About from './pages/About'
import Home from './pages/Home'
import Comments from './pages/Comments'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </>
  )
}

export default App
