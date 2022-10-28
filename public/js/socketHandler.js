import ui from "./ui.js";

let socket = null;

const connectToSocketIoServer = () => {
  socket = io("/");

  socket.on("connect", () => {
    console.log("client connected to socket.io server", socket.id);
  });

  socket.on("group-chat-message", (messageData) => {
    console.log("messageData", messageData);
    ui.appendGroupChatMessage(messageData);
  });
};

const sendGroupChatMessage = (author, messageContent) => {
  const messageData = {
    author,
    messageContent,
  };

  socket.emit("group-chat-message", messageData);
};

export default {
  connectToSocketIoServer,
  sendGroupChatMessage,
};
