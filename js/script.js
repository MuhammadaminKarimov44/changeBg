let navbar = document.querySelector(".navbar");
let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        navbar.style.background = btn.getAttribute('data-color')
    })
})