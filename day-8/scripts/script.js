const btnHamburger = document.querySelector("#btn-hamburger");
const sidebarNav = document.querySelector("#sidebar-nav");
const btnSidebarClose = document.querySelector("#btn-sidebar-close");
const overlay = document.querySelector("#overlay");
const themeToggle = document.querySelector("#theme-toggle");

function openSidebar() {
  sidebarNav.classList.add("header__nav__sidebar__open");
  overlay.classList.add("show");
}

function closeSidebar() {
  sidebarNav.classList.remove("header__nav__sidebar__open");
  overlay.classList.remove("show");
}

btnHamburger.addEventListener("click", openSidebar);

btnSidebarClose.addEventListener("click", closeSidebar);

overlay.addEventListener("click", closeSidebar);

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "Light";
} else {
  themeToggle.textContent = "Dark";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "Light";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "Dark";
  }
});