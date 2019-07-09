import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="row">
    <nav className="navbar bg-light w-100">
      <Link to="/" className="mx-auto" style={{ textDecoration: 'none' }}>
        <p className="text-dark h3 nounderline">Smart Variant Filtering</p>
      </Link>
    </nav>
  </div>
);

export default Header;
