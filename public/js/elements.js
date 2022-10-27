const getChatbox = (data) => {
  const { chatboxLabel, chatboxMessagesId, chatboxInputId, chatboxId } = data;

  let chatboxContainer = document.createElement("div");
  chatboxContainer.classList.add("chatbox_container");
  chatboxContainer.setAttribute("id", chatboxId);

  chatboxContainer.innerHTML = `
            <div class="chatbox_label_container">
                <p class="chatbox_label">${chatboxLabel}</p>
            </div>
            <div id='${chatboxMessagesId}' class="messages_container">
                
            </div>
            <div class="new_message_input_container">
                <input id='${chatboxInputId}' class="new_message_input" placeholder="Type your message">
            </div>
            `;

  return chatboxContainer;
};

const getGroupChatMessage = (data) => {
  const { author, messageContent } = data;
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message_container");
  messageContainer.innerHTML = `
  <p class="message_paragraph">
      <span class="message_author">${author}: </span>${messageContent}
  </p>
  `;
};

export default {
  getChatbox,
  getGroupChatMessage,
};
