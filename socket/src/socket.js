module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("[WebSocket Connected!]");

    socket.on("createMessage", async (message) => {
      console.log(message);
      io.emit("newMessage", message);
    });

    socket.on("disconnect", () => {
      console.log("[WebSocket DisConnected.]");
    });
  });
};
