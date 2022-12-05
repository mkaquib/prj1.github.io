import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Headers from './components/Headers';
import Home from './components/Home';
import './styles/apps.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/footer.scss'
import './styles/contact.scss'
import './styles/mediaquery.scss'
import Contact from './components/Contact';
import Services from './components/Services';
function App() {
  return (
    <>
    <Router>
    <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App