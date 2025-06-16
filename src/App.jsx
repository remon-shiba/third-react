import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./components/Sidebar"; // Optional: if you want sidebar conditionally
import { Toaster } from "sonner"; // assuming you're using `sonner`

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // default to false

  return (
    <Router>
      <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Toaster richColors position="top-center" />
    </Router>
  );
};

export default App;
