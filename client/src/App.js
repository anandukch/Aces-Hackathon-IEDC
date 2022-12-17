import "./App.css";
import SignIn from "./components/user/Signin";
import SignUp from "./components/user/Signup";
import HomeMain from "./components/user/dashboard/HomeMain";
import BookDoctor from "./components/user/book_doctor/BookDoctor";
import AppointmentDetails from "./components/admin/AppointmentDetails"
import HomeAdmin from "./components/admin/dashboard_admin/HomeAdmin";
import CreateDoc from "./components/admin/DocSchedule/CreateDoc";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DocScheduleMain from "./components/admin/DocSchedule/DocScheduleMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={<HomeMain />} />
        <Route path="/book" element={<BookDoctor />} />

        <Route path="/admin/app" element={<AppointmentDetails/>}/>
        <Route path="/admin/home" element={<HomeAdmin/>}/>
        <Route path="/admin/createdoc" element={<CreateDoc/>}/>
        <Route path="/admin/docschedule" element={<DocScheduleMain/>}/>
      </Routes>
    </Router>
  );
}

export default App;
