import axios from "axios";
import { BASE_URL } from "../utils/Url";
import { useEffect } from "react";
import { addFeed } from "../utils/Slices/FeedSlice";
import { useDispatch, useSelector } from "react-redux";
import FeedUsers from "./Users/FeedUsers";
const Feed = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.feed);
  const fetchFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      if (res.statusText === "OK" && res.data) {
        dispatch(addFeed(res.data.message));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);
  return (
    <div className="flex justify-center">
      {data && (
        <div className="carousel  rounded-box w-full m-10">
          <div className="carousel  rounded-box w-full ">
            {data.map((c) => {
              return <FeedUsers user={c} key={c._id} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
