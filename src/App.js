import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Postlists from './components/Postlists';
import Navbar from './components/Navbar';
import About  from './containers/About/About';
import Contact from './containers/Contact/Contact';
// import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      
      <BrowserRouter>
      <Navbar />
      <Routes>
      
        
        <Route path="/" element={<Postlists />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>

      <Footer />
      
    </div>
  );
}

export default App;
