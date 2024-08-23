import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import YarnPage from './Components/YarnPage';
import Tapes from './Components/Tapes';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import ScrollToTop from './ScrollToTop';
import Topbar from './Components/TopBar';
import GetFreeQuote from './Components/GetFreeQuote';

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Topbar />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/yarns' element={<YarnPage />} />
          <Route path='/tapes' element={<Tapes />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/getFreeQuote' element={<GetFreeQuote />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
