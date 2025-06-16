import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaTachometerAlt,
  FaInfoCircle,
  FaUserPlus,
  FaSignInAlt,
  FaBars,
  FaReact, // Example logo icon
} from 'react-icons/fa';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="bg-dark text-white vh-100 d-flex flex-column align-items-start transition-sidebar"
        style={{
          width: collapsed ? '60px' : '220px',
          transition: 'width 0.3s ease',
          overflowX: 'hidden',
        }}
      >
        {/* Toggle Button */}
        <button className="btn btn-outline-light m-2 w-80" onClick={toggleSidebar}>
          <FaBars />
        </button>

        {/* Logo */}
        <div
          className="d-flex align-items-center ps-3 pe-3 mb-3"
          style={{
            height: '50px',
            width: '100%',
            transition: 'opacity 0.3s ease',
          }}
        >
          <FaReact className="me-2" size={24} />
          {!collapsed && <span className="fs-5 fw-bold">Momond</span>}
        </div>

        {/* Menu */}
        <ul className="nav flex-column w-100">
          <SidebarLink to="/" icon={<FaHome />} label="Home" collapsed={collapsed} />
          <SidebarLink to="/dashboard" icon={<FaTachometerAlt />} label="Dashboard" collapsed={collapsed} />
          <SidebarLink to="/about" icon={<FaInfoCircle />} label="About" collapsed={collapsed} />
          <SidebarLink to="/register" icon={<FaUserPlus />} label="Register" collapsed={collapsed} />
          <SidebarLink to="/login" icon={<FaSignInAlt />} label="Login" collapsed={collapsed} />
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <h1>Main Content</h1>
        <p>This area adjusts to sidebar toggle.</p>
      </div>
    </div>
  );
}

function SidebarLink({ to, icon, label, collapsed }) {
  return (
    <li className="nav-item">
      <Link
        to={to}
        className="nav-link text-white d-flex align-items-center"
        style={{ whiteSpace: 'nowrap' }}
      >
        <span className="me-2" style={{ fontSize: '1.2rem' }}>{icon}</span>
        <span className={`sidebar-text ${collapsed ? 'd-none' : 'd-inline'}`}>{label}</span>
      </Link>
    </li>
  );
}
