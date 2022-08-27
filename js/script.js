const elNavbar = document.querySelector(".navbar");
const ellToggleNavbar = document.querySelector(".toggle-button");
const elCloseNavbarBtn = document.querySelector(".navbar__close--btn");
const elNavbarLink = document.querySelectorAll(".navbar__link");

ellToggleNavbar.addEventListener("click", () => {
	elNavbar.classList.add("navbar-open");
});

elCloseNavbarBtn.addEventListener("click", () => {
	elNavbar.classList.remove("navbar-open");
});

elNavbarLink.forEach((link) => {
	link.addEventListener("click", () => {
		elNavbar.classList.remove("navbar-open");
	});
});

// SLIDER
const swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 32,
	slidesPerGroup: 3,
	centerSlide: true,
	loop: true,
	grabCursor: "true",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	autoplay: {
		delay: 2500,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		650: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
	origin: "top",
	distance: "80px",
	duration: 2000,
	reset: true,
});

// SCROLL - PRODUCT
sr.reveal(".product__card, .prices__container--cards-card", {
	interval: 200,
	duration: 1000,
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
