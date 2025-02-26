import Text from "./Input/Text";
import Number from "./Input/Number";
import Gender from "./Input/Gender";
import { BASE_URL } from "../utils/socket";
import axios from "axios";
import { useState } from "react";
import ArrayInput from "./Input/ArrayInput";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/Slices/UserSlice";
import { useNavigate } from "react-router-dom";
const Edit = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => {
    return store.user;
  });
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [about, setAbout] = useState(user?.about || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [age, setAge] = useState(null);
  const [skills, setSkills] = useState([]);
  const [gender, setGender_] = useState("");
  const [error, setError] = useState("");

  const data = {
    firstName,
    lastName,
    age,
    gender,
    phone,
    photoURL,
    skills,
    about,
  };
  const SaveInput = async () => {
    try {
      setError("");
      const res = await axios.patch(BASE_URL + "/profile/edit", data, {
        withCredentials: true,
      });
      console.log(res);
      if (res.statusText === "OK" && res.data) {
        dispatch(addUser(res.data.update));
        navigate("/feed");
      }
    } catch (error) {
      const data = error.response.data.message;
      setError(data);
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-100 w-96 shadow-xl border border-t-0 border-b-0">
        <div className="card-body">
          <h2 className="card-title">Edit profile</h2>
          <>
            <Text text="FirstName" setInput={setFirstName} value={firstName} />
            <Text text="LastName" setInput={setLastName} value={lastName} />
            <Text text="Phone" setInput={setPhone} value={phone} />
            <Text text="PhotoURL"  setInput={setPhotoURL} value={photoURL} />
            <Text text="About" setInput={setAbout} value={about} />
            <Number text="Age" setInput={setAge} value={age} />
            <Gender text={"Gender"} setInput={setGender_} value={gender} />
            <ArrayInput setInput={setSkills}></ArrayInput>
          </>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={SaveInput}>
              Save
            </button>
          </div>
          <div>{error}</div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
