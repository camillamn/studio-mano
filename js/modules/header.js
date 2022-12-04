export default function Header() {
	
	// "model"
	// an abstraction of the HTML (view)
	const headerVisibleStart = 100;

	let headerVisible = true;

	let currentScrollDirection = null;
	let previousScrollPosition = 0;

	// create a reference to the Block (BEM) elements
	const header = document.querySelector('.header');

	// check if block exixts before adding any other event listeners
	// in this case the header exists on every page, so the condition will always be true
	if (header) {
		window.addEventListener('scroll', handleWindowScroll);
	}

	// split the "handler-function" into separate functions
	//		you should see at first sight what "clicking the menuButton" does in the code
	//		regardless of the way it's implemented. this is "declarative code".
	//		this means to split the code into more specific functions.
	//		"functions should do one thing and one thing only", clean code
	function handleWindowScroll(event) {
		toggleHeaderVisibility();
		renderHTML();
	}

	// "methods"
	function toggleHeaderVisibility() {
		const scrollY = window.scrollY;

		if (scrollY > previousScrollPosition) {
			currentScrollDirection = 'down';
		} else {
			currentScrollDirection = 'up';
		}
	}

	// "render"
		function renderHTML() {
			if (currentScrollDirection === 'down' && scrollY >= headerVisibleStart) {
				header.classList.add('header--hidden');
			} else {
				header.classList.remove('header--hidden');
			}

		previousScrollPosition = scrollY;
	}
}