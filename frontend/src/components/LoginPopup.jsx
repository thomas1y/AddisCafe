import { useContext, useState } from "react";
import { assets } from "../assets/images/assets";
import "./LoginPopup.css";

import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Login");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;

    if (currentState === "Login") {
      newUrl += "/api/user/login";
      try {
        const response = await axios.post(newUrl, userData);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userName", response.data.name);
          localStorage.setItem("userRole", response.data.role); // ✅ Store user role
          setShowLogin(false);
        } else {
          alert(response.data.message);
        }
      } catch (err) {
        console.error("Login error:", err);
        alert("Login failed. Please try again.");
      }
    } else {
      newUrl += "/api/user/register";
      let response;
      try {
        response = await axios.post(newUrl, userData);
      } catch (error) {
        console.log("Registration error:", error);
        alert("Registration failed. Try again.");
        return;
      }

      if (response?.data?.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.name);
        localStorage.setItem("userRole", response.data.role); // ✅ Store user role
        setShowLogin(false);
        alert(response.data.message);
      } else {
        alert(response?.data?.message || "Registration failed");
      }
    }
  };

  return (
    <div className="login-popup-overlay">
      <form onSubmit={onLogin} className="login-popup-form">
        <div className="login-popup-header">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="login-popup-close"
          />
        </div>

        <div className="login-popup-inputs">
          {currentState === "Sign Up" && (
            <input
              type="text"
              placeholder="Enter your full name"
              required
              name="name"
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              className="login-popup-input"
            />
          )}
          <input
            type="email"
            placeholder="Enter your email address"
            required
            name="email"
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            className="login-popup-input"
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            name="password"
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            className="login-popup-input"
          />
        </div>

        <div className="login-popup-terms">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>

        <button type="submit" className="login-popup-submit-btn">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="login-popup-switch">
          {currentState === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")} className="login-popup-link">
                Click here.
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span onClick={() => setCurrentState("Sign Up")} className="login-popup-link">
                Create account.
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
