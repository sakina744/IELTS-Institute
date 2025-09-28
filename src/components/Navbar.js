import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="logo">
          <img src="/assets/logo.png" alt="IELTS Institute Logo" className="logo-img" />
        </div>
        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#features">Courses</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
