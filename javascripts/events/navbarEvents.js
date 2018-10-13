import { clearMsg, disableClearBtn } from "../components/chattyMsg.js";

const clearMsgEvent = () => {
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", e => {
    clearMsg();
    disableClearBtn(e);
  });
};

const bigText = () => {
  const increaseBtn = document.getElementById("largeText");
  increaseBtn.addEventListener("click", e => {
    console.log("hello world");
  });
};

export { clearMsgEvent, bigText };
