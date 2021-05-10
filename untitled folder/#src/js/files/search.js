;
const search = document.querySelector('.header__search');
const body = document.querySelector('body');

search.addEventListener('click', function (e) {
	e.preventDefault();
	e.stopPropagation();
	this.classList.add('search--active');
});


body.addEventListener('click', function () {
	search.classList.remove('search--active');
});

