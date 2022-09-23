import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

const title = document.querySelector(".section-title h1");
const title2 = document.querySelector(".section-title h3");
const btnContainer = document.querySelector(".btn-container");

let index = 0;
let pages = [];

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const init = async () => {
  const followers = await fetchFollowers();
  //   displayFollowers(paginate(followers)[index]);
  title.textContent = "Pagination";
  title2.textContent = "Github Api";
  pages = paginate(followers);
  setupUI();
};

//btn functionality
btnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-container")) return;
  if (e.target.classList.contains("page-btn")) {
    //need numbers
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }

  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setupUI();
});
//once the app load
window.addEventListener("load", init);
