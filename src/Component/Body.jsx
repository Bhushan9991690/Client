import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/socket";
import { useEffect } from "react";
import { addUser } from "../utils/Slices/UserSlice";
import { useDispatch } from "react-redux";
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      if (res.statusText === "OK" && res.data) {
        const data = res.data;
        dispatch(addUser(data));
      }
    } catch (error) {
      if (error.statusText !== "OK") {
        navigate("/login");
      }
      console.error(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="flex flex-col min-h-screen over ">
      <Navbar />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
