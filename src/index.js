import "./reset.css";

import "./style.css";

import { pageInitialLoad } from "./pageLoad.js";
import { homeTabLoad } from "./homeTab.js";
import { menuTabLoad } from "./menuTab.js";
import { contactTabLoad } from "./contactTab.js";

pageInitialLoad();
homeTabLoad();

let home = document.querySelector(".btn_home");
let menu = document.querySelector(".btn_menu");
let contact = document.querySelector(".btn_contact");

const btns = [home, menu, contact];

btns.forEach((e) => {
  e.addEventListener("click", () => {
    let tabSpace = document.querySelector(".landingMedia");
    while (tabSpace.firstChild) {
      tabSpace.removeChild(tabSpace.firstChild);
    }
    if (e.textContent === "Home") {
      homeTabLoad();
    } else if (e.textContent === "Menu") {
      menuTabLoad();
    } else if (e.textContent === "Contact") {
      contactTabLoad();
    }
  });
});
