
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ThemedHolidaysPage from './pages/ThemedHolidaysPage';
import Corporates from './pages/Corporates';
import PackagesPage from './pages/PackagesPage'
import LocalDestinations from './pages/LocalDestinations';



import About from './pages/About';
import Contact from './pages/Contact';
import Local from './pages/Local';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
       
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/PackagesPage' element ={<PackagesPage/>}/>
        <Route path='/ThemedHolidaysPage' element ={<ThemedHolidaysPage/>}/>
        <Route path='/Corporates' element ={<Corporates/>}/>
        <Route path='/LocalDestinations' element ={<LocalDestinations/>}/>
        <Route path='/Local' element ={<Local/>}/>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
       
        
      </Routes>
    </Router>
  );
}

export default App;

