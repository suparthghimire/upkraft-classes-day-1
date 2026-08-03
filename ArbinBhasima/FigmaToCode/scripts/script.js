const btnHamburger = document.querySelector("#btn-hamburger");
const btnSidebarClose = document.querySelector("#btn-sidebar-close");
const sidebarNav = document.querySelector("#sidebar");
const overlay = document.querySelector("#overlay");
const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");

const openSidebar = () => {
  sidebarNav?.classList.add("is-open");
  overlay?.classList.add("is-active");
};

const closeSidebar = () => {
  sidebarNav?.classList.remove("is-open");
  overlay?.classList.remove("is-active");
};

const initTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if(savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

const toggleTheme = () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

btnHamburger?.addEventListener("click", openSidebar);
btnSidebarClose?.addEventListener("click", closeSidebar);
overlay?.addEventListener("click", closeSidebar);


initTheme();
themeToggleBtns.forEach((btn) => {
  btn.addEventListener("click", toggleTheme);
});




sidebarNav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeSidebar();
  }
});