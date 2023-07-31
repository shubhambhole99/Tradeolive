import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Courses} from './pages/Courses'
import {BookNow} from './pages/BookNow'

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import {Carousel} from './Components/Carousel'

const images=[`https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp`,`https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp`,`https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp`,`https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp`,`https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp`]

function App() {
  

  return (
    // <Home></Home>
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/courses" element={<Courses />}/>
        <Route path="/booknow" element={<BookNow />}/>
      </Routes>
    </Router>

    
    // <Carousel></Carousel>
   
  )
}

export default App
