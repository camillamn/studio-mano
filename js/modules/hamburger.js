export default function Hamburger() {
	// imperative code

	/* model */
	let menuVisible = false;

	/* query selectors */
	// create a reference to the Block (BEM) element
	const menuButton = document.querySelector('.header__menu-button');
	
	/* event listener */
	if (menuButton) {
		menuButton.addEventListener('click', handleMenuButtonClick);
	}

	function handleMenuButtonClick() {
		toggleMenuVisibility();
		renderHTML();
	}

	function toggleMenuVisibility() {
		menuVisible = !menuVisible;
	}

	function renderHTML() {
		if(menuVisible) {
			menuButton.classList.add('header__menu-button--visible');
		} else {
			menuButton.classList.remove('header__menu-button--visible');
		}
	}
}