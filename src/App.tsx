import './App.css';
import Nav from './component/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Projects from './views/Projects';
import Skills from './views/Skills';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/portfolio'  element={<Home />} />
        <Route path='/about'  element={<About />} />
        <Route path='/contact'  element={<Contact />} />
        <Route path='/projects'  element={<Projects />} />
        <Route path='/Skills'  element={<Skills />} />

      </Routes>
    </Router>
  );
}

export default App;
