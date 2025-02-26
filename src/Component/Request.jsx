import axios from "axios";
import { BASE_URL } from "../utils/socket";
import { useEffect} from "react";
import RequestCard from "./Users/RequestCard";
import { useDispatch, useSelector } from "react-redux";
import { addListOfRequest } from "../utils/Slices/Request";
const Request = () => {
  const data = useSelector((store) => store.request);
  const dispatch = useDispatch();
  const RecieveRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/recieved", {
        withCredentials: true,
      });
      console.log(res);
      if (res.statusText === "OK" && res.data) {
        dispatch(addListOfRequest(res.data.message));
      }
    } catch (error) {
      console.log(error);
      dispatch(addListOfRequest(error.response.data.message));
    }
  };
  useEffect(() => {
    RecieveRequest();
  }, []);
  return (
    <div className="my-10 h-96 overflow-auto">
      {Array.isArray(data) ? (
        data.length != 0 &&
        data.map((c) => {
          return <RequestCard user={c} key={c._id} />;
        })
      ) : (
        <div className="flex justify-center text-2xl">{data}</div>
      )}
    </div>
  );
};

export default Request;
