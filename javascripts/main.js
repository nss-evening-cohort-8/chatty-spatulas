import { getMessageData } from './data/startupData.js';
import { clearMsgEvent } from './events/navbarEvents.js';

const initializeApp = () => {
  getMessageData();
  clearMsgEvent();
};

initializeApp();