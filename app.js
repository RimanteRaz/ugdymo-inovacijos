// NAVBAR:

const navToggle = () => {
  const burger = document.querySelector(".burger");
  const navBar = document.querySelector(".nav-bar");
  const primaryMenu = document.querySelector(".primary-menu");
  const secondaryMenu = document.querySelector(".secondary-menu");
  const navCTA = document.querySelector(".nav-cta");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navBar.classList.toggle("open");
    primaryMenu.classList.toggle("open");
    secondaryMenu.classList.toggle("open");
    navCTA.classList.toggle("open");
  });
};

navToggle();

// Masonry Layout for archive pages

let magicGrid = new MagicGrid({
  container: ".archive-grid",
  static: true,
  animate: true,
  gutter: 40,
});

magicGrid.listen();