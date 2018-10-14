<<<<<<< HEAD
import { getMessageData } from "./data/startupData.js";
import {
  navbarEnterEvents,
  clearMsgEvent,
  navBarUserSelectEvents,
  textSize,
  themeColor,
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
  themeColor();
  textColor();
=======
import { getMessageData } from './data/startupData.js';
import { navbarEnterEvents, clearMsgEvent, navBarUserSelectEvents } from './events/navbarEvents.js';
import { userPopulate } from './components/chattyNav.js';

const initializeApp = () => {
	getMessageData();
	userPopulate();
	navbarEnterEvents();
	clearMsgEvent();
	navBarUserSelectEvents();
>>>>>>> master
};

initializeApp();
