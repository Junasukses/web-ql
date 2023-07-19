const nav = document.getElementById("nav");
window.onscroll = function () {
	if (this.scrollY >= 20) {
		nav.classList.add("backdrop-blur-[14px]");
		nav.classList.remove("bg-transparent");
	} else {
		nav.classList.add("bg-transparent");
		nav.classList.remove("backdrop-blur-[14px]");
	}
};
