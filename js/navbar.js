// mobile navbar toggling feature
console.log("connected");

const navToggle = () => {
  const menuIcon = document.querySelector(".nav-bar-container");
  const nav = document.querySelector(".nav-panel");
  nav.setPointerCapture(".nav-panel");
  const navLinks = document.querySelectorAll(".nav-panel li");

  // nav toggling action
  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    menuIcon.classList.toggle("rotate-horizontal");

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
  });
};

navToggle();
