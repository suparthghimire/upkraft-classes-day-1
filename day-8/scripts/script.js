document.addEventListener("DOMContentLoaded", () => {
  const btnHamburgur = document.querySelector("#btn-hamburger");
  const sidebarNav = document.querySelector("#sidebar");
  const btnSideBarClose = document.querySelector("#btn-sidebar-close");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");
  const overlay = document.querySelector("#overlay");

  const openSidebar = () => {
    sidebarNav.classList.add("is-open");
    overlay.classList.add("is-active");
  };

  const closeSidebar = () => {
    sidebarNav.classList.remove("is-open");
    overlay.classList.remove("is-active");
  };

  btnHamburgur.addEventListener("click", openSidebar);
  btnSideBarClose.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });
});