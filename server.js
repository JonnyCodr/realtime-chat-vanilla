const express = require("express");
const http = require("http");

const PORT = 3000;

const app = express();
const server = http.createServer(app);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("connected to socket.io server", socket.id);

  socket.on("group-chat-message", (messageData) => {
    console.log("messageData", messageData);
    io.emit("group-chat-message", messageData);
    // socket.broadcast.emit("group-chat-message", messageData); // emits to all sockets except the one that sent the message
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
