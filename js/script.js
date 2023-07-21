const firstLogo = "./images/logo/QL_Logo_white.png";
const secondLogo = "./images/logo/QL_Logo_2.png";

const nav = document.getElementById("nav");
const ulNav = document.getElementById("ulNav");
const logo = document.getElementById("logo-ql");
window.onscroll = function () {
	if (this.scrollY >= 20) {
		logo.src=secondLogo;
		nav.classList.add("bg-white");
		ulNav.classList.add("text-[#272643]");
		nav.classList.remove("bg-transparent");
		ulNav.classList.remove("text-white");
	} else {
		logo.src=firstLogo;
		nav.classList.add("bg-transparent");
		ulNav.classList.add("text-white");
		nav.classList.remove("bg-white");
		ulNav.classList.remove("text-[#272643]");
	}
};
