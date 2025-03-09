import { useEffect, useState } from "react";
import createSocketConnection from "../utils/socket";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/Url";
import axios from "axios";
const Chat = () => {
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState([]);
  const user = useSelector((store) => {
    return store.user;
  });
  const userId = user?._id;
  const firstName = user?.firstName;
  const { targetUserId } = useParams();
  const socket = createSocketConnection();
  const fetchData = async () => {
    const res = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });
    const data = res?.data?.messages;
    const setData = data.map((msg) => {
      return { firstName: msg?.senderId?.firstName, message: msg?.message };
    });
    setDisplay(setData);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  console.log(display);

  useEffect(() => {
    if (!userId || !targetUserId) return;
    socket.emit("joinChat", { userId, targetUserId, firstName });
    socket.on("messageRecieved", ({ firstName, message }) => {
      console.log(firstName, message);

      setDisplay((display) => {
        return [...display, { firstName, message }];
      });
    });
    return () => {
      // Call only when unmount i.e page refresh & go to another page &
      // You remove the component conditionally
      // NOT WHEN PAGE LOAD ON FIRST TIME
      socket.disconnect();
      console.log("disconnect");
    };
    // eslint-disable-next-line
  }, [userId, targetUserId]);

  const sendMessage = () => {
    try {
      socket.emit("sendMessage", { userId, targetUserId, firstName, message });
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center my-10">
      <div className="card card-dash bg-base-300 md:w-196 w-full md:mx-20">
        <div className="card-body">
          <div className="card-title font-bold text-2xl">Chat</div>
          <hr className="mb-4 " />
          <div className="h-80 mx-4 overflow-auto">
            {display.length !== 0 &&
              display.map((c, i) => {
                return (
                  <div key={i}>
                    {c.firstName === firstName ? (
                      <div className="chat chat-start my-2">
                        <div className="chat-bubble bg-sky-600 font-bold text-lg">
                          {c.message}
                        </div>
                      </div>
                    ) : (
                      <div className="chat chat-end my-2">
                        <div className="chat-bubble bg-green-600 font-bold text-lg">
                          {c.message}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="card-actions justify-end p-10 flex items-center">
          <input
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            type="text"
            className="flex-1 h-9 border-2 rounded outline-none font-semibold px-2"
          />
          <button
            onClick={sendMessage}
            className="btn btn-primary md:text-xl font-bold md:text-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
