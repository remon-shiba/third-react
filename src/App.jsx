import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      {isLoggedIn && <Sidebar />}
      <AppRoutes setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
};

export default App;
