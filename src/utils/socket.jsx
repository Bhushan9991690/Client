import { io } from "socket.io-client";
import { BASE_URL } from "../utils/Url";

const createSocketConnection = () => {
  return io(BASE_URL);
};

export default createSocketConnection;

// only establishes a connection between
// the client (React app) & the WebSocket server
