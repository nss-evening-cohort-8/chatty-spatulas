import { getMessageData } from "./data/startupData.js";
import {
  navbarEnterEvents,
  clearMsgEvent,
  navBarUserSelectEvents,
  textSize,
  backgroundColor,
  textColor
} from "./events/navbarEvents.js";
import { userPopulate } from "./components/chattyNav.js";

const initializeApp = () => {
  getMessageData();
  userPopulate();
  navbarEnterEvents();
  clearMsgEvent();
  textSize();
  navBarUserSelectEvents();
  backgroundColor();
  textColor();
};

initializeApp();
