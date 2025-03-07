# socket.on("joinChat", ({ userId, targetUserId }) => {
# console.log(userId, targetUserId);
# const roomId = [ targetUserId,userId].sort().join("\");
# socket.join(roomId);
# });

## What socket.join(roomId); Does?
1. It creates or joins a room with the given roomId.
2. If the room does not exist, it is created automatically.
3. If the room already exists, the user joins that room.
4. Multiple users can join the same room and communicate with each other
