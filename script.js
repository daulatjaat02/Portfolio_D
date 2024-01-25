let toggleSwitch = document.querySelector('input[type="checkbox"]');
let nav = document.getElementById("nav");
let toggleIcon = document.getElementById("toggle-icon");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let textBox = document.getElementById("text-box");

function image(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}
/////////////
let darkMode = () => {
  nav.style.backgroundColor = "rgb(0 0 0 /50%)";
  textBox.style.backgroundColor = "rgb(255 255 255/50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  image("dark");
};

let lightMode = () => {
  nav.style.backgroundColor = "rgb(255 255 255/50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 /50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  image("light");
};
////////////////////////
let switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
};
toggleSwitch.addEventListener("change", switchTheme);

let currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
