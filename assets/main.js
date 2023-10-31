// Menu Toggle -->>

const navToggle = document.getElementById("menu-icon");
const navClose = document.getElementById("close-icon");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");

overlay.style.height = "0";

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.style.scale = "0";
  navClose.classList.toggle("visible");
  overlay.style.height = "100%";
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
  navToggle.style.scale = "1";
  navClose.classList.remove("visible");
  overlay.style.height = "0";
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.style.scale = "1";
    navClose.classList.remove("visible");
    overlay.style.height = "0";
  });
});

// Email Checker -->>

const emailForm = document.getElementById("email-form");
const emailInput = emailForm.querySelector("#email");
const error = document.querySelector(".error");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    emailInput.value !== "" &&
    emailInput.value.includes("@") &&
    emailInput.value.includes(".com")
  ) {
    emailInput.style =
      "border: 2px solid transparent; color:var(--very-light-grey); ";
    error.style.display = "none";
    emailInput.value = "";
  } else {
    emailInput.style =
      "border: 2px solid var(--Bright-Red); color:var(--Bright-Red); ";
    error.style.display = "block";
  }
});

// slider carousel -->>

const leftHandle = document.querySelector(".left_handle");
const rightHandle = document.querySelector(".right_handle");
const clientCards = document.getElementById("client-cards");
const toggles = document.querySelectorAll(".toggle");
let currentIndex = 0;

leftHandle.addEventListener("click", () => {
  const userCards = document.querySelectorAll(".card");
  const lastCard = userCards[userCards.length - 1];

  clientCards.prepend(lastCard);
  currentIndex = (currentIndex - 1 + toggles.length) % toggles.length;
  toggleBg();
});

rightHandle.addEventListener("click", () => {
  const userCards = document.querySelectorAll(".card");
  const firstCard = userCards[0];

  clientCards.appendChild(firstCard);
  currentIndex = (currentIndex + 1) % toggles.length;
  toggleBg();
});

function toggleBg() {
  toggles.forEach((toggle, index) => {
    if (index === currentIndex) {
      toggle.classList.add("red-background");
    } else {
      toggle.classList.remove("red-background");
    }
  });
}
