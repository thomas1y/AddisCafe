import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { navs } from '../../data/data';
import { FaSearch, FaShoppingCart } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
  const [navList, setNavList] = useState(navs);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() =>{
    window.addEventListener('scroll',()=>{
      setScroll(window.scrollY);
    });
    return()=>{
      window.removeEventListener('scroll',()=>{
        setScroll(window.scrollY);
      })
    }
  }, [scroll]);
    
  const handleToggleMenu = () => {
    setOpen(!open);
  };
  const handleScrollTo = (section) => {};
  const handleNavActive = () => {};

  return (
    <div id="navbar">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="/">AddisCafe</a>
        </h1>

        <div
          className={`navbar order-last order-lg-0 ${open ? 'navbar-mobile' : ''}`}
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

          {/* Mobile Menu Toggle Icon */}
          <i
            className="bi bi-list mobile-nav-toggle"
            onClick={handleToggleMenu}
          ></i>
        </div>

        {/* Added section to the right side of the navbar */}
        <div className="navbar-right d-flex align-items-center">
          {/* Search Icon */}
          <div className="navbar-icon">
            <FaSearch className="search-icon" />
          </div>

          {/* Cart Icon */}
          <div className="navbar-icon ms-3">
            <FaShoppingCart className="cart-icon" />
          </div>

          {/* Sign Up Button */}
          <button className="btn btn-signup ms-3">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
