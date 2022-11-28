export default function Hamburger() {
	
	/* model */
	let menuVisible = false;

	/* query selectors */
	// create a reference to the Block (BEM) element
	const menuButton = document.querySelector('.header__menu-button');
	
	/* event listener */
	menuButton.addEventListener('click', () => {
		menuVisible = !menuVisible;

	/* event handlers */
		if(menuVisible) {
			menuButton.classList.add('header__menu-button--visible');
		} else {
			menuButton.classList.remove('header__menu-button--visible');
		}
	});
}