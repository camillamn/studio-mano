export default function Navigation() {
	// declarative code

	// "model"
	// an abstraction oof the HTML (view)
   let navigationVisible = false; 
	 
	// create a reference to the Block (BEM) element
	const menu = document.querySelector('.header');
   const menuButton = document.querySelector('.header__menu-button');
   const headerNavigation = document.querySelector('.header__navigation');

	// check if Block exists before adding any other event listeners
	// in this case the menu in header exists on every page, so the condition will always be true
	if (menu) {
		menuButton.addEventListener('click', handleMenuButtonClick);
	}

	// split the "handler-function" into separate functions
	//		you should see at first sight what "clicking the menuButton" does in the code
	//		regardless of the way it's implemented. this is "declarative code".
	//		this means to split the code into more specific functions.
	//		"functions should do one thing and one thing only", clean code
   function handleMenuButtonClick(event){
       toggleNavigation();
       renderHTML();
   } 

	// "methods"
	// the main purpose of these methods is to mutate model variables,
	// and nothing else. these methods should not be bothered with how the
	// model is presented to the user, but only what the functionality is
   function toggleNavigation() {
      navigationVisible = !navigationVisible;
   }

	// "render"
	// this function renders (updates) the needed HTML DOM elements based
	// on the values of the model. this has to be called after the model
	// has been updated and should preferrably be called once per update,
	// and only from the handler function
   function renderHTML() {
      if (navigationVisible === true) {
         headerNavigation.classList.add('header__navigation--visible');
      } else {
         headerNavigation.classList.remove('header__navigation--visible');
      }
    }
}