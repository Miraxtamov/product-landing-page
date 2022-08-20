const elNavbar = document.querySelector(".navbar");
const ellToggleNavbar = document.querySelector(".toggle-button");
const elCloseNavbarBtn = document.querySelector(".navbar__close--btn");

ellToggleNavbar.addEventListener("click", () => {
	elNavbar.classList.add("navbar-open");
});

elCloseNavbarBtn.addEventListener("click", () => {
	elNavbar.classList.remove("navbar-open");
});

// DARK - LIGHT MODE
// DOM Selectors
const body = document.querySelector("body");
const switchBtn = document.getElementById("switch");
const root = document.querySelector(":root");

// Change theme
switchBtn.addEventListener("change", () => {
	toggleRootClass();
});

function toggleRootClass() {
	document.querySelector(":root").classList.toggle("dark");
}
