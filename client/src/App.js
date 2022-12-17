import "./App.css";
import NavBar from "./components/user/Navbar";
import SignIn from "./components/user/Signin";
import SignUp from "./components/user/Signup";
import HomeMain from "./components/user/dashboard/HomeMain";
import BookDoctor from "./components/user/book_doctor/BookDoctor";
import AppointmentDetails from "./components/admin/AppointmentDetails"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={<HomeMain />} />
        <Route path="/book" element={<BookDoctor />} />
        <Route path="/admin-app" element={<AppointmentDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
