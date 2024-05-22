import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Calculator</h2>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

