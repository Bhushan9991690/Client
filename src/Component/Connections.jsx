import UserConn from "./Users/UserConn";
import axios from "axios";
import { BASE_URL } from "../utils/Url";
import { useEffect, useState } from "react";
const Connections = () => {
  const [data, setData] = useState([]);
  const Connections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      if (res.statusText == "OK" && res.data) {
        setData(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Connections();
  }, []);

  return (
    <div className="flex items-center flex-col my-16 gap-4">
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
