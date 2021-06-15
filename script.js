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
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control nav animation
function navAnimation(direction1, direction2) {
	navItems.forEach((nav, i) => {
		nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
	});
}

function toggleNav() {
	//toggle menu bars open/close
	menuBars.classList.toggle('change');
	// toggle menu active
	overlay.classList.toggle('overlay-active');
	if (overlay.classList.contains('overlay-active')) {
		// animate in - overlay
		overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');

		// animate In - Nav items
		navAnimation('out', 'in');
	} else {
		// animate out - overlay
		overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
		// animate out - Nav items
		navAnimation('in', 'out');
	}
}
// event listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
	nav.addEventListener('click', toggleNav);
});