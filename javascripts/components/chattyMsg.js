import { printToDom, getUniqueId, getTime, inputValidation, resetMessageInput } from "../helpers/util.js";

let messagesArray = [];

const setMessages = newArray => {
  messagesArray = newArray;
};

const getMessages = () => {
  return messagesArray;
};

const messagesBuilder = messagesArray => {
  let domString = "";
  messagesArray.forEach(message => {
    domString += `<div class="msg-row row m-1">`;
    domString += `<div class="col-md-1">`;
    domString += `<p class="message-text">${message.timeStamp}</p>`;
    domString += `</div>`;
    domString += `<div class="col-md-2">`;
    domString += `<p class="message-text"><strong>${message.username}</strong></p>`;
    domString += `</div>`;
    domString += `<div class="col-md-8">`;
    domString += `<p>${message.msg}</p>`;
    domString += `</div>`;
    domString += `<div class="col-md-1 justify-content-end row align-items-center">`;
    domString += `<button type="button" class="msg-btn btn btn-success btn-sm mx-1" value="${message.id}">`;
    domString += `<i class="far fa-edit"></i>`;
    domString += `</button>`;
    domString += `<button type="button" class="msg-btn btn btn-danger btn-sm mx-1" value="${message.id}">`;
    domString += `<i class="far fa-trash-alt" ></i ></button >`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `<hr>`;
  });
  printToDom(domString, "message-output");
};

const clearMsg = () => {
  const clearedMsgArray = document.getElementById("message-output");
  clearedMsgArray.innerHTML = "";
  messagesArray = [];
  setMessages(messagesArray);
};

const enterKeyMsgEvent = (user, message) => {
  let userMsgError = message === "" ? true : false;
  let selectedUserError = user === "Select User" ? true : false;
  if (userMsgError === true || selectedUserError === true) {
    inputValidation(userMsgError, selectedUserError);
    return;
  }
  let currentMsgArray = getMessages();
  let newMsgObject = {};
  newMsgObject.id = getUniqueId();
  newMsgObject.username = user;
  newMsgObject.msg = message;
  newMsgObject.timeStamp = getTime();
  currentMsgArray.push(newMsgObject);
  messagesBuilder(currentMsgArray);
  resetMessageInput();
};

export { setMessages, getMessages, messagesBuilder, enterKeyMsgEvent, clearMsg };
