
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import TeamPage from './pages/TeamPage'
import AreaPage from './pages/AreaPage'
import AboutPage from './pages/AboutPage'
import EventsPage from './pages/EventsPage'
import MembershipPage from './pages/MembershipPage'
import PackagesPage from './pages/PackagesPage'
import MessagesPage from './pages/MessagesPage'
import JesusPage from './pages/JesusPage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/team' element={<TeamPage/>} />
        <Route path='/area' element={<AreaPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/events' element={<EventsPage/>} />
        <Route path='/membership' element={<MembershipPage/>} />
        <Route path='/packages' element={<PackagesPage/>} />
        <Route path='/message' element={<MessagesPage/>} />
        <Route path='/jesus' element={<JesusPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
