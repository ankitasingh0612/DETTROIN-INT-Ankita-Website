import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import LearningExperience from './pages/LearningExperience';
import Infrastructure from './pages/Infrastructure';
import DayInSchool from './pages/DayInSchool';
import Announcements from './pages/Announcements';
import NewsEvents from './pages/NewsEvents';
import Alumni from './pages/Alumni';
import Careers from './pages/Careers';
import CEE from './pages/CEE';
import GurgaonCampus from './pages/GurgaonCampus';
import SchoolProfile from './pages/SchoolProfile';
import Login from './pages/Login';
import CollegePlacements from './pages/CollegePlacements';
import Chatbot from './components/Chatbot';
import { X, Lock, User, Eye, EyeOff } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginTab, setLoginTab] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [academicsTab, setAcademicsTab] = useState('junior');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('dark_mode') === 'true';
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'academics':
        return <Academics activeTab={academicsTab} setActiveTab={setAcademicsTab} />;
      case 'admissions':
        return <Admissions />;
      case 'contact':
        return <Contact />;
      case 'learning-experience':
        return <LearningExperience />;
      case 'infrastructure':
        return <Infrastructure />;
      case 'day-in-school':
        return <DayInSchool />;
      case 'announcements':
        return <Announcements />;
      case 'news-events':
        return <NewsEvents />;
      case 'alumni':
        return <Alumni />;
      case 'careers':
        return <Careers />;
      case 'cee':
        return <CEE />;
      case 'gurgaon-campus':
        return <GurgaonCampus />;
      case 'school-profile':
        return <SchoolProfile />;
      case 'college-placements':
        return <CollegePlacements />;
      case 'login':
        return <Login />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-theme' : ''}`}>
      {/* Dynamic Nav Header */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        setLoginOpen={setLoginOpen} 
        setAcademicsTab={setAcademicsTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Page Area */}
      <main>
        {renderPage()}
      </main>

      {/* Dynamic Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Floating Chatbot Helpdesk Widget */}
      <Chatbot />
    </div>
  );
}

export default App;
