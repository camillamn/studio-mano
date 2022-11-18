export default function Slideshow() {
	/********************** data **********************/
	let currentSlideIndex = 0;

	/********************** query selectors **********************/
	const slideshow = document.querySelector('.slideshow');
	const slideshowSlides = document.querySelectorAll('.slideshow__slide');
	const buttonPrevious = document.querySelector('.slideshow__button-previous');
	const buttonNext = document.querySelector('.slideshow__button-next');
	const navigatorDots = document.querySelectorAll('.slideshow__navigator-dot');

	/********************** event listeners **********************/
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

	/********************** event handlers **********************/
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

	/********************** methods **********************/
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

	/********************** render **********************/
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