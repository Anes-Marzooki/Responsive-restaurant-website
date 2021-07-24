const header = document.querySelector('header');
const navigation = document.querySelector('.navigation');
const hamburger = document.querySelector('.hamburger');

window.addEventListener('scroll', () => {
	header.classList.toggle('fixed', window.scrollY > 0);
});

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navigation.classList.toggle('active');
});

window.addEventListener('click', (event) => {
	if (
		event.target.nodeName === 'A' &&
		navigation.classList.contains('active')
	) {
		hamburger.classList.toggle('active');
		navigation.classList.toggle('active');
	}
});
