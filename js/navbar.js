//  mobile nabvar toggling feature  //
console.log("connected");
const navToggle = () => {
    const menuIcon = document.querySelector(".nav-bar-container");
    const nav = document.querySelector(".nav-panel");
    nav.setPointerCapture(".nav-panel");
    const navLinks = document.querySelectorAll(".nav-panel li");

    //nav toggling action
    menuIcon.addEventListener("click", () => {
        nav.classList.toggle(".nav-active");

        // //animate links
        // navLinks.forEach(link)
    });

   
};

navToggle();