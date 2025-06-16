import React, { useState } from "react";
import { Link } from "react-router-dom"; // 🔁 Add this
import logo from "../assets/coffee-cup.gif";
import { toast } from "sonner";

const Login = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in both fields");
      return;
    }

    // Do your login logic here (e.g., API call)
    // If login successful:
    setIsLoggedIn(true); // <-- Update login state
    navigate("/dashboard"); // or any protected route

    toast.success("Login successful!");
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "400px" }}>
        <div className="text-center mb-3">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "64px", height: "64px" }}
          />{" "}
          Tah Kape!
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-envelope-fill"></i>
            </span>
            <div className="form-floating flex-grow-1">
              <input
                type="email"
                className="form-control"
                id="login_email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="login_email">Email Address</label>
            </div>
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text">
              <i className="bi bi-lock-fill"></i>
            </span>
            <div className="form-floating flex-grow-1">
              <input
                type="password"
                className="form-control"
                id="login_password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="login_password">Password</label>
            </div>
          </div>

          <div className="mb-3 text-end">
            <Link to="/forgot-password" className="text-decoration-none small">
              Password mo parang feelings niya — wala na.
            </Link>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>

        <div className="mt-3 text-center">
          <small>
            Wala ka pang account?{" "}
            <Link to="/register">Baka ma-left out ka!</Link>
          </small>
        </div>
        <div className="mt-3 text-center">
          <small>
            Dev Momond @ {currentYear}
            <br /> By logging in, you agree to our
          </small>{" "}
          <br />
          <small>
            <Link to="/terms" className="text-decoration-none">
              Terms of Service
            </Link>{" "}
            |
            <Link to="/privacy" className="text-decoration-none">
              {" "}
              Privacy Policy
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
