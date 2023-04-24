import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <header>
      <nav className="navbar">
        <ul>
          <div onClick={() => navigate('/')}>!!!</div>
          <li>
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/page1" className="navbar__link">
              Page1
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
