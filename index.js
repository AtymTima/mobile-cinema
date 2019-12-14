const selectElement = (element) =>
{
	return document.querySelector(element);
};

const menuToggler = selectElement('.menu-toggle');
const body = selectElement('body');

menuToggler.addEventListener('click', () =>
{
	body.classList.toggle('open');
});

ScrollReveal().reveal('.scroll', 
{ 
	delay: 100, 
	easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '30px',
    duration: 1000,
    desktop: true,
    mobile: true,
});