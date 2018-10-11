import { printToDom, getUniqueId } from '../helpers/util.js';

let messagesArray = [];

const setMessages = newArray => {
  messagesArray = newArray;
  console.log('bpop', messagesArray);
};

const getMessages = () => {
  return messagesArray;
};

const messagesBuilder = messagesArray => {
  let domString = '';
  messagesArray.forEach(message => {
    domString += `<div class="messageId">`;
    domString += `<h5>12:00:00<strong>${message.username}</strong></h5>`;
    domString += `<p>${message.msg}</p>`;
    domString += `<button type="button" class="btn btn-primary" value="edit">Edit</button>`;
    domString += `<button type="button" class="btn btn-primary" value="delete">Delete</button>`;
    domString += `</div>`;
  });
  printToDom(domString, 'message-output');
};

const enterKeyMsgEvent = (user, message) => {
  console.log(getUniqueId());
  console.log('User', user);
  console.log('Message:', message);
};

export { setMessages, getMessages, messagesBuilder, enterKeyMsgEvent };
