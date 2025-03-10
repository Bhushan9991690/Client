import { io } from "socket.io-client";
import { BASE_URL } from "../utils/Url";

const createSocketConnection = () => {
  const url =
    location.hostname === "localhost"
      ? io(BASE_URL)
      : io("/", { path: "/api/socket" });
  return url;
};

export default createSocketConnection;

// only establishes a connection between
// the client (React app) & the WebSocket server
