import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <FaBook className="logo-icon" />
          <span>LMS Platform</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/courses" className="nav-link" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link to="/dashboard" className="nav-link" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/login" className="nav-link login-btn" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/register" className="nav-link register-btn" onClick={() => setIsOpen(false)}>Register</Link>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;