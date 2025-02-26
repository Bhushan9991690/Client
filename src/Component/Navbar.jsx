import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/socket";
import axios from "axios";
import { removeUser } from "../utils/Slices/UserSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const userLogout = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log("res", res);
      dispatch(removeUser());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to={"/feed"} className="btn btn-ghost text-xl">
          DevTinder
        </Link>
      </div>

      {user && (
        <div className="dropdown dropdown-end mr-4 flex items-center">
          <div className="mr-4">{user.firstName}</div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full ">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  user
                    ? user.photoURL
                    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-40 "
          >
            <li>
              <Link to={"/profile"} className="justify-between">
                Profile edit
              </Link>
            </li>
            <li>
              <Link to={"/connections"}>Connections</Link>
            </li>
            <li>
              <Link to={"/request"}>Request</Link>
            </li>
            <li>
              <Link to={"/login"} onClick={userLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
