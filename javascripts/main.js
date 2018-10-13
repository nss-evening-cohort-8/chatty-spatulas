import { getMessageData } from "./data/startupData.js";
import { clearMsgEvent, bigText } from "./events/navbarEvents.js";

const initializeApp = () => {
  getMessageData();
  clearMsgEvent();
  bigText();
};

initializeApp();
