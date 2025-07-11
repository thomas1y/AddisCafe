import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { StoreContext } from "../context/StoreContext.jsx";
import { navs } from "../data/data";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownTimeout = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, token, setToken } = useContext(StoreContext);

  const getTotalCartItems = () =>
    Object.values(cartItems).reduce((total, qty) => total + (qty > 0 ? qty : 0), 0);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleScrollTo = (e, target) => {
    e.preventDefault();
    const id = target.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
      window.history.replaceState(null, null, target);
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("hero");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      handleScrollTo(e, "#hero");
    }
    setOpen(false);
  };

  const isActive = (target) => {
    if ((!location.hash || location.hash === "#hero") && target === "#hero") {
      return true;
    }
    return location.hash === target;
  };

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery.trim()}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  return (
    <div id="navbar">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <div className="logo">
          <Link to="/" onClick={handleHomeClick}>
            <img src="/images/logo.png" alt="Logo" />
          </Link>
        </div>

        <div className={`navbar order-last order-lg-0 ${open ? "navbar-mobile" : ""}`}>
          <ul>
            {navs.map(({ id, name, target }) => (
              <li key={id}>
                {name === "Home" ? (
                  <a
                    href="#hero"
                    className={`nav-link scrollto ${isActive("#hero") ? "active" : ""}`}
                    onClick={handleHomeClick}
                  >
                    <i className="bi bi-house-door-fill"></i>
                  </a>
                ) : (
                  <a
                    href={target}
                    className={`nav-link scrollto ${isActive(target) ? "active" : ""}`}
                    onClick={(e) => handleScrollTo(e, target)}
                  >
                    {name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <i className="bi bi-list mobile-nav-toggle" onClick={() => setOpen(!open)}></i>
        </div>

        <div className="navbar-right d-flex align-items-center">
          <div className="navbar-icon position-relative">
            <FaSearch
              className="search-icon"
              onClick={() => setShowSearch(!showSearch)}
              style={{ cursor: "pointer" }}
            />
            {showSearch && (
              <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search food..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </form>
            )}
          </div>

          <div className="navbar-icon ms-3 position-relative">
            <Link to="/cart">
              <FaShoppingCart className="cart-icon" style={{ color: "#cda45e" }} />
            </Link>
            {getTotalCartItems() > 0 && (
              <span className="cart-badge">{getTotalCartItems()}</span>
            )}
          </div>

          {token ? (
            <div
              className="account-wrapper"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="account-label">
                Hello, {localStorage.getItem("userName") || "User"} ▾
              </div>

              <div className={`dropdown-content ${showDropdown ? "show" : ""}`}>
                <Link to="/myorders" className="dropdown-link">
                  My Orders
                </Link>
                <button className="dropdown-link logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button className="btn btn-signup ms-3" onClick={() => setShowLogin(true)}>
              Sign Up
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
