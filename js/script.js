const elNavbar = document.querySelector(".navbar");
const ellToggleNavbar = document.querySelector(".toggle-button");
const elCloseNavbarBtn = document.querySelector(".navbar__close--btn");
const elNavbarLink = document.querySelector(".navbar__link");

ellToggleNavbar.addEventListener("click", () => {
	elNavbar.classList.add("navbar-open");
});

elCloseNavbarBtn.addEventListener("click", () => {
	elNavbar.classList.remove("navbar-open");
});

elNavbarLink.addEventListener("click", () => {
	elNavbar.classList.remove("navbar-open");
});

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
		delay: 3000,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		680: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
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
