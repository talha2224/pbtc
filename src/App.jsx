
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import TeamPage from './pages/TeamPage'
import EventsPage from './pages/EventsPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/team' element={<TeamPage/>} />
        <Route path='/events' element={<EventsPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
