import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Registration from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';

const AppRoutes = ({ setIsLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default AppRoutes;
