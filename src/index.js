import "./styles.css";
import { homepageContent } from "./home.js";
import { contactContent } from "./contact.js";
import { menuContent } from "./menu.js";
const content = document.querySelector("#content");
const nav = document.querySelector("nav");

// Controls the logic of the navigation and rendering
const getPage = (event) => {
  if (!event.target.classList.contains("btn-navi")) return;
  const page = event.target.textContent;
  const pageContent = getContent(page);
  displayContent(pageContent);
};

// Gets homepage content based on navigation click
const getContent = (page) => {
  const lookUp = {
    Home: homepageContent,
    Menu: menuContent,
    Contact: contactContent,
    "SEE OUR MENU": menuContent,
  };
  return lookUp[page];
};
// Renders the main content based on navigation click
const displayContent = (pageContent) => {
  content.innerHTML = "";
  content.insertAdjacentHTML("beforeend", pageContent);
};
//Attaches addEventListener to the navigation
nav.addEventListener("click", getPage);
//Renders initial homepage
content.insertAdjacentHTML("beforeend", homepageContent);
//Renders Menu, when main CTA clicked
content.addEventListener("click", getPage);
