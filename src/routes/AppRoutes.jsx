import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Registration from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Sidebar from '../components/Sidebar';

const AppRoutes = ({ setIsLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
      <Route element={<Sidebar />}>
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
        
      </Route>
    </Routes>
  );
};

export default AppRoutes;
