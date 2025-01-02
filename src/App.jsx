import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Main from './layouts/main/Main'
import Services from './layouts/services/Services'
import Works from './layouts/works/Works'
import Aboutus from './layouts/aboutus/Aboutus'
import Contactus from './layouts/contactus/Contactus'


import mainBannerImg from './assets/images/architecture-gf.svg';
import smallBannerImg from './assets/images/architecture.svg';

function App() {

  return (
    <>
      <Router>
        <Navbar></Navbar>
        
        <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route path="/services/" element={<Services></Services>} />
          <Route path="/ourwork/" element={<Works></Works>} />
          <Route path="/aboutus/" element={<Aboutus></Aboutus>} />
          <Route path="/contactus/" element={<Contactus></Contactus>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
