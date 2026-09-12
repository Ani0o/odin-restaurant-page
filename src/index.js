import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

homeButton.addEventListener("click", (e) => {
    loadHome();
});

menuButton.addEventListener("click", (e) => {
    loadMenu();
});

aboutButton.addEventListener("click", (e) => {
    loadAbout();
});