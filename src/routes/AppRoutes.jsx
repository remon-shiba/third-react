import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";

// Make sure to import all pages
import Login from "../pages/Login";
import Registration from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import About from "../pages/About";

const AppRoutes = ({ setIsLoggedIn, isLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <About />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
