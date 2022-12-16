import "./App.css";
import NavBar from "./components/user/Navbar";
import SignIn from "./components/user/Signin";
import SignUp from "./components/user/Signup";
import HomeMain from "./components/user/dashboard/HomeMain";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={<HomeMain />} />
      </Routes>
    </Router>
  );
}

export default App;
