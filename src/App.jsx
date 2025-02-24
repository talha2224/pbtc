
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import TeamPage from './pages/TeamPage'
import AreaPage from './pages/AreaPage'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/team' element={<TeamPage/>} />
        <Route path='/area' element={<AreaPage/>} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
