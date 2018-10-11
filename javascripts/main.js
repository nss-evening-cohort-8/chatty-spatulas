import { getMessageData } from './data/startupData.js';
import { navbarEnterEvents, clearMsgEvent } from './events/navbarEvents.js';

const initializeApp = () => {
  getMessageData();
  navbarEnterEvents();
  clearMsgEvent();
};

initializeApp();
