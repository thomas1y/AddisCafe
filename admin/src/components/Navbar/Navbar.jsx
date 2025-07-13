import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from "./../../assets/assets";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");

    // Redirect to frontend home URL
    window.location.href = "https://addiscafe-vkvw.onrender.com";
  };

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="logo" />

      <div
        className="profile-wrapper"
        onClick={() => setShowDropdown(!showDropdown)}
        style={{ position: "relative", cursor: "pointer" }}
      >
        <img className="profile" src={assets.profile_image} alt="profile" />

        {showDropdown && (
          <div
            className="dropdown-menu"
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              borderRadius: "4px",
              padding: "8px",
              zIndex: 1000,
            }}
          >
            <button
              onClick={handleLogout}
              style={{
                background: "transparent",
                border: "none",
                color: "#333",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
