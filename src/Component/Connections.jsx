import UserConn from "./Users/UserConn";
import axios from "axios";
import { BASE_URL } from "../utils/socket";
import { useEffect, useState } from "react";
const Connections = () => {
  const [data, setData] = useState([]);
  const Connections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(data);
      if (res.statusText == "OK" && res.data) {
        console.log(res);
        setData(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Connections();
  }, []);
  console.log(Array.isArray(data));

  return (
    <div className="flex items-center flex-col">
      {Array.isArray(data) ? (
        data.length != 0 &&
        data.map((c) => {
          return <UserConn key={c._id} user={c} />;
        })
      ) : (
        <div className="mt-10 text-2xl font-semibold">{data}</div>
      )}
    </div>
  );
};

export default Connections;
