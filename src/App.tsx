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
        <Route caseSensitive path='/portfolio'  element={<Home />} />
        <Route caseSensitive path='/about'  element={<About />} />
        <Route caseSensitive path='/contact'  element={<Contact />} />
        <Route caseSensitive path='/projects'  element={<Projects />} />
        <Route caseSensitive path='/skills'  element={<Skills />} />

      </Routes>
    </Router>
  );
}

export default App;
