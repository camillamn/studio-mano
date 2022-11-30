// export default function Hamburger() {
	// "data" / "model" / "state"
	// an abstraction of the view (aka. HTML)
	let menuVisible = false;

	// create a reference to the Block (BEM) element
	const menuButton = document.querySelector('.header__menu-button');

	// check if the menuButton exists before attaching an event listener
	// the header exists on every page, and the condition will always be true
	// blabla consistency...
	if (menuButton) {
		menuButton.addEventListener('click', handleMenuButtonClick);
		//menuButton.removeEventListener("click", handleMenuButtonClick);
	}

	// split the handler function into a separate function, this has 2 advantages
	//		1. you should see at first glance what "clicking the menu button" does in the code
	//			regardless of how it's implemented. this is what we call "declarative code". in short
	//			it means to split the code into more specific functions (clean code: functions should
	//			do one thing and do one thing well)
	//
	//		2.	in addition to addEventListener, one can also remove the action by calling
	//			.removeEventListener. though to be able to remove the handler function
	//			(for instance handleMenuButtonClick) the function has to be predefined
	//			and not an arrow function
	function handleMenuButtonClick() {
		toggleMenuVisibility();
		renderHTML();
	}

	// "methods"
	// the main objective of these methods is to only mutate model variables 
	// and *nothing else*. these methods should not be concerned with *how* the
	// data is presented to the user, but rather what the "abstracted" functionality
	// actually is
	function toggleMenuVisibility() {
		menuVisible = !menuVisible;
		//renderHTML();							// dont call render from here. we refer to this as a
														// "side-effect".
	}

	// "render"
	// finally, renderHTML does what it says it does. it renders the needed HTML DOM
	// elements based on the values of the model. this function has to be called *after*
	// the model has been updated. and should ideally be called once per update, from the 
	// handler function only
	function renderHTML() {
		if(menuVisible) {
			menuButton.classList.add('header__menu-button--visible');
		} else {
			menuButton.classList.remove('header__menu-button--visible');
		}
	}
}