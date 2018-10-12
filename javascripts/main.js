import { getMessageData } from "./data/startupData.js";
import { navbarEnterEvents, clearMsgEvent, navBarUserSelectEvents } from "./events/navbarEvents.js";
import { userPopulate } from "./components/chattyNav.js";

const initializeApp = () => {
  getMessageData();
  userPopulate();
  navbarEnterEvents();
  clearMsgEvent();
  navBarUserSelectEvents();
};

initializeApp();
