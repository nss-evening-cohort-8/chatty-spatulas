import { getMessageData } from './data/startupData.js';
import { userPopulate } from './components/chattyNav.js';
import { clearMsgEvent } from './events/navbarEvents.js';


const initializeApp = () => {
  getMessageData();
  userPopulate();
  clearMsgEvent();
}

initializeApp();