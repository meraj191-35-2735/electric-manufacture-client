import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Booking from "./Pages/Booking/Booking";

function App() {
  return (
    <div className="px-6 lg:px-10">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/bookNow/:toolId" element={<Booking></Booking>}></Route>
      </Routes>
    </div>
  );
}

export default App;
