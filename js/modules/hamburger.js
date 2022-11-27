export default function Hamburger() {
	const menuButton = document.querySelector('.header__menu-button');
	let menuVisible = false;
	menuButton.addEventListener('click', () => {
		if(!menuVisible) {
			menuButton.classList.add('header__menu-button--visible');
			menuVisible = true;
		} else {
			menuButton.classList.remove('header__menu-button--visible');
			menuVisible = false;
		}
	});
}