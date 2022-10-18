import './App.css';
import Nav from './component/Nav'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Projects from './views/Projects';
import Skills from './views/Skills';
import Container from '@mui/material/Container'




function App() {
  return (
    <Router>

      <Nav />
      <Container maxWidth='xl' sx={{ mb: 2.5, mt: 15 }}>
        <Routes>
          <Route caseSensitive path='/' element={
            <Home />
          } />
          <Route caseSensitive path='/about' element={<About />} />
          <Route caseSensitive path='/contact' element={<Contact />} />
          <Route caseSensitive path='/projects' element={<Projects />} />
          <Route caseSensitive path='/skills' element={<Skills />} />
        </Routes>
      </Container>


    </Router>
  );
}

export default App;
