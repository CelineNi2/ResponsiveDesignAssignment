let mobileMenuBtn = document.querySelector(".top-header .content .burger_menu_icon");
let closeMenuBtn = document.querySelector(".top-header .content .close_menu_icon");

mobileMenuBtn.addEventListener("click", () => {
    /* On click on the menu button, toggle the visibility state of the menu */
    let mobileMenu = document.querySelector(".page-content .navigation_menu");
    mobileMenu.style.display = "unset";
    let panel = document.querySelector(".page-content .right-panel");
    panel.style.display = "none";

    closeMenuBtn.style.display = "unset";
    mobileMenuBtn.style.display = "none";

    let window = document.querySelector(".page-content");
    window.style.margin = "0";
    window.style.maxWidth = "100%";

})


closeMenuBtn.addEventListener("click", () => {
    /* On click on the menu button, toggle the visibility state of the menu */
    let mobileMenu = document.querySelector(".page-content .navigation_menu");
    mobileMenu.style.display = "none";
    let panel = document.querySelector(".page-content .right-panel");
    panel.style.display = "unset";

    closeMenuBtn.style.display = "none";
    mobileMenuBtn.style.display = "unset";

    let window = document.querySelector(".page-content");
    window.style.marginTop = "20px";
    window.style.marginRight = "auto";
    window.style.marginLeft = "auto";
    window.style.maxWidth = "1070px";
})