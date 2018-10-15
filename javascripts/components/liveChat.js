import { printToDom, getUniqueId, getTime, setScrolDown } from "../helpers/util.js";
import { messagesBuilder, getMessages } from "../components/chattyMsg.js";

let chattyMembers = [];

const drone = new Scaledrone("BIgSNPLO582fluZ3", {
  data: {
    name: getRandomName(),
    color: getRandomColor()
  }
});

drone.on("open", error => {
  if (error) {
    return console.error(error);
  }
  console.log("Successfully connected to ScaleDrone");

  const chatRoom = drone.subscribe("observable-NSS");
  chatRoom.on("open", error => {
    if (error) {
      return console.error(error);
    }
    console.log("Successfully joined room");
  });

  chatRoom.on("members", m => {
    chattyMembers = m;
    updateUserCount();
    //   Update the memebers DOM here.  PTD -> Members DIV
  });

  chatRoom.on("member_join", member => {
    chattyMembers.push(member);
    console.log(member.clientData.name);
    console.log(member.clientData.color);
    updateUserCount();
    //   Update the Memebrs DOM here.  PTD -> Members DIV
  });

  chatRoom.on("member_leave", ({ id }) => {
    const index = chattyMembers.findIndex(member => member.id === id);
    chattyMembers.splice(index, 1);
    updateUserCount();
    //   Update the Members DOM
  });

  chatRoom.on("data", (text, member) => {
    if (member) {
      let currentMsgArray = getMessages();
      let newMsgObject = {};
      newMsgObject.id = getUniqueId();
      newMsgObject.username = member.clientData.name;
      newMsgObject.msg = text;
      newMsgObject.timeStamp = getTime();
      currentMsgArray.push(newMsgObject);
      messagesBuilder(currentMsgArray);
      setScrolDown(newMsgObject.id);
      //   console.log(member);
    } else {
      //   Message is from server
    }
  });
});

drone.on("close", event => {
  console.log("Connection was closed", event);
});

drone.on("error", error => {
  console.error(error);
});

const DOM = {
  msgWindow: document.querySelector("#message-output"),
  currentUsrCount: document.querySelector("#user-count"),
  msgContainer: document.querySelector(".message-container"),
  navBar: document.querySelector(".navbar"),
  newInputDiv: document.querySelector("#new-input"),
  newInput: document.querySelector("#live-input"),
  newStatus: document.querySelector("#live-status")
};

const setUi = status => {
  if (status === "live") {
    DOM.newInputDiv.removeAttribute("hidden");
    DOM.navBar.setAttribute("hidden", true);
    DOM.msgContainer.setAttribute("hidden", true);
    DOM.newStatus.removeAttribute("hidden");
    DOM.newInput.value = "";
  } else if (status === "project") {
    DOM.newInputDiv.setAttribute("hidden", true);
    DOM.navBar.removeAttribute("hidden");
    DOM.msgContainer.removeAttribute("hidden");
    DOM.newStatus.setAttribute("hidden", true);
    document.getElementById("message-input").value = "";
  }
};

const liveChatEvents = () => {
  const liveInput = document.getElementById("live-input");
  const liveBtn = document.getElementById("live-btn");
  liveInput.addEventListener("keyup", e => {
    if (e.key === "Enter") {
      inputEnterMsgEvent(DOM.newInput.value);
    }
  });
  liveBtn.addEventListener("click", e => {
    inputEnterMsgEvent(DOM.newInput.value);
  });
};

function getRandomName() {
  const adjs = [
    "autumn",
    "hidden",
    "bitter",
    "misty",
    "silent",
    "empty",
    "dry",
    "dark",
    "summer",
    "icy",
    "delicate",
    "quiet",
    "white",
    "cool",
    "spring",
    "winter",
    "patient",
    "twilight",
    "dawn",
    "crimson",
    "wispy",
    "weathered",
    "blue",
    "billowing",
    "broken",
    "cold",
    "damp",
    "falling",
    "frosty",
    "green",
    "long",
    "late",
    "lingering",
    "bold",
    "little",
    "morning",
    "muddy",
    "old",
    "red",
    "rough",
    "still",
    "small",
    "sparkling",
    "throbbing",
    "shy",
    "wandering",
    "withered",
    "wild",
    "black",
    "young",
    "holy",
    "solitary",
    "fragrant",
    "aged",
    "snowy",
    "proud",
    "floral",
    "restless",
    "divine",
    "polished",
    "ancient",
    "purple",
    "lively",
    "nameless"
  ];
  const nouns = [
    "waterfall",
    "river",
    "breeze",
    "moon",
    "rain",
    "wind",
    "sea",
    "morning",
    "snow",
    "lake",
    "sunset",
    "pine",
    "shadow",
    "leaf",
    "dawn",
    "glitter",
    "forest",
    "hill",
    "cloud",
    "meadow",
    "sun",
    "glade",
    "bird",
    "brook",
    "butterfly",
    "bush",
    "dew",
    "dust",
    "field",
    "fire",
    "flower",
    "firefly",
    "feather",
    "grass",
    "haze",
    "mountain",
    "night",
    "pond",
    "darkness",
    "snowflake",
    "silence",
    "sound",
    "sky",
    "shape",
    "surf",
    "thunder",
    "violet",
    "water",
    "wildflower",
    "wave",
    "water",
    "resonance",
    "sun",
    "wood",
    "dream",
    "cherry",
    "tree",
    "fog",
    "frost",
    "voice",
    "paper",
    "frog",
    "smoke",
    "star"
  ];
  return adjs[Math.floor(Math.random() * adjs.length)] + "_" + nouns[Math.floor(Math.random() * nouns.length)];
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

const updateUserCount = () => {
  DOM.currentUsrCount.innerHTML = `Current User Count: ${chattyMembers.length}<span class="ml-5" style="color: ${
    drone.args[1].data.color
  };">UserName: ${drone.args[1].data.name}`;
};

const inputEnterMsgEvent = message => {
  if (message === "!!") {
    setUi("project");
    return;
  }
  if (message === "") {
    return;
  }
  sendLiveMsg();
};

const sendLiveMsg = () => {
  const liveMsg = DOM.newInput.value;
  DOM.newInput.value = "";
  drone.publish({
    room: "observable-NSS",
    message: liveMsg
  });
};

const loadMultiUser = () => {
  setUi("live");
  liveChatEvents();
};

export { loadMultiUser };
