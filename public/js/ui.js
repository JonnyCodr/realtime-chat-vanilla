import store from "./store.js";
import elements from "./elements.js";

const goToChatPage = () => {
  const introductionPage = document.querySelector(".introduction_page");
  const chatPage = document.querySelector(".chat_page");

  introductionPage.classList.add("display_none");

  chatPage.classList.remove("display_none");
  chatPage.classList.add("display_flex");

  const username = store.getUsername();
  updateUsername(username);

  createGroupChatbox();
};

const updateUsername = (username) => {
  const usernameLabel = document.querySelector(".username_label");
  usernameLabel.innerHTML = username;
};

const chatboxId = "group-chat-chatbox";
const chatboxMessagesId = "group-chat-messages";
const chatboxInputId = "group-chat-input";

const createGroupChatbox = () => {
  const data = {
    chatboxLabel: "Group Chat",
    chatboxId,
    chatboxMessagesId,
    chatboxInputId,
  };

  const chatbox = elements.getChatbox(data);
  const chatboxesContainer = document.querySelector(".chatboxes_container");

  chatboxesContainer.appendChild(chatbox);

  const newMessageInput = document.getElementById(chatboxInputId);
  newMessageInput.addEventListener("keyup", (e) => {
    const key = e.key;

    if (key === "Enter" || key === "Return") {
      const author = store.getUsername();
      const message = e.target.value;
      //send message to socket.io server
      newMessageInput.value = "";
    }
  });
};

export default {
  goToChatPage,
};
