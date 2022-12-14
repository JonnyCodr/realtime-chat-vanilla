import ui from "./ui.js";
import store from "./store.js";
import socketHandler from "./socketHandler.js";

const nameInput = document.querySelector(".introduction_page_name_input");
nameInput.addEventListener("keyup", (e) => {
  store.setUsername(e.target.value);
});

const chatPageButton = document.getElementById("enter_chats_button");
chatPageButton.addEventListener("click", () => {
  ui.goToChatPage();
  socketHandler.connectToSocketIoServer();
});
