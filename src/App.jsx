// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Registration from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
