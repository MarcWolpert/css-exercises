const openButton = document.getElementById('trigger-modal');
const closeButton = document.getElementById('close-modal');

function toggleModal() {
	const modalDiv = document.querySelector('.popup-modal');
	const backdrop = document.querySelector('.backdrop');
	let isShowing = modalDiv.classList.contains('show') === false;
	if (isShowing) {
		modalDiv.style.animationName = 'fade-in';
		modalDiv.style.animationDuration = '2s';
		modalDiv.style.animationDirection = 'forwards';
		modalDiv.style.animationIterationCount = '1';
		modalDiv.classList.add('show');
		backdrop.classList.add('show');
	} else {
		modalDiv.style.animationName = 'fade-out';
		modalDiv.style.animationDuration = '2s';
		modalDiv.style.animationDirection = 'forwards';
		modalDiv.style.animationIterationCount = '1';
		modalDiv.classList.remove('show');
		backdrop.classList.remove('show');
	}
}

openButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
