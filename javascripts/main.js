import {getMessageData} from './data/startupData.js';
import {userPopulate} from './components/chattyNav.js';


const initializeApp = () => {
    getMessageData();
    userPopulate();
  };

  initializeApp();