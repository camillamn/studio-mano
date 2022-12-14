export default function Hamburger() {

	// "model"
	// an abstraction of the HTML (view)
	let menuVisible = false;

	// create a reference to the Block (BEM) element
	const menuButton = document.querySelector('.header__menu-button');
	
	// check if the "menuButton" exists before attaching an "event-listener"
	// in this case the menuButton on header exists on every page, so the condition will always be true
	if (menuButton) {
		menuButton.addEventListener('click', handleMenuButtonClick);
	}

	// split the "handler-function" into separate functions
	//		you should see at first sight what "clicking the menuButton" does in the code
	//		regardless of the way it's implemented. this is "declarative code".
	//		this means to split the code into more specific functions.
	//		"functions should do one thing and one thing only", clean code
	function handleMenuButtonClick() {
		toggleMenuVisibility();
		renderHTML();
	}

	// "methods"
	// the purpose of these methods is to mutate model variables,
	// and nothing else. these methods should not be bothered with how the
	// model is presented to the user, but only what the functionality is
	function toggleMenuVisibility() {
		menuVisible = !menuVisible;
	}

	// "render"
	// this function renders (updates) the needed HTML DOM elements based
	// on the values of the model. this has to be called after the model
	// has been updated and should preferrably be called once per update,
	// and only from the handler function
	function renderHTML() {
		if(menuVisible) {
			menuButton.classList.add('header__menu-button--visible');
		} else {
			menuButton.classList.remove('header__menu-button--visible');
		}
	}
}