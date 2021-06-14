function el_by_id(s) {
	return document.getElementById(s);
}

const menuBars = el_by_id('menu-bars');
const overlay = el_by_id('overlay');
const nav1 = el_by_id('nav-1');
const nav2 = el_by_id('nav-2');
const nav3 = el_by_id('nav-3');
const nav4 = el_by_id('nav-4');
const nav5 = el_by_id('nav-5');

function toggleNav() {
	//toggle menu bars open/close
	menuBars.classList.toggle('change');
	// toggle menu active
	overlay.classList.toggle('overlay-active');
	if (overlay.classList.contains('overlay-active')) {
		// animate in - overlay
		overlay.classList.remove('overlay-slide-left');
		overlay.classList.add('overlay-slide-right');
	} else {
		// animate out - overlay
		overlay.classList.remove('overlay-slide-right');
		overlay.classList.add('overlay-slide-left');
	}
}
// event listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);