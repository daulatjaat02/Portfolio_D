let nav = document.getElementById("nav");
let toggleIcon = document.getElementById("toggle-icon");
let dark = document.querySelector("#dark");
let light = document.querySelector("#light");

/////////////
let darkMode = () => {
  nav.style.backgroundColor = "rgb(0 0 0 /50%)";
  light.style.display = "block";
  dark.style.display = "none";
};

let lightMode = () => {
  nav.style.backgroundColor = "rgb(255 255 255/50%)";
  light.style.display = "none";
  dark.style.display = "block";
};

light.addEventListener("click", function () {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
  lightMode();
});
dark.addEventListener("click", function () {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
  darkMode();
});
////////////////////////
let currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    darkMode();
  }
  if (currentTheme === "light") {
    lightMode();
  }
}
