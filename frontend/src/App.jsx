import { Routes, Route, useLocation } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

// Landing Page
import HomePage from './pages/LandingPage/HomePage';
import ClassPage from './pages/LandingPage/ClassPage';
import TestimonialPage from './pages/LandingPage/TestimonialPage';
import FaqPage from './pages/LandingPage/FaqPage';
import SyaratKetenPage from './pages/LandingPage/SyaratKetenPage';

// Login Page
import Register from './pages/LoginPage/Register';
import LoginPage from './pages/LoginPage/LoginPage';

// Dashboard
import Dashboard from './pages/DashboardPage/Dashboard';

function App() {
  const location = useLocation();


  const isDashboardRoute = location.pathname === '/dashboard';

  return (
    <div>
      
      {!isDashboardRoute && <NavbarComponent />}

      <Routes>

        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={ClassPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratKetenPage} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={LoginPage} />

        <Route path="/dashboard" Component={Dashboard} />
      </Routes>


      <FooterComponent />
    </div>
  );
}

export default App;
