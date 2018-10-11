import { getMessageData } from './data/startupData.js';
import { navbarEnterEvents } from './events/navbarEvents.js';

const initializeApp = () => {
  getMessageData();
  navbarEnterEvents();
};

initializeApp();
