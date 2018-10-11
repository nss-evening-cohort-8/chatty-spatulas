import { enterKeyMsgEvent } from '../components/chattyMsg.js';

const navTextInput = document.getElementById('message-input');
const navUserSelect = document.getElementById('users');

const navbarEnterEvents = () => {
  navTextInput.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      const messageUser = navUserSelect.value;
      const messageInput = navTextInput.value;
      enterKeyMsgEvent(messageUser, messageInput);
    }
  });
};

export { navbarEnterEvents };
