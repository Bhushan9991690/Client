import { BASE_URL } from "../../utils/socket";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../../utils/Slices/FeedSlice";
const FeedUsers = (prop) => {
  const dispatch = useDispatch();
  const data = prop.user;
  const handleInput = async (status) => {
    try {
      const res = await axios.post(
        BASE_URL + `/request/send/${data._id}/${status}`,
        {},
        { withCredentials: true }
      );
      if (res.statusText === "OK" && res.data) {
        dispatch(removeUserFromFeed(data._id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="carousel-item h-full mr-10">
      <div className="border mb-5 rounded-lg w-66 p-4">
        <div className="mb-4">
          <img src={data.photoURL} alt="img" className="w-full h-44 rounded" />
        </div>
        <div>{data.firstName + " " + data.lastName}</div>
        <div>About : {data.about}</div>
        <div className="mt-8 flex justify-evenly">
          <div
            className="btn btn-secondary"
            onClick={() => {
              handleInput("ignored");
            }}
          >
            Ignored
          </div>
          <div
            className="btn btn-primary"
            onClick={() => {
              handleInput("interested");
            }}
          >
            Interested
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedUsers;
