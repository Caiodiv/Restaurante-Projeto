window.addEventListener("scroll", function () {
    const logo = document.getElementById("logoFix");
    const header = document.querySelector("header");

    if (window.scrollY > 100) {
        logo.classList.add("scrolled");
        header.classList.add("scrolled-header");
    } else {
        logo.classList.remove("scrolled");
        header.classList.remove("scrolled-header");
    }
});
