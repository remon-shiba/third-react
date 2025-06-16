import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="d-flex">
        {isLoggedIn && <Sidebar />} {/* Only show sidebar if logged in */}
        <div className="flex-grow-1 p-4">
          <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </div>
      </div>
    </Router>
  );
};

export default App;
