import Text from "./Input/Text";
import axios from "axios";
import { BASE_URL } from "../utils/Url";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/Slices/UserSlice";
import { toggleState } from "../utils/Slices/ToggleSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((store) => {
    return store.toggle.toggleState;
  });
  const [firstName, setfirstName] = useState("Bhushan");
  const [lastName, setLastName] = useState("kumar");
  const [phone, setPhone] = useState("7404075251");

  const [email, setEmail] = useState("Bhushan@gmail.com");
  const [password, setPassword] = useState("Bhushan@t20");
  const [error, setError] = useState(null);
  const handleLogin = async () => {
    try {
      const data = { email, password };
      const res = await axios.post(BASE_URL + "/auth/login", data, {
        withCredentials: true,
      });
      if (res.statusText === "OK" && res.data) {
        dispatch(addUser(res.data.userData));
        navigate("/feed");
        setError(null);
        alert("login successfully");
      }
    } catch (error) {
      // setError(error.response.data.message || "Something went Wrong");
      setError(error?.response?.data?.message || "Something went Wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const data = { email, password, firstName, lastName, phone };
      const res = await axios.post(BASE_URL + "/auth/signup", data, {
        withCredentials: true,
      });
      if (res.statusText === "OK" && res.data) {
        dispatch(addUser(res.data.data));
        setError(null);
        navigate("/profile");
        alert("Signup successfully");
      }
    } catch (error) {
      setError(error.response.data.message || "Something went Wrong");
    }
  };
  const handleForm = () => {
    try {
      dispatch(toggleState());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center my-10 ">
      <div className="w-96 bg-base-300 py-5 px-4 rounded-lg border">
        <div className="font-semibold text-xl flex justify-center mr-5">
          {state ? "Login" : "SignUp"}
        </div>
        <div className="flex items-center my-4 flex-col gap-4 ">
          {!state && (
            <>
              <Text
                text="FirstName"
                setInput={setfirstName}
                value={firstName}
              />
              <Text text="LastName" setInput={setLastName} value={lastName} />
              <Text text="Phone" setInput={setPhone} value={phone} />
            </>
          )}
          <Text text="Email" setInput={setEmail} value={email} />
          <Text text="Password" setInput={setPassword} value={password} />
          <p className="text-red-500">{error}</p>
        </div>
        <div className="flex justify-between ml-4 mr-4">
          <div className="text-yellow-300">
            {state ? "New user click " : "Already SignUp click "}
            <span
              onClick={handleForm}
              className="underline text-sky-400 cursor-pointer"
            >
              {state ? "SignUp" : "Login"}
            </span>{" "}
          </div>
          <button
            onClick={state ? handleLogin : handleSignUp}
            className="btn btn-primary"
          >
            {state ? "Login" : "SignUp"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
