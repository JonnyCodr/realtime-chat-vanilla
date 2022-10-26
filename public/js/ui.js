const goToChatPage = () => {
  const introductionPage = document.querySelector(".introduction_page");
  const chatPage = document.querySelector(".chat_page");

  introductionPage.classList.add("display_none");

  chatPage.classList.remove("display_none");
  chatPage.classList.add("display_flex");
};

export default {
  goToChatPage,
};
