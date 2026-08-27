const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
  navMenu.classList.toggle("open");

  const menuIsOpen = navMenu.classList.contains("open");
  menuButton.setAttribute("aria-expanded", menuIsOpen);
});

/* 点击菜单链接后，自动关闭手机菜单 */
const menuLinks = navMenu.querySelectorAll("a");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});