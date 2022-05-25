import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Booking from "./Pages/Booking/Booking";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import ToolPage from "./Pages/ToolPage/ToolPage";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Bookings from "./Pages/Dashboard/Bookings";
import AddAReview from "./Pages/Dashboard/AddAReview";
import Users from "./Pages/Dashboard/Users";
function App() {
  return (
    <div className="px-6 lg:px-10">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="tools" element={<ToolPage></ToolPage>}></Route>
        <Route
          path="bookNow/:toolId"
          element={
            <RequireAuth>
              <Booking></Booking>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<Bookings></Bookings>}></Route>
          <Route path="addAReview" element={<AddAReview></AddAReview>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
        </Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
