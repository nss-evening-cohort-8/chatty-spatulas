import { printToDom, getUniqueId, getTime } from '../helpers/util.js';

let messagesArray = [];

const setMessages = (newArray) => {
  messagesArray = newArray;
};

const getMessages = () => {
  return messagesArray;
};

const messagesBuilder = (messagesArray) => {
  let domString = '';
  messagesArray.forEach((message) => {
    domString += `<div class="w-75 mx-auto">`;
    domString += `<div class="row">`;
    domString += `<div class="col-sm-1">`;
    domString += `<h6>[${message.timeStamp}]</h6>`;
    domString += `</div>`;
    domString += `<div class="col-sm-1">`;
    domString += `<h6><strong>${message.username}</strong></h6>`;
    domString += `</div>`;
    domString += `<div class="col-sm-8">`;
    domString += `<p>${message.msg}</p>`;
    domString += `</div>`;
    domString += `<div class="col-sm-2 justify-content-around row align-items-center">`;
    domString += `<button type="button" class="msg-btn btn btn-primary btn-sm" value="edit">Edit</button>`;
    domString += `<button type="button" class="msg-btn btn btn-primary btn-sm" value="delete">Delete</button>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `<hr>`;

    // domString += `<div class="messageId my-2 col-9">`;
    // domString += `<h6>${message.timeStamp}<strong>${message.username}</strong></h6>`;
    // domString += `<p>${message.msg}</p>`;
    // domString += `<div class="col-3">`;
    // domString += `<button type="button" class="btn btn-primary btn-sm" value="edit">Edit</button>`;
    // domString += `<button type="button" class="btn btn-primary btn-sm" value="delete">Delete</button>`;
    // domString += `</div>`;
    // domString += `</div>`;
    // domString += `<hr>`;
  });
  printToDom(domString, 'message-output');
};

const clearMsg = () => {
  const clearedMsgArray = document.getElementById('message-output');
  clearedMsgArray.innerHTML = '';
  messagesArray = [];
  setMessages(messagesArray);
};

const disableClearBtn = (e) => {
  const clearedMsgArray = document.getElementById('message-output');
  const clearBtn = document.getElementById('clear-btn');
  if (e.target.id === 'clear-btn' && clearedMsgArray.innerHTML === '') {
    clearBtn.setAttribute('disabled', 'disabled');
    clearBtn.classList.add('disabled');
    console.log('disabled');
  } else {
    clearBtn.removeAttribute('disabled');
    clearBtn.classList.remove('disabled');
  }
};

const enterKeyMsgEvent = (user, message) => {
  let currentMsgArray = getMessages();
  let newMsgObject = {};
  newMsgObject.id = getUniqueId();
  newMsgObject.username = user;
  newMsgObject.msg = message;
  newMsgObject.timeStamp = getTime();
  // const newMsgId = getUniqueId();
  // const newMsgTimeStamp = getTime();
  // console.log('User', user);
  // console.log('Message:', message);
  console.log('New Message', newMsgObject);
  currentMsgArray.push(newMsgObject);
  messagesBuilder(currentMsgArray);
};

export { setMessages, getMessages, messagesBuilder, enterKeyMsgEvent, clearMsg, disableClearBtn };
