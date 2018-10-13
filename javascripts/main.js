import { getMessageData } from "./data/startupData.js";
import {
  navbarEnterEvents,
  clearMsgEvent,
  navBarUserSelectEvents,
  bigText,
  regularText
} from "./events/navbarEvents.js";
import { userPopulate } from "./components/chattyNav.js";

const initializeApp = () => {
  getMessageData();
  userPopulate();
  navbarEnterEvents();
  clearMsgEvent();
  bigText();
  regularText();
  navBarUserSelectEvents();
};

initializeApp();
