import {clearMsg} from '../components/chattyMsg.js';

const clearMsgEvent = () => {
    const clearBtn = document.getElementById('clear-btn');
    clearBtn.addEventListener('click', clearMsg);
}

export {clearMsgEvent}