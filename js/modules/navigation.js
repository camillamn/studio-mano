export default function Navigation() {
	// declarative code

   /* model */
    let navigationVisible = false; 

    /* query selectors */
	 
	 // create a reference to the Block (BEM) element
	 const menu = document.querySelector('.header');
    const menuButton = document.querySelector('.header__menu-button');
    const headerNavigation = document.querySelector('.header__navigation');


    /* Event listeners */
	 // check if Block exists before adding any other event listeners
	 // if the main block element exists, so should all other child elements
	 if (menu) {
		menuButton.addEventListener('click', handleMenuButtonClick);
	 }

    /* Event Handlers */
    function handleMenuButtonClick(event){
        toggleNavigation();
        renderHTML();
    } 

    /* methods */
    function toggleNavigation() {
        navigationVisible = !navigationVisible;
    }

    /* render */
    function renderHTML() {
        if (navigationVisible === true) {
            headerNavigation.classList.add('header__navigation--visible');
        } else {
            headerNavigation.classList.remove('header__navigation--visible');
        }
    }
}