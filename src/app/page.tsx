'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from './components/LoadingSpinner';

// Dynamic imports for better performance
const Navbar = dynamic(() => import('./components/Navbar'), { 
  loading: () => <LoadingSpinner message="Loading navigation..." /> 
});
const Hero = dynamic(() => import('./components/Hero'), { 
  loading: () => <LoadingSpinner message="Loading hero section..." /> 
});
const Header = dynamic(() => import('./components/Header'), { 
  loading: () => <LoadingSpinner message="Loading header..." /> 
});
const About = dynamic(() => import('./components/About'), { 
  loading: () => <LoadingSpinner message="Loading about section..." /> 
});
const Achievements = dynamic(() => import('./components/Achievements'), { 
  loading: () => <LoadingSpinner message="Loading achievements..." /> 
});
const Research = dynamic(() => import('./components/Research'), { 
  loading: () => <LoadingSpinner message="Loading research projects..." /> 
});
const Publications = dynamic(() => import('./components/Publications'), { 
  loading: () => <LoadingSpinner message="Loading publications..." /> 
});
const CallToAction = dynamic(() => import('./components/CallToAction'), { 
  loading: () => <LoadingSpinner message="Loading..." /> 
});
const Contact = dynamic(() => import('./components/Contact'), { 
  loading: () => <LoadingSpinner message="Loading contact information..." /> 
});
const Footer = dynamic(() => import('./components/Footer'), { 
  loading: () => <LoadingSpinner message="Loading footer..." /> 
});
const ScrollToTop = dynamic(() => import('./components/ScrollToTop'), { 
  loading: () => null 
});

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage if available, otherwise use system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Update the document's class when theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
    // Save preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      {/* Navbar is integrated with Header to avoid duplication */}
      <Hero />
      <About />
      <Achievements />
      <Research />
      <Publications />
      <CallToAction />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
