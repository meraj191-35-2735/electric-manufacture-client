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
import RequireAdmin from "./Pages/Login/RequireAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import useAdmin from "./hooks/useAdmin";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Loading from "./Pages/Shared/Loading";
import UpdateProfile from "./Pages/Dashboard/UpdateProfile";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import NotFound from "./Pages/NotFound/NotFound";
import AddATool from "./Pages/Dashboard/AddATool";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import Blogs from "./Pages/Blogs/Blogs";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";

function App() {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-6 lg:px-10">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="tools" element={<ToolPage></ToolPage>}></Route>
        {!admin && (
          <Route
            path="bookNow/:toolId"
            element={
              <RequireAuth>
                <Booking></Booking>
              </RequireAuth>
            }
          ></Route>
        )}
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          {!admin && (
            <>
              <Route index element={<Bookings></Bookings>}></Route>{" "}
              <Route
                path="addAReview"
                element={<AddAReview></AddAReview>}
              ></Route>
            </>
          )}
          <Route
            path="updateProfile"
            element={<UpdateProfile></UpdateProfile>}
          ></Route>
          {admin && (
            <>
              <Route
                index
                element={
                  <RequireAdmin>
                    <Users></Users>
                  </RequireAdmin>
                }
              ></Route>
              <Route
                path="user"
                element={
                  <RequireAdmin>
                    <Users></Users>
                  </RequireAdmin>
                }
              ></Route>
              <Route
                path="manageProducts"
                element={
                  <RequireAdmin>
                    <ManageProducts></ManageProducts>
                  </RequireAdmin>
                }
              ></Route>
              <Route
                path="manageOrder"
                element={
                  <RequireAdmin>
                    <ManageOrder></ManageOrder>
                  </RequireAdmin>
                }
              ></Route>
              <Route
                path="addATool"
                element={
                  <RequireAdmin>
                    <AddATool></AddATool>
                  </RequireAdmin>
                }
              ></Route>
            </>
          )}
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="myPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
