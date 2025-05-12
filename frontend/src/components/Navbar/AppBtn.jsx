import React, { useState } from 'react';
import './Navbar.css';
import { navs } from '../../data/data';

const Navbar = () => {
  const [navList, setNavList] = useState(navs);
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleScrollTo = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false); // Close menu on link click
  };

  return (
    <div id="navbar">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="/">AddisCafe</a>
        </h1>

        {/* ✅ Toggle icon OUTSIDE navbar */}
        <i
          className="bi bi-list mobile-nav-toggle"
          onClick={handleToggleMenu}
        ></i>

        {/* ✅ Navbar drawer */}
        <div
          className={`navbar order-last order-lg-0 ${
            open ? 'navbar-mobile' : ''
          }`}
        >
          <ul>
            {navList.map((nav) => (
              <li key={nav.id}>
                <a
                  className={`nav-link scrollto ${nav.active ? 'active' : ''}`}
                  onClick={() => handleScrollTo(nav.target)}
                >
                  {nav.name === 'Home' ? (
                    <i className="bi bi-house-door-fill"></i>
                  ) : (
                    nav.name
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



