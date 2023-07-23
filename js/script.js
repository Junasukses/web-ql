const firstLogo = "./images/logo/QL_Logo_white.png";
const secondLogo = "./images/logo/QL_Logo_2.png";

const nav = document.getElementById("nav");
const ulNav = document.getElementById("navbar-default");
const logo = document.getElementById("logo-ql");
const button = document.getElementById("toggler-button");
var open = document.querySelector("#open");
var close = document.querySelector("#close");

button.addEventListener("click", (e) => {
	ulNav.classList.toggle("hidden");
	open.classList.toggle("hidden");
	close.classList.toggle("hidden");
});

window.onscroll = function () {
	if (this.scrollY >= 20) {
		logo.src = secondLogo;
		nav.classList.add("bg-white");
		nav.classList.add("drop-shadow-xl");
		ulNav.classList.add("text-[#272643]");
		ulNav.classList.add("bg-gray-200");
		ulNav.classList.remove("bg-gray-800");
		nav.classList.remove("bg-transparent");
		ulNav.classList.remove("text-white");
	} else {
		logo.src = firstLogo;
		nav.classList.add("bg-transparent");
		ulNav.classList.add("text-white");
		ulNav.classList.add("bg-gray-800");
		ulNav.classList.remove("bg-gray-200");
		nav.classList.remove("drop-shadow-xl");
		nav.classList.remove("bg-white");
		ulNav.classList.remove("text-[#272643]");
	}
};
