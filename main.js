const header = document.querySelector('header');

window.addEventListener('scroll', () => {
	header.classList.toggle('fixed', window.scrollY > 0);
});
