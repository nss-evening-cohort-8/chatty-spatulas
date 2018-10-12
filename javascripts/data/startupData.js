import {
  setMessages,
  messagesBuilder,
  showMessages
} from "../components/chattyMsg.js";

function getData() {
  const data = JSON.parse(this.responseText);
  setMessages(data.messages);
  messagesBuilder(showMessages());
}

function ifDataFails() {
  console.log("Xhr failed");
}

const getMessageData = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", getData);
  myRequest.addEventListener("error", ifDataFails);
  myRequest.open("GET", "./db/startupMsg.json");
  myRequest.send();
};

export { getMessageData };
