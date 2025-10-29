import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Index from './pages/Index';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
 <Routes>
  <Route path="/" element={<Index />} />
</Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
