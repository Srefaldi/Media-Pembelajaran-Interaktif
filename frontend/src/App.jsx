import { Routes, Route } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

// Landing Page
import HomePage from './pages/LandingPage/HomePage';
import ClassPage from './pages/LandingPage/ClassPage';
import TestimonialPage from './pages/LandingPage/TestimonialPage';
import FaqPage from './pages/LandingPage/FaqPage';
import SyaratKetenPage from './pages/LandingPage/SyaratKetenPage';


// Login Page
import RegisterPage from './pages/LoginPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
 return (
  <div>
    <NavbarComponent/>
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/kelas" Component={ClassPage}/>
      <Route path="/testimonial" Component={TestimonialPage}/>
      <Route path="/faq" Component={FaqPage}/>
      <Route path="/syaratketen" Component={SyaratKetenPage}/>
      <Route path="/register" Component={RegisterPage}/>
      <Route path="/login" Component={LoginPage}/>
    </Routes>
    <FooterComponent/>
  </div>
 );
}

export default App
