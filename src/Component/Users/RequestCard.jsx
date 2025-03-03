import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserRequest } from "../../utils/Slices/Request";
import { BASE_URL } from "../../utils/socket";
const RequestCard = (prop) => {
  const user = prop.user;
  const data = prop.user.fromUserId;
  const dispatch = useDispatch();

  const handleRequest = async (status) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/review/${user._id}/${status}`,
        {},
        { withCredentials: true }
      );
      if (res.statusText === "OK" && res.data) {
        dispatch(removeUserRequest(res.data.data._id));
        alert("Accepted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center mt-4 ">
      <div className="bg-base-200 rounded-lg">
        <div className="p-4 flex w-96 justify-between ">
          <div className="flex">
            <img
              src={data.photoURL}
              alt=""
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className=" flex items-center text-lg">
              {data.firstName + " " + data.lastName}
            </div>
          </div>
          <div className="flex items-center gap-2 font-semibold ">
            <button
              onClick={() => {
                return handleRequest("rejected");
              }}
              className="border rounded-lg px-2 py-1 text-sm bg-pink-600 cursor-pointer"
            >
              Rejected
            </button>
            <button
              onClick={() => {
                return handleRequest("accepted");
              }}
              className="border rounded-lg px-2 py-1 text-sm bg-blue-700 cursor-pointer"
            >
              Accepted
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
