export default function Slideshow() {
	
	// "model"
	// an abstraction of the HTML (view)
	let currentSlideIndex = 0;

	// create a reference to the Block (BEM) elements
	const slideshow = document.querySelector('.slideshow');
	const slideshowSlides = document.querySelectorAll('.slideshow__slide');
	const buttonPrevious = document.querySelector('.slideshow__button-previous');
	const buttonNext = document.querySelector('.slideshow__button-next');
	const navigatorDots = document.querySelectorAll('.slideshow__navigator-dot');

	// check if the slideshow exists before attaching "event-listeners"
	// if the main block element exists, so should all other child elements
	if (slideshow) {
		buttonPrevious.addEventListener('click', handleButtonPreviousClick);
		buttonNext.addEventListener('click', handleButtonNextClick);
		window.addEventListener('keyup', handleWindowKeyUp);
		
		for (let index = 0; index < navigatorDots.length; index += 1) {
			navigatorDots[index].addEventListener('click', event => {
				handleNavigatorDotClick(event, index);
			});
		}
	}

	// split the "handler-functions" into separate functions
	//		you should see at first sight what the buttons, keys and dots does 
	//		in the code regardless of the way it's implemented. this is 
	//		"declarative code". Split the code into more specific functions.
	//		"functions should do one thing and one thing only" -clean code
	function handleButtonPreviousClick(event) {
		decreaseCurrentSlideIndex();
		renderHTML();
	}

	function handleButtonNextClick(event) {
		increaseCurrentSlideIndex();
		renderHTML();
	}

	function handleWindowKeyUp(event) {
		if (event.key === 'ArrowRight') {
			increaseCurrentSlideIndex();
			renderHTML();
		} else if (event.key === 'ArrowLeft') {
			decreaseCurrentSlideIndex();
			renderHTML();
		}
	}

	function handleNavigatorDotClick(event, index) {
		changeCurrentSlideIndex(index);
		renderHTML();
	}

	// "methods"
	// the main purpose of these methods is to mutate model variables,
	// and nothing else. these methods should not be bothered with how the
	// model is presented to the user, but only what the functionality is
	function decreaseCurrentSlideIndex() {
		if (currentSlideIndex > 0) {
			currentSlideIndex -= 1;
		} else {
			currentSlideIndex = slideshowSlides.length - 1;
		} 
	}

	function increaseCurrentSlideIndex() {
		if (currentSlideIndex < slideshowSlides.length - 1) {
			currentSlideIndex += 1;
		} else {
			currentSlideIndex = 0;
		}
	}

	function changeCurrentSlideIndex(index) {
		currentSlideIndex = index;
	}

	// "render"
	// this function renders (updates) the needed HTML DOM elements based
	// on the values of the model. this has to be called after the model
	// has been updated and should preferrably be called once per update,
	// and only from the handler function
	function renderHTML() {
		for (const slide of slideshowSlides) {
			slide.classList.remove('slideshow__slide--active');
		}

		for (const dot of navigatorDots) {
			dot.classList.remove('slideshow__navigator-dot--active');
		}
		
		slideshowSlides[currentSlideIndex].classList.add('slideshow__slide--active');
		navigatorDots[currentSlideIndex].classList.add('slideshow__navigator-dot--active');
	}
}