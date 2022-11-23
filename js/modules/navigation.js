export default function Navigation() {

   /* model */
    let navigationVisible = false; 

    /* QuerySelectors */
    const menuButton = document.querySelector('.header__menu-button');
    const headerNavigation = document.querySelector('.header__navigation');


    /* Event listeners */
    menuButton.addEventListener('click', handleMenuButtonClick);

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