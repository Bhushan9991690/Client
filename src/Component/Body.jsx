import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className=" flex flex-col min-h-screen scrollbar-none">
      <Navbar />
      <div className="flex-1 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
