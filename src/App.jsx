import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import FemaleRights from './pages/FemaleRights';
import ChildrensRights from './pages/ChildrensRights';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/female-rights" element={<FemaleRights />} />
            <Route path="/childrens-rights" element={<ChildrensRights />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
