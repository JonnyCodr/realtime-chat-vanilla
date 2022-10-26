const socket = io("/");

socket.on("connect", () => {
  console.log("client connected to socket.io server", socket.id);
});

const nameInput = document.querySelector(".introduction_page_name_input");
nameInput.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

const chatPageButton = document.getElementById("enter_chats_button");
chatPageButton.addEventListener("click", () => {
  // go to chat page
  // ui.goToChatPage();
});
