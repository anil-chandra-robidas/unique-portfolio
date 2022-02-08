import react from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route exact path ="/unique-portfolio" element={<Home/>} />
            <Route exact path ="/about" element={<About/>} />
            <Route exact path ="/skills" element={<Skills />} />
            <Route exact path ="/experience" element={<Experience />} />
            <Route exact path ="/education" element={<Education />} />
            <Route exact path ="/portfolio" element={<Portfolio />} />
            <Route exact path ="/contact" element={<Contact/>} />
            <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
