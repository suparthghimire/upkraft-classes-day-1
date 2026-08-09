const btnHamburger = document.querySelector("#btn-hamburger");
const sidebarNav = document.querySelector("#sidebar-nav");
const btnSidebarClose = document.querySelector("#btn-sidebar-close");
const overlay = document.querySelector("#overlay");
const themeToggle = document.querySelector("#theme-toggle");

// Hamburger — sidebar open
btnHamburger.addEventListener("click", () => {
  sidebarNav.classList.add("header__nav__sidebar__open");
  overlay.classList.add("overlay--show");
});

// X button — sidebar close
btnSidebarClose.addEventListener("click", () => {
  sidebarNav.classList.remove("header__nav__sidebar__open");
  overlay.classList.remove("overlay--show");
});

// Overlay click — sidebar close
overlay.addEventListener("click", () => {
  sidebarNav.classList.remove("header__nav__sidebar__open");
  overlay.classList.remove("overlay--show");
});

// Theme toggle
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
themeToggle.checked = savedTheme === "dark";

themeToggle.addEventListener("change", () => {
  const newTheme = themeToggle.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
