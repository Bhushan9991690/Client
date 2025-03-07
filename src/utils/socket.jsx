// only establishes a connection between
// the client (React app)
// & the WebSocket server

import { io } from "socket.io-client";
import { BASE_URL } from "../utils/Url";
const createSocketConnection = () => {
  // return io(BASE_URL, {
  //   transports: ["websocket"],
  //   reconnection: true, // Reconnect if disconnected
  //   reconnectionAttempts: 5, // Try 5 times
  // });
  // Forces WebSocket usage instead of polling.
  // By default, Socket.io first tries HTTP polling, then switches to WebSocket.
  return io(BASE_URL);
  // This creates a WebSocket connection with the server running at BASE_URL.
  // The returned object (socket) allows real-time communication
  //  between the frontend and backend.
};

export default createSocketConnection;
