/* Кнопка скролла наверх страницы */

// Находим кнопку по id scrollToTopBtn

const scrollBtn = document.querySelector('#scrollToTopBtn');

// Слушаем событие скролла на странице
window.addEventListener('scroll', function() {

	if (window.pageYOffset > window.innerHeight) {
		scrollBtn.classList.add('top-link--visible');
	} else {
		scrollBtn.classList.remove('top-link--visible');
	}
});