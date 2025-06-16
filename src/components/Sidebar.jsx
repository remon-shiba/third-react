import { useState } from "react"; // ✅ Add this import
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/meteor-rain.gif";
import PopupMessage from "./PopupMessage.jsx";
import { toast } from "sonner";

import {
  FaHome,
  FaTachometerAlt,
  FaInfoCircle,
  FaUserPlus,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const toggleSidebar = () => setCollapsed(!collapsed);
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success("Logged out successfully!", { id: "logout-success" });
    navigate("/login");
  };

  return (
    <div
      className="bg-dark text-white vh-100 d-flex flex-column align-items-start transition-sidebar"
      style={{
        width: collapsed ? "60px" : "220px",
        transition: "width 0.3s ease",
        overflowX: "hidden",
      }}
    >
      <button
        className="btn btn-outline-light m-2 w-80"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      <div
        className="d-flex align-items-center ps-3 pe-3 mb-3"
        style={{
          height: "50px",
          width: "100%",
          transition: "opacity 0.5s ease",
        }}
      >
        <img
          className="me-2 border border-1 rounded"
          src={Logo}
          alt="logo"
          style={{ width: "25px", height: "25px" }}
        />
        {!collapsed && <span className="fs-4 fw-bold">Momond</span>}
      </div>

      <ul className="nav flex-column w-100">
        <SidebarLink
          to="/home"
          icon={<FaHome />}
          label="Home"
          collapsed={collapsed}
        />
        <SidebarLink
          to="/dashboard"
          icon={<FaTachometerAlt />}
          label="Dashboard"
          collapsed={collapsed}
        />
        <SidebarLink
          to="/about"
          icon={<FaInfoCircle />}
          label="About"
          collapsed={collapsed}
        />
        <SidebarLink
          to="/register"
          icon={<FaUserPlus />}
          label="Register"
          collapsed={collapsed}
        />
        <SidebarLink
          to="/"
          icon={<FaSignOutAlt />}
          label="Logout"
          collapsed={collapsed}
          onClick={() => setShowLogoutModal(true)}
        />
      </ul>
      <PopupMessage
        show={showLogoutModal}
        onHide={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
        title="Confirm Logout"
        body="Are you sure you want to logout?"
        confirmText="Logout"
        cancelText="Cancel"
        variant="danger"
      />
    </div>
  );
}

function SidebarLink({ to, icon, label, collapsed, onClick }) {
  return (
    <li className="nav-item">
      <Link
        to={to}
        onClick={onClick}
        className="nav-link text-white d-flex align-items-center"
        style={{ whiteSpace: "nowrap" }}
      >
        <span className="me-2" style={{ fontSize: "1.2rem" }}>
          {icon}
        </span>
        <span className={`sidebar-text ${collapsed ? "d-none" : "d-inline"}`}>
          {label}
        </span>
      </Link>
    </li>
  );
}
