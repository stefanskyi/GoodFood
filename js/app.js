function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

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


var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

window.addEventListener("load", function () {
	if (document.querySelector('.wrapper')) {
		setTimeout(function () {
			document.querySelector('.wrapper').classList.add('_loaded');
		}, 0);
	}
});

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================
// LettersAnimation
let title = document.querySelectorAll('._letter-animation');
if (title) {
	for (let index = 0; index < title.length; index++) {
		let el = title[index];
		let txt = el.innerHTML;
		let txt_words = txt.replace('  ', ' ').split(' ');
		let new_title = '';
		for (let index = 0; index < txt_words.length; index++) {
			let txt_word = txt_words[index];
			let len = txt_word.length;
			new_title = new_title + '<p>';
			for (let index = 0; index < len; index++) {
				let it = txt_word.substr(index, 1);
				if (it == ' ') {
					it = '&nbsp;';
				}
				new_title = new_title + '<span>' + it + '</span>';
			}
			el.innerHTML = new_title;
			new_title = new_title + '&nbsp;</p>';
		}
	}
}
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {

	function spollerCLick(e) {
		const spoller = e.target.classList.contains('_spoller') ? e.target : e.target.closest('._spoller');
		if (spollersGo) {
			spollersGo = false;

			if (spoller.closest('._spollers').classList.contains('_one')) {
				let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
				for (let i = 0; i < curent_spollers.length; i++) {
					let el = curent_spollers[i];
					if (el != spoller) {
						el.classList.remove('_active');
						_slideUp(el.nextElementSibling);
					}
				}
			}
			console.log(spoller.nextElementSibling);
			spoller.classList.toggle('_active');
			_slideToggle(spoller.nextElementSibling);

			setTimeout(function () {
				spollersGo = true;
			}, 500);
		}
	}
	function spollersInit() {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			let spollerMax = spoller.getAttribute('data-max');

			if (spollerMax && window.innerWidth > spollerMax) {
				if (spoller.classList.contains('_init')) {
					spoller.classList.remove('_active');
					spoller.classList.remove('_init');
					spoller.nextElementSibling.style.cssText = '';
					spoller.removeEventListener("click", spollerCLick);
				}
			} else if (!spoller.classList.contains('_init')) {
				spoller.classList.add('_init');
				spoller.addEventListener("click", spollerCLick);
			}
		}
	}
	function spollersShowActive() {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			if (spoller.classList.contains('_active')) {
				_slideToggle(spoller.nextElementSibling);
			}
		}
	}
	window.addEventListener("resize", spollersInit);

	setTimeout(function () {
		spollersShowActive();
		spollersInit();
	}, 0);
}
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
}
//=================
//SearchInList
function search_in_list(input) {
	let ul = input.parentNode.querySelector('ul')
	let li = ul.querySelectorAll('li');
	let filter = input.value.toUpperCase();

	for (i = 0; i < li.length; i++) {
		let el = li[i];
		let item = el;
		txtValue = item.textContent || item.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			el.style.display = "";
		} else {
			el.style.display = "none";
		}
	}
}
//=================
//DigiFormat
function digi(str) {
	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
	return r;
}
//=================
//DiGiAnimate
function digi_animate(digi_animate) {
	if (digi_animate.length > 0) {
		for (let index = 0; index < digi_animate.length; index++) {
			const el = digi_animate[index];
			const el_to = parseInt(el.innerHTML.replace(' ', ''));
			if (!el.classList.contains('_done')) {
				digi_animate_value(el, 0, el_to, 1500);
			}
		}
	}
}
function digi_animate_value(el, start, end, duration) {
	var obj = el;
	var range = end - start;
	// no timer shorter than 50ms (not really visible any way)
	var minTimer = 50;
	// calc step time to show all interediate values
	var stepTime = Math.abs(Math.floor(duration / range));

	// never go below minTimer
	stepTime = Math.max(stepTime, minTimer);

	// get current time and calculate desired end time
	var startTime = new Date().getTime();
	var endTime = startTime + duration;
	var timer;

	function run() {
		var now = new Date().getTime();
		var remaining = Math.max((endTime - now) / duration, 0);
		var value = Math.round(end - (remaining * range));
		obj.innerHTML = digi(value);
		if (value == end) {
			clearInterval(timer);
		}
	}

	timer = setInterval(run, stepTime);
	run();

	el.classList.add('_done');
}
//=================
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let video = el.getAttribute('data-video');
			popup_open(item, video);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}
function popup_open(item, video = '') {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('.popup_' + item);
	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		popup_close();
	}
});

//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================
//Wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//========================================
//IsHidden
function _is_hidden(el) {
	return (el.offsetParent === null)
}
// ShowMore Beta ========================
let moreBlocks = document.querySelectorAll('._more-block');
if (moreBlocks.length > 0) {
	let wrapper = document.querySelector('.wrapper');
	for (let index = 0; index < moreBlocks.length; index++) {
		const moreBlock = moreBlocks[index];
		let items = moreBlock.querySelectorAll('._more-item');
		if (items.length > 0) {
			let itemsMore = moreBlock.querySelector('._more-link');
			let itemsContent = moreBlock.querySelector('._more-content');
			let itemsView = itemsContent.getAttribute('data-view');
			if (getComputedStyle(itemsContent).getPropertyValue("transition-duration") === '0s') {
				itemsContent.style.cssText = "transition-duration: 1ms";
			}
			itemsMore.addEventListener("click", function (e) {
				if (itemsMore.classList.contains('_active')) {
					setSize();
				} else {
					setSize('start');
				}
				itemsMore.classList.toggle('_active');
				e.preventDefault();
			});

			let isScrollStart;
			function setSize(type) {
				let resultHeight;
				let itemsContentHeight = 0;
				let itemsContentStartHeight = 0;

				for (let index = 0; index < items.length; index++) {
					if (index < itemsView) {
						itemsContentHeight += items[index].offsetHeight;
					}
					itemsContentStartHeight += items[index].offsetHeight;
				}
				resultHeight = (type === 'start') ? itemsContentStartHeight : itemsContentHeight;
				isScrollStart = window.innerWidth - wrapper.offsetWidth;
				itemsContent.style.height = `${resultHeight}px`;
			}

			itemsContent.addEventListener("transitionend", updateSize, false);

			function updateSize() {
				let isScrollEnd = window.innerWidth - wrapper.offsetWidth;
				if (isScrollStart === 0 && isScrollEnd > 0 || isScrollStart > 0 && isScrollEnd === 0) {
					if (itemsMore.classList.contains('_active')) {
						setSize('start');
					} else {
						setSize();
					}
				}
			}
			window.addEventListener("resize", function (e) {
				if (!itemsMore.classList.contains('_active')) {
					setSize();
				} else {
					setSize('start');
				}
			});
			setSize();
		}
	}
}
//==RATING======================================
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}
// Основная функция
function initRatings() {
	let ratingActive, ratingValue;
	// "Бегаем" по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	// Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();

		if (rating.classList.contains('rating_set')) {
			setRating(rating);
		}
	}

	// Инициализайция переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	// Изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
	// Возможность указать оценку 
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function (e) {
				// Обновление переменных
				initRatingVars(rating);
				// Обновление активных звезд
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function (e) {
				// Обновление активных звезд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function (e) {
				// Обновление переменных
				initRatingVars(rating);

				if (rating.dataset.ajax) {
					// "Отправить" на сервер
					setRatingValue(ratingItem.value, rating);
				} else {
					// Отобразить указанную оцнку
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
			});
		}
	}

	async function setRatingValue(value, rating) {
		if (!rating.classList.contains('rating_sending')) {
			rating.classList.add('rating_sending');

			// Отправика данных (value) на сервер
			let response = await fetch('rating.json', {
				method: 'GET',

				//body: JSON.stringify({
				//	userRating: value
				//}),
				//headers: {
				//	'content-type': 'application/json'
				//}

			});
			if (response.ok) {
				const result = await response.json();

				// Получаем новый рейтинг
				const newRating = result.newRating;

				// Вывод нового среднего результата
				ratingValue.innerHTML = newRating;

				// Обновление активных звезд
				setRatingActiveWidth();

				rating.classList.remove('rating_sending');
			} else {
				alert("Ошибка");

				rating.classList.remove('rating_sending');
			}
		}
	}
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
	let start = performance.now();
	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}
function makeEaseOut(timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}
function makeEaseInOut(timing) {
	return function (timeFraction) {
		if (timeFraction < .5)
			return timing(2 * timeFraction) / 2;
		else
			return (2 - timing(2 * (1 - timeFraction))) / 2;
	}
}
function quad(timeFraction) {
	return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
	return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/

//Полифилы
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}
async function form_submit(e) {
	let btn = e.target;
	let form = btn.closest('form');
	let error = form_validate(form);
	if (error == 0) {
		let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
		let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
		const message = form.getAttribute('data-message');
		const ajax = form.getAttribute('data-ajax');
		const test = form.getAttribute('data-test');

		//SendForm
		if (ajax) {
			e.preventDefault();
			let formData = new FormData(form);
			form.classList.add('_sending');
			let response = await fetch(formAction, {
				method: formMethod,
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				form.classList.remove('_sending');
				if (message) {
					popup_open(message + '-message');
				}
				form_clean(form);
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		}
		// If test
		if (test) {
			e.preventDefault();
			popup_open(message + '-message');
			form_clean(form);
		}
	} else {
		let form_error = form.querySelectorAll('._error');
		if (form_error && form.classList.contains('_goto-error')) {
			_goto(form_error[0], 1000, 50);
		}
		e.preventDefault();
	}
}
function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll('._req');
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];
			if (!_is_hidden(el)) {
				error += form_validate_input(el);
			}
		}
	}
	return error;
}
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}
function form_add_error(input) {
	input.classList.add('_error');
	input.parentElement.classList.add('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
	let input_error_text = input.getAttribute('data-error');
	if (input_error_text && input_error_text != '') {
		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
	}
}
function form_remove_error(input) {
	input.classList.remove('_error');
	input.parentElement.classList.remove('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}
function form_clean(form) {
	let inputs = form.querySelectorAll('input,textarea');
	for (let index = 0; index < inputs.length; index++) {
		const el = inputs[index];
		el.parentElement.classList.remove('_focus');
		el.classList.remove('_focus');
		el.value = el.getAttribute('data-value');
	}
	let checkboxes = form.querySelectorAll('.checkbox__input');
	if (checkboxes.length > 0) {
		for (let index = 0; index < checkboxes.length; index++) {
			const checkbox = checkboxes[index];
			checkbox.checked = false;
		}
	}
	let selects = form.querySelectorAll('select');
	if (selects.length > 0) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_default_value = select.getAttribute('data-default');
			select.value = select_default_value;
			select_item(select);
		}
	}
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}

//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.code === 'Escape') {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select') && !e.target.classList.contains('_option')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const selectTitle = select.querySelector('.select__title');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	selectTitle.addEventListener('click', function (e) {
		selectItemActions();
	});

	function selectMultiItems() {
		let selectedOptions = select.querySelectorAll('.select__option');
		let originalOptions = original.querySelectorAll('option');
		let selectedOptionsText = [];
		for (let index = 0; index < selectedOptions.length; index++) {
			const selectedOption = selectedOptions[index];
			originalOptions[index].removeAttribute('selected');
			if (selectedOption.classList.contains('_selected')) {
				const selectOptionText = selectedOption.innerHTML;
				selectedOptionsText.push(selectOptionText);
				originalOptions[index].setAttribute('selected', 'selected');
			}
		}
		select.querySelector('.select__value').innerHTML = '<span>' + selectedOptionsText + '</span>';
	}
	function selectItemActions(type) {
		if (!type) {
			let selects = document.querySelectorAll('.select');
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_body_options = select.querySelector('.select__options');
				if (select != select_item.closest('.select')) {
					select.classList.remove('_active');
					_slideUp(select_body_options, 100);
				}
			}
			_slideToggle(select_body_options, 100);
			select.classList.toggle('_active');
		}
	}
	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value && !original.hasAttribute('multiple')) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				if (original.hasAttribute('multiple')) {
					select_option.classList.toggle('_selected');
					selectMultiItems();
				} else {
					select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
					original.value = select_option_value;
					select_option.style.display = 'none';
				}
			}
			let type;
			if (original.hasAttribute('multiple')) {
				type = 'multiple';
			}
			selectItemActions(type);
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.innerHTML;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass" && !input.parentElement.querySelector('.form__viewpass').classList.contains('_active')) {
					input.setAttribute('type', 'password');
				}
				if (input.classList.contains('_date')) {
					/*
					input.classList.add('_mask');
					Inputmask("99.99.9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
					*/
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('_mask');
					Inputmask("+375 (99) 9999999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('_mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
			if (input.classList.contains('_date')) {
				const calendarItem = datepicker(input, {
					customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					overlayButton: 'Применить',
					overlayPlaceholder: 'Год (4 цифры)',
					startDay: 1,
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
				const dataFrom = input.getAttribute('data-from');
				const dataTo = input.getAttribute('data-to');
				if (dataFrom) {
					calendarItem.setMin(new Date(dataFrom));
				}
				if (dataTo) {
					calendarItem.setMax(new Date(dataTo));
				}
			}
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}

//RANGE
const priceSlider = document.querySelector('.price-filter__slider');
if (priceSlider) {

	let textFrom = priceSlider.getAttribute('data-from');
	let textTo = priceSlider.getAttribute('data-to');

	noUiSlider.create(priceSlider, {
		start: [0, 200000],
		connect: true,
		tooltips: [wNumb({ decimals: 0, prefix: textFrom + ' ' }), wNumb({ decimals: 0, prefix: textTo + ' ' })],
		range: {
			'min': [0],
			'max': [200000]
		}
	});

	/*
	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');
	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);
	*/

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != '') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != '') {
			priceEndValue = priceEnd.value;
		}
		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	}
}
let scr_body = document.querySelector('body');
let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

let currentScroll;

//ScrollOnScroll
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
	let src_value = currentScroll = pageYOffset;
	let header = document.querySelector('header.header');
	if (header !== null) {
		if (src_value > 10) {
			header.classList.add('_scroll');
		} else {
			header.classList.remove('_scroll');
		}
	}
	if (scr_blocks.length > 0) {
		for (let index = 0; index < scr_blocks.length; index++) {
			let block = scr_blocks[index];
			let block_offset = offset(block).top;
			let block_height = block.offsetHeight;

			/*
			if ((src_value > block_offset - block_height) && src_value < (block_offset + block_height) && window.innerHeight > scr_min_height && window.innerWidth > 992) {
				let scrProcent = (src_value - block_offset) / block_height * 100;
				scrParallax(block, scrProcent, block_height);
			}
			*/

			if ((pageYOffset > block_offset - window.innerHeight / 1.5) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				block.classList.add('_scr-sector_active');
			} else {
				if (block.classList.contains('_scr-sector_active')) {
					block.classList.remove('_scr-sector_active');
				}
			}
			if ((pageYOffset > block_offset - window.innerHeight / 2) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				if (!block.classList.contains('_scr-sector_current')) {
					block.classList.add('_scr-sector_current');
				}
			} else {
				if (block.classList.contains('_scr-sector_current')) {
					block.classList.remove('_scr-sector_current');
				}
			}
		}
	}
	if (scr_items.length > 0) {
		for (let index = 0; index < scr_items.length; index++) {
			let scr_item = scr_items[index];
			let scr_item_offset = offset(scr_item).top;
			let scr_item_height = scr_item.offsetHeight;


			let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
			if (window.innerHeight > scr_item_height) {
				scr_item_point = window.innerHeight - scr_item_height / 3;
			}

			if ((src_value > scr_item_offset - scr_item_point) && src_value < (scr_item_offset + scr_item_height)) {
				scr_item.classList.add('_active');
				scroll_load_item(scr_item);
			} else {
				scr_item.classList.remove('_active');
			}
			if (((src_value > scr_item_offset - window.innerHeight))) {
				if (scr_item.querySelectorAll('._lazy').length > 0) {
					scroll_lazy(scr_item);
				}
			}
		}
	}
	if (scr_fix_block.length > 0) {
		fix_block(scr_fix_block, src_value);
	}
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	if (custom_scroll_line) {
		let window_height = window.innerHeight;
		let content_height = document.querySelector('.wrapper').offsetHeight;
		let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
		let custom_scroll_line_height = custom_scroll_line.offsetHeight;
		custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
	}
	if (src_value > scrollDirection) {
		// downscroll code
	} else {
		// upscroll code
	}
	scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
	//document.addEventListener("DOMContentLoaded", scroll_scroll);
	scroll_scroll();
}, 100);

function scroll_lazy(scr_item) {
	let lazy_src = scr_item.querySelectorAll('*[data-src]');
	if (lazy_src.length > 0) {
		for (let index = 0; index < lazy_src.length; index++) {
			const el = lazy_src[index];
			if (!el.classList.contains('_loaded')) {
				el.setAttribute('src', el.getAttribute('data-src'));
				el.classList.add('_loaded');
			}
		}
	}
	let lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');
	if (lazy_srcset.length > 0) {
		for (let index = 0; index < lazy_srcset.length; index++) {
			const el = lazy_srcset[index];
			if (!el.classList.contains('_loaded')) {
				el.setAttribute('srcset', el.getAttribute('data-srcset'));
				el.classList.add('_loaded');
			}
		}
	}
}
function scroll_load_item(scr_item) {
	if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
		let map_item = document.getElementById('map');
		if (map_item) {
			scr_item.classList.add('_loaded-map');
			map();
		}
	}
}
function scrParallax(block, scrProcent, blockHeight) {
	let prlxItems = block.querySelectorAll('._prlx-item');
	if (prlxItems.length > 0) {
		for (let index = 0; index < prlxItems.length; index++) {
			const prlxItem = prlxItems[index];
			let prlxItemAttr = (prlxItem.dataset.prlx) ? prlxItem.dataset.prlx : 3;
			const prlxItemValue = -1 * (blockHeight / 100 * scrProcent / prlxItemAttr);
			prlxItem.style.cssText = `transform: translateY(${prlxItemValue}px);`;
		}
	}
}
//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
	disableScroll();
	window.addEventListener('wheel', full_scroll);

	let swiperScrolls = document.querySelectorAll('._swiper_scroll');

	if (swiperScrolls.length > 0) {
		for (let index = 0; index < swiperScrolls.length; index++) {
			const swiperScroll = swiperScrolls[index];
			swiperScroll.addEventListener("mouseenter", function (e) {
				window.removeEventListener('wheel', full_scroll);
			});
			swiperScroll.addEventListener("mouseleave", function (e) {
				window.addEventListener('wheel', full_scroll);
			});
		}
	}
}
function getPrevBlockPos(current_block_prev) {
	let viewport_height = window.innerHeight;
	let current_block_prev_height = current_block_prev.offsetHeight;
	let block_pos = offset(current_block_prev).top;

	if (current_block_prev_height >= viewport_height) {
		block_pos = block_pos + (current_block_prev_height - viewport_height);
	}
	return block_pos;
}
function full_scroll(e) {
	let viewport_height = window.innerHeight;
	if (viewport_height >= scr_min_height) {
		if (scrolling_full) {
			let current_block = document.querySelector('._scr-sector._scr-sector_current');
			let current_block_pos = offset(current_block).top;
			let current_block_height = current_block.offsetHeight;
			let current_block_next = current_block.nextElementSibling;
			let current_block_prev = current_block.previousElementSibling;
			if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
				if (current_block_height <= viewport_height) {
					if (current_block_prev) {
						full_scroll_to_sector(getPrevBlockPos(current_block_prev));
					}
				} else {
					enableScroll();
					if (currentScroll <= current_block_pos) {
						if (current_block_prev) {
							full_scroll_to_sector(getPrevBlockPos(current_block_prev));
						}
					}
				}
			} else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
				if (current_block_height <= viewport_height) {
					if (current_block_next) {
						let block_pos = offset(current_block_next).top;
						full_scroll_to_sector(block_pos);
					}
				} else {
					enableScroll();
					if (current_block_next) {
						let block_pos = offset(current_block_next).top;
						if (currentScroll >= block_pos - viewport_height) {
							full_scroll_to_sector(block_pos);
						}
					}
				}
			}
		} else {
			disableScroll();
		}
	} else {
		enableScroll();
	}
}
function full_scroll_to_sector(pos) {
	disableScroll();
	scrolling_full = false;
	_goto(pos, 800);

	let scr_pause = 500;
	if (navigator.appVersion.indexOf("Mac") != -1) {
		scr_pause = 1000;
	};
	setTimeout(function () {
		scrolling_full = true;
	}, scr_pause);
}
function full_scroll_pagestart() { }
function full_scroll_pageend() { }

//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
	let blocks = [];
	for (let index = 0; index < link.length; index++) {
		let el = link[index];
		let block_name = el.getAttribute('href').replace('#', '');
		if (block_name != '' && !~blocks.indexOf(block_name)) {
			blocks.push(block_name);
		}
		el.addEventListener('click', function (e) {
			if (document.querySelector('.menu__body._active')) {
				menu_close();
				body_lock_remove(500);
			}
			let target_block_class = el.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		})
	}

	window.addEventListener('scroll', function (el) {
		let old_current_link = document.querySelectorAll('._goto-block._active');
		if (old_current_link) {
			for (let index = 0; index < old_current_link.length; index++) {
				let el = old_current_link[index];
				el.classList.remove('_active');
			}
		}
		for (let index = 0; index < blocks.length; index++) {
			let block = blocks[index];
			let block_item = document.querySelector('.' + block);
			if (block_item) {
				let block_offset = offset(block_item).top;
				let block_height = block_item.offsetHeight;
				if ((pageYOffset > block_offset - window.innerHeight / 3) && pageYOffset < (block_offset + block_height) - window.innerHeight / 3) {
					let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
					for (let index = 0; index < current_links.length; index++) {
						let current_link = current_links[index];
						current_link.classList.add('_active');
					}
				}
			}
		}
	})
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
	for (let index = 0; index < goto_links.length; index++) {
		let goto_link = goto_links[index];
		goto_link.addEventListener('click', function (e) {
			let target_block_class = goto_link.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		});
	}
}
function _goto(target_block, speed, offset = 0) {
	let header = '';
	//OffsetHeader
	//if (window.innerWidth < 992) {
	//	header = 'header';
	//}
	let options = {
		speedAsDuration: true,
		speed: speed,
		header: header,
		offset: offset,
		easing: 'easeOutQuad',
	};
	let scr = new SmoothScroll();
	scr.animateScroll(target_block, '', options);
}

//SameFunctions
function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function disableScroll() {
	if (window.addEventListener) // older FF
		window.addEventListener('DOMMouseScroll', preventDefault, false);
	document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove = preventDefault; // mobile
	document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
	if (window.removeEventListener)
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;
}
function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
	/*if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}*/
}

function fix_block(scr_fix_block, scr_value) {
	let window_width = parseInt(window.innerWidth);
	let window_height = parseInt(window.innerHeight);
	let header_height = parseInt(document.querySelector('header').offsetHeight) + 15;
	for (let index = 0; index < scr_fix_block.length; index++) {
		const block = scr_fix_block[index];
		let block_width = block.getAttribute('data-width');
		const item = block.querySelector('._side-block');
		if (!block_width) { block_width = 0; }
		if (window_width > block_width) {
			if (item.offsetHeight < window_height - (header_height + 30)) {
				if (scr_value > offset(block).top - (header_height + 15)) {
					item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
				} else {
					gotoRelative(item);
				}
				if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight + (header_height + 15))) {
					block.style.cssText = "position:relative;";
					item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
				}
			} else {
				gotoRelative(item);
			}
		}
	}
	function gotoRelative(item) {
		item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
	}
}

if (!isMobile.any()) {
	//custom_scroll();
	/*
	window.addEventListener('wheel', scroll_animate, {
		capture: true,
		passive: true
	});
	window.addEventListener('resize', custom_scroll, {
		capture: true,
		passive: true
	});
	*/
}
function custom_scroll(event) {
	scr_body.style.overflow = 'hidden';
	let window_height = window.innerHeight;
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	let custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
	let custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
	if (custom_scroll_content_height > window_height) {
		if (!custom_scroll_line) {
			let custom_scroll = document.createElement('div');
			custom_scroll_line = document.createElement('div');
			custom_scroll.setAttribute('class', '_custom-scroll');
			custom_scroll_line.setAttribute('class', '_custom-scroll__line');
			custom_scroll.appendChild(custom_scroll_line);
			scr_body.appendChild(custom_scroll);
		}
		custom_scroll_line.style.height = custom_cursor_height + 'px';
	}
}

let new_pos = pageYOffset;
function scroll_animate(event) {
	let window_height = window.innerHeight;
	let content_height = document.querySelector('.wrapper').offsetHeight;
	let start_position = pageYOffset;
	let pos_add = 100;

	if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
		new_pos = new_pos - pos_add;
	} else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
		new_pos = new_pos + pos_add;
	}
	if (new_pos > (content_height - window_height)) new_pos = content_height - window_height;
	if (new_pos < 0) new_pos = 0;

	if (scrolling) {
		scrolling = false;
		_goto(new_pos, 1000);

		let scr_pause = 100;
		if (navigator.appVersion.indexOf("Mac") != -1) {
			scr_pause = scr_pause * 2;
		};
		setTimeout(function () {
			scrolling = true;
			_goto(new_pos, 1000);
		}, scr_pause);
	}
	//If native scroll
	//disableScroll();
}

// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";


function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
// 

// done slider
;
!(function (t, e) {
	"function" == typeof define && define.amd
		? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
			return e(t, i);
		})
		: "object" == typeof module && module.exports
			? (module.exports = e(t, require("jquery")))
			: (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
	"use strict";
	function i(i, o, a) {
		function l(t, e, n) {
			var s,
				o = "$()." + i + '("' + e + '")';
			return (
				t.each(function (t, l) {
					var h = a.data(l, i);
					if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + o);
					var c = h[e];
					if (!c || "_" == e.charAt(0)) return void r(o + " is not a valid method");
					var d = c.apply(h, n);
					s = void 0 === s ? d : s;
				}),
				void 0 !== s ? s : t
			);
		}
		function h(t, e) {
			t.each(function (t, n) {
				var s = a.data(n, i);
				s ? (s.option(e), s._init()) : ((s = new o(n, e)), a.data(n, i, s));
			});
		}
		(a = a || e || t.jQuery),
			a &&
			(o.prototype.option ||
				(o.prototype.option = function (t) {
					a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
				}),
				(a.fn[i] = function (t) {
					if ("string" == typeof t) {
						var e = s.call(arguments, 1);
						return l(this, t, e);
					}
					return h(this, t), this;
				}),
				n(a));
	}
	function n(t) {
		!t || (t && t.bridget) || (t.bridget = i);
	}
	var s = Array.prototype.slice,
		o = t.console,
		r =
			"undefined" == typeof o
				? function () { }
				: function (t) {
					o.error(t);
				};
	return n(e || t.jQuery), i;
}),
	(function (t, e) {
		"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
	})("undefined" != typeof window ? window : this, function () {
		function t() { }
		var e = t.prototype;
		return (
			(e.on = function (t, e) {
				if (t && e) {
					var i = (this._events = this._events || {}),
						n = (i[t] = i[t] || []);
					return n.indexOf(e) == -1 && n.push(e), this;
				}
			}),
			(e.once = function (t, e) {
				if (t && e) {
					this.on(t, e);
					var i = (this._onceEvents = this._onceEvents || {}),
						n = (i[t] = i[t] || {});
					return (n[e] = !0), this;
				}
			}),
			(e.off = function (t, e) {
				var i = this._events && this._events[t];
				if (i && i.length) {
					var n = i.indexOf(e);
					return n != -1 && i.splice(n, 1), this;
				}
			}),
			(e.emitEvent = function (t, e) {
				var i = this._events && this._events[t];
				if (i && i.length) {
					(i = i.slice(0)), (e = e || []);
					for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
						var o = i[s],
							r = n && n[o];
						r && (this.off(t, o), delete n[o]), o.apply(this, e);
					}
					return this;
				}
			}),
			(e.allOff = function () {
				delete this._events, delete this._onceEvents;
			}),
			t
		);
	}),
	(function (t, e) {
		"use strict";
		"function" == typeof define && define.amd
			? define("get-size/get-size", [], function () {
				return e();
			})
			: "object" == typeof module && module.exports
				? (module.exports = e())
				: (t.getSize = e());
	})(window, function () {
		"use strict";
		function t(t) {
			var e = parseFloat(t),
				i = t.indexOf("%") == -1 && !isNaN(e);
			return i && e;
		}
		function e() { }
		function i() {
			for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < h; e++) {
				var i = l[e];
				t[i] = 0;
			}
			return t;
		}
		function n(t) {
			var e = getComputedStyle(t);
			return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
		}
		function s() {
			if (!c) {
				c = !0;
				var e = document.createElement("div");
				(e.style.width = "200px"), (e.style.padding = "1px 2px 3px 4px"), (e.style.borderStyle = "solid"), (e.style.borderWidth = "1px 2px 3px 4px"), (e.style.boxSizing = "border-box");
				var i = document.body || document.documentElement;
				i.appendChild(e);
				var s = n(e);
				(o.isBoxSizeOuter = r = 200 == t(s.width)), i.removeChild(e);
			}
		}
		function o(e) {
			if ((s(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType)) {
				var o = n(e);
				if ("none" == o.display) return i();
				var a = {};
				(a.width = e.offsetWidth), (a.height = e.offsetHeight);
				for (var c = (a.isBorderBox = "border-box" == o.boxSizing), d = 0; d < h; d++) {
					var u = l[d],
						f = o[u],
						p = parseFloat(f);
					a[u] = isNaN(p) ? 0 : p;
				}
				var v = a.paddingLeft + a.paddingRight,
					g = a.paddingTop + a.paddingBottom,
					m = a.marginLeft + a.marginRight,
					y = a.marginTop + a.marginBottom,
					b = a.borderLeftWidth + a.borderRightWidth,
					E = a.borderTopWidth + a.borderBottomWidth,
					S = c && r,
					x = t(o.width);
				x !== !1 && (a.width = x + (S ? 0 : v + b));
				var C = t(o.height);
				return C !== !1 && (a.height = C + (S ? 0 : g + E)), (a.innerWidth = a.width - (v + b)), (a.innerHeight = a.height - (g + E)), (a.outerWidth = a.width + m), (a.outerHeight = a.height + y), a;
			}
		}
		var r,
			a =
				"undefined" == typeof console
					? e
					: function (t) {
						console.error(t);
					},
			l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
			h = l.length,
			c = !1;
		return o;
	}),
	(function (t, e) {
		"use strict";
		"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
	})(window, function () {
		"use strict";
		var t = (function () {
			var t = window.Element.prototype;
			if (t.matches) return "matches";
			if (t.matchesSelector) return "matchesSelector";
			for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
				var n = e[i],
					s = n + "MatchesSelector";
				if (t[s]) return s;
			}
		})();
		return function (e, i) {
			return e[t](i);
		};
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
				return e(t, i);
			})
			: "object" == typeof module && module.exports
				? (module.exports = e(t, require("desandro-matches-selector")))
				: (t.fizzyUIUtils = e(t, t.matchesSelector));
	})(window, function (t, e) {
		var i = {};
		(i.extend = function (t, e) {
			for (var i in e) t[i] = e[i];
			return t;
		}),
			(i.modulo = function (t, e) {
				return ((t % e) + e) % e;
			});
		var n = Array.prototype.slice;
		(i.makeArray = function (t) {
			if (Array.isArray(t)) return t;
			if (null === t || void 0 === t) return [];
			var e = "object" == typeof t && "number" == typeof t.length;
			return e ? n.call(t) : [t];
		}),
			(i.removeFrom = function (t, e) {
				var i = t.indexOf(e);
				i != -1 && t.splice(i, 1);
			}),
			(i.getParent = function (t, i) {
				for (; t.parentNode && t != document.body;) if (((t = t.parentNode), e(t, i))) return t;
			}),
			(i.getQueryElement = function (t) {
				return "string" == typeof t ? document.querySelector(t) : t;
			}),
			(i.handleEvent = function (t) {
				var e = "on" + t.type;
				this[e] && this[e](t);
			}),
			(i.filterFindElements = function (t, n) {
				t = i.makeArray(t);
				var s = [];
				return (
					t.forEach(function (t) {
						if (t instanceof HTMLElement) {
							if (!n) return void s.push(t);
							e(t, n) && s.push(t);
							for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++) s.push(i[o]);
						}
					}),
					s
				);
			}),
			(i.debounceMethod = function (t, e, i) {
				i = i || 100;
				var n = t.prototype[e],
					s = e + "Timeout";
				t.prototype[e] = function () {
					var t = this[s];
					clearTimeout(t);
					var e = arguments,
						o = this;
					this[s] = setTimeout(function () {
						n.apply(o, e), delete o[s];
					}, i);
				};
			}),
			(i.docReady = function (t) {
				var e = document.readyState;
				"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
			}),
			(i.toDashed = function (t) {
				return t
					.replace(/(.)([A-Z])/g, function (t, e, i) {
						return e + "-" + i;
					})
					.toLowerCase();
			});
		var s = t.console;
		return (
			(i.htmlInit = function (e, n) {
				i.docReady(function () {
					var o = i.toDashed(n),
						r = "data-" + o,
						a = document.querySelectorAll("[" + r + "]"),
						l = document.querySelectorAll(".js-" + o),
						h = i.makeArray(a).concat(i.makeArray(l)),
						c = r + "-options",
						d = t.jQuery;
					h.forEach(function (t) {
						var i,
							o = t.getAttribute(r) || t.getAttribute(c);
						try {
							i = o && JSON.parse(o);
						} catch (a) {
							return void (s && s.error("Error parsing " + r + " on " + t.className + ": " + a));
						}
						var l = new e(t, i);
						d && d.data(t, n, l);
					});
				});
			}),
			i
		);
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define("flickity/js/cell", ["get-size/get-size"], function (i) {
				return e(t, i);
			})
			: "object" == typeof module && module.exports
				? (module.exports = e(t, require("get-size")))
				: ((t.Flickity = t.Flickity || {}), (t.Flickity.Cell = e(t, t.getSize)));
	})(window, function (t, e) {
		function i(t, e) {
			(this.element = t), (this.parent = e), this.create();
		}
		var n = i.prototype;
		return (
			(n.create = function () {
				(this.element.style.position = "absolute"), this.element.setAttribute("aria-selected", "false"), (this.x = 0), (this.shift = 0);
			}),
			(n.destroy = function () {
				this.element.style.position = "";
				var t = this.parent.originSide;
				this.element.removeAttribute("aria-selected"), (this.element.style[t] = "");
			}),
			(n.getSize = function () {
				this.size = e(this.element);
			}),
			(n.setPosition = function (t) {
				(this.x = t), this.updateTarget(), this.renderPosition(t);
			}),
			(n.updateTarget = n.setDefaultTarget = function () {
				var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
				this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign;
			}),
			(n.renderPosition = function (t) {
				var e = this.parent.originSide;
				this.element.style[e] = this.parent.getPositionValue(t);
			}),
			(n.wrapShift = function (t) {
				(this.shift = t), this.renderPosition(this.x + this.parent.slideableWidth * t);
			}),
			(n.remove = function () {
				this.element.parentNode.removeChild(this.element);
			}),
			i
		);
	}),
	(function (t, e) {
		"function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? (module.exports = e()) : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = e()));
	})(window, function () {
		"use strict";
		function t(t) {
			(this.parent = t), (this.isOriginLeft = "left" == t.originSide), (this.cells = []), (this.outerWidth = 0), (this.height = 0);
		}
		var e = t.prototype;
		return (
			(e.addCell = function (t) {
				if ((this.cells.push(t), (this.outerWidth += t.size.outerWidth), (this.height = Math.max(t.size.outerHeight, this.height)), 1 == this.cells.length)) {
					this.x = t.x;
					var e = this.isOriginLeft ? "marginLeft" : "marginRight";
					this.firstMargin = t.size[e];
				}
			}),
			(e.updateTarget = function () {
				var t = this.isOriginLeft ? "marginRight" : "marginLeft",
					e = this.getLastCell(),
					i = e ? e.size[t] : 0,
					n = this.outerWidth - (this.firstMargin + i);
				this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
			}),
			(e.getLastCell = function () {
				return this.cells[this.cells.length - 1];
			}),
			(e.select = function () {
				this.changeSelected(!0);
			}),
			(e.unselect = function () {
				this.changeSelected(!1);
			}),
			(e.changeSelected = function (t) {
				var e = t ? "add" : "remove";
				this.cells.forEach(function (i) {
					i.element.classList[e]("is-selected"), i.element.setAttribute("aria-selected", t.toString());
				});
			}),
			(e.getCellElements = function () {
				return this.cells.map(function (t) {
					return t.element;
				});
			}),
			t
		);
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (i) {
				return e(t, i);
			})
			: "object" == typeof module && module.exports
				? (module.exports = e(t, require("fizzy-ui-utils")))
				: ((t.Flickity = t.Flickity || {}), (t.Flickity.animatePrototype = e(t, t.fizzyUIUtils)));
	})(window, function (t, e) {
		var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
			n = 0;
		i ||
			(i = function (t) {
				var e = new Date().getTime(),
					i = Math.max(0, 16 - (e - n)),
					s = setTimeout(t, i);
				return (n = e + i), s;
			});
		var s = {};
		(s.startAnimation = function () {
			this.isAnimating || ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
		}),
			(s.animate = function () {
				this.applyDragForce(), this.applySelectedAttraction();
				var t = this.x;
				if ((this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating)) {
					var e = this;
					i(function () {
						e.animate();
					});
				}
			});
		var o = (function () {
			var t = document.documentElement.style;
			return "string" == typeof t.transform ? "transform" : "WebkitTransform";
		})();
		return (
			(s.positionSlider = function () {
				var t = this.x;
				this.options.wrapAround && this.cells.length > 1 && ((t = e.modulo(t, this.slideableWidth)), (t -= this.slideableWidth), this.shiftWrapCells(t)), (t += this.cursorPosition), (t = this.options.rightToLeft && o ? -t : t);
				var i = this.getPositionValue(t);
				this.slider.style[o] = this.isAnimating ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
				var n = this.slides[0];
				if (n) {
					var s = -this.x - n.target,
						r = s / this.slidesWidth;
					this.dispatchEvent("scroll", null, [r, s]);
				}
			}),
			(s.positionSliderAtSelected = function () {
				this.cells.length && ((this.x = -this.selectedSlide.target), this.positionSlider());
			}),
			(s.getPositionValue = function (t) {
				return this.options.percentPosition ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + "%" : Math.round(t) + "px";
			}),
			(s.settle = function (t) {
				this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++,
					this.restingFrames > 2 && ((this.isAnimating = !1), delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle"));
			}),
			(s.shiftWrapCells = function (t) {
				var e = this.cursorPosition + t;
				this._shiftCells(this.beforeShiftCells, e, -1);
				var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
				this._shiftCells(this.afterShiftCells, i, 1);
			}),
			(s._shiftCells = function (t, e, i) {
				for (var n = 0; n < t.length; n++) {
					var s = t[n],
						o = e > 0 ? i : 0;
					s.wrapShift(o), (e -= s.size.outerWidth);
				}
			}),
			(s._unshiftCells = function (t) {
				if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
			}),
			(s.integratePhysics = function () {
				(this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
			}),
			(s.applyForce = function (t) {
				this.velocity += t;
			}),
			(s.getFrictionFactor = function () {
				return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
			}),
			(s.getRestingPosition = function () {
				return this.x + this.velocity / (1 - this.getFrictionFactor());
			}),
			(s.applyDragForce = function () {
				if (this.isPointerDown) {
					var t = this.dragX - this.x,
						e = t - this.velocity;
					this.applyForce(e);
				}
			}),
			(s.applySelectedAttraction = function () {
				if (!this.isPointerDown && !this.isFreeScrolling && this.cells.length) {
					var t = this.selectedSlide.target * -1 - this.x,
						e = t * this.options.selectedAttraction;
					this.applyForce(e);
				}
			}),
			s
		);
	}),
	(function (t, e) {
		if ("function" == typeof define && define.amd)
			define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (i, n, s, o, r, a) {
				return e(t, i, n, s, o, r, a);
			});
		else if ("object" == typeof module && module.exports) module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
		else {
			var i = t.Flickity;
			t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype);
		}
	})(window, function (t, e, i, n, s, o, r) {
		function a(t, e) {
			for (t = n.makeArray(t); t.length;) e.appendChild(t.shift());
		}
		function l(t, e) {
			var i = n.getQueryElement(t);
			if (!i) return void (d && d.error("Bad element for Flickity: " + (i || t)));
			if (((this.element = i), this.element.flickityGUID)) {
				var s = f[this.element.flickityGUID];
				return s.option(e), s;
			}
			h && (this.$element = h(this.element)), (this.options = n.extend({}, this.constructor.defaults)), this.option(e), this._create();
		}
		var h = t.jQuery,
			c = t.getComputedStyle,
			d = t.console,
			u = 0,
			f = {};
		(l.defaults = { accessibility: !0, cellAlign: "center", freeScrollFriction: 0.075, friction: 0.28, namespaceJQueryEvents: !0, percentPosition: !0, resize: !0, selectedAttraction: 0.025, setGallerySize: !0 }), (l.createMethods = []);
		var p = l.prototype;
		n.extend(p, e.prototype),
			(p._create = function () {
				var e = (this.guid = ++u);
				(this.element.flickityGUID = e),
					(f[e] = this),
					(this.selectedIndex = 0),
					(this.restingFrames = 0),
					(this.x = 0),
					(this.velocity = 0),
					(this.originSide = this.options.rightToLeft ? "right" : "left"),
					(this.viewport = document.createElement("div")),
					(this.viewport.className = "flickity-viewport"),
					this._createSlider(),
					(this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this),
					l.createMethods.forEach(function (t) {
						this[t]();
					}, this),
					this.options.watchCSS ? this.watchCSS() : this.activate();
			}),
			(p.option = function (t) {
				n.extend(this.options, t);
			}),
			(p.activate = function () {
				if (!this.isActive) {
					(this.isActive = !0), this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize();
					var t = this._filterFindCellElements(this.element.children);
					a(t, this.slider),
						this.viewport.appendChild(this.slider),
						this.element.appendChild(this.viewport),
						this.reloadCells(),
						this.options.accessibility && ((this.element.tabIndex = 0), this.element.addEventListener("keydown", this)),
						this.emitEvent("activate");
					var e,
						i = this.options.initialIndex;
					(e = this.isInitActivated ? this.selectedIndex : void 0 !== i && this.cells[i] ? i : 0), this.select(e, !1, !0), (this.isInitActivated = !0);
				}
			}),
			(p._createSlider = function () {
				var t = document.createElement("div");
				(t.className = "flickity-slider"), (t.style[this.originSide] = 0), (this.slider = t);
			}),
			(p._filterFindCellElements = function (t) {
				return n.filterFindElements(t, this.options.cellSelector);
			}),
			(p.reloadCells = function () {
				(this.cells = this._makeCells(this.slider.children)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize();
			}),
			(p._makeCells = function (t) {
				var e = this._filterFindCellElements(t),
					i = e.map(function (t) {
						return new s(t, this);
					}, this);
				return i;
			}),
			(p.getLastCell = function () {
				return this.cells[this.cells.length - 1];
			}),
			(p.getLastSlide = function () {
				return this.slides[this.slides.length - 1];
			}),
			(p.positionCells = function () {
				this._sizeCells(this.cells), this._positionCells(0);
			}),
			(p._positionCells = function (t) {
				(t = t || 0), (this.maxCellHeight = t ? this.maxCellHeight || 0 : 0);
				var e = 0;
				if (t > 0) {
					var i = this.cells[t - 1];
					e = i.x + i.size.outerWidth;
				}
				for (var n = this.cells.length, s = t; s < n; s++) {
					var o = this.cells[s];
					o.setPosition(e), (e += o.size.outerWidth), (this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight));
				}
				(this.slideableWidth = e), this.updateSlides(), this._containSlides(), (this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0);
			}),
			(p._sizeCells = function (t) {
				t.forEach(function (t) {
					t.getSize();
				});
			}),
			(p.updateSlides = function () {
				if (((this.slides = []), this.cells.length)) {
					var t = new o(this);
					this.slides.push(t);
					var e = "left" == this.originSide,
						i = e ? "marginRight" : "marginLeft",
						n = this._getCanCellFit();
					this.cells.forEach(function (e, s) {
						if (!t.cells.length) return void t.addCell(e);
						var r = t.outerWidth - t.firstMargin + (e.size.outerWidth - e.size[i]);
						n.call(this, s, r) ? t.addCell(e) : (t.updateTarget(), (t = new o(this)), this.slides.push(t), t.addCell(e));
					}, this),
						t.updateTarget(),
						this.updateSelectedSlide();
				}
			}),
			(p._getCanCellFit = function () {
				var t = this.options.groupCells;
				if (!t)
					return function () {
						return !1;
					};
				if ("number" == typeof t) {
					var e = parseInt(t, 10);
					return function (t) {
						return t % e !== 0;
					};
				}
				var i = "string" == typeof t && t.match(/^(\d+)%$/),
					n = i ? parseInt(i[1], 10) / 100 : 1;
				return function (t, e) {
					return e <= (this.size.innerWidth + 1) * n;
				};
			}),
			(p._init = p.reposition = function () {
				this.positionCells(), this.positionSliderAtSelected();
			}),
			(p.getSize = function () {
				(this.size = i(this.element)), this.setCellAlign(), (this.cursorPosition = this.size.innerWidth * this.cellAlign);
			});
		var v = { center: { left: 0.5, right: 0.5 }, left: { left: 0, right: 1 }, right: { right: 0, left: 1 } };
		return (
			(p.setCellAlign = function () {
				var t = v[this.options.cellAlign];
				this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
			}),
			(p.setGallerySize = function () {
				if (this.options.setGallerySize) {
					var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
					this.viewport.style.height = t + "px";
				}
			}),
			(p._getWrapShiftCells = function () {
				if (this.options.wrapAround) {
					this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
					var t = this.cursorPosition,
						e = this.cells.length - 1;
					(this.beforeShiftCells = this._getGapCells(t, e, -1)), (t = this.size.innerWidth - this.cursorPosition), (this.afterShiftCells = this._getGapCells(t, 0, 1));
				}
			}),
			(p._getGapCells = function (t, e, i) {
				for (var n = []; t > 0;) {
					var s = this.cells[e];
					if (!s) break;
					n.push(s), (e += i), (t -= s.size.outerWidth);
				}
				return n;
			}),
			(p._containSlides = function () {
				if (this.options.contain && !this.options.wrapAround && this.cells.length) {
					var t = this.options.rightToLeft,
						e = t ? "marginRight" : "marginLeft",
						i = t ? "marginLeft" : "marginRight",
						n = this.slideableWidth - this.getLastCell().size[i],
						s = n < this.size.innerWidth,
						o = this.cursorPosition + this.cells[0].size[e],
						r = n - this.size.innerWidth * (1 - this.cellAlign);
					this.slides.forEach(function (t) {
						s ? (t.target = n * this.cellAlign) : ((t.target = Math.max(t.target, o)), (t.target = Math.min(t.target, r)));
					}, this);
				}
			}),
			(p.dispatchEvent = function (t, e, i) {
				var n = e ? [e].concat(i) : i;
				if ((this.emitEvent(t, n), h && this.$element)) {
					t += this.options.namespaceJQueryEvents ? ".flickity" : "";
					var s = t;
					if (e) {
						var o = h.Event(e);
						(o.type = t), (s = o);
					}
					this.$element.trigger(s, i);
				}
			}),
			(p.select = function (t, e, i) {
				this.isActive &&
					((t = parseInt(t, 10)),
						this._wrapSelect(t),
						(this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)),
						this.slides[t] &&
						((this.selectedIndex = t),
							this.updateSelectedSlide(),
							i ? this.positionSliderAtSelected() : this.startAnimation(),
							this.options.adaptiveHeight && this.setGallerySize(),
							this.dispatchEvent("select"),
							this.dispatchEvent("cellSelect")));
			}),
			(p._wrapSelect = function (t) {
				var e = this.slides.length,
					i = this.options.wrapAround && e > 1;
				if (!i) return t;
				var s = n.modulo(t, e),
					o = Math.abs(s - this.selectedIndex),
					r = Math.abs(s + e - this.selectedIndex),
					a = Math.abs(s - e - this.selectedIndex);
				!this.isDragSelect && r < o ? (t += e) : !this.isDragSelect && a < o && (t -= e), t < 0 ? (this.x -= this.slideableWidth) : t >= e && (this.x += this.slideableWidth);
			}),
			(p.previous = function (t, e) {
				this.select(this.selectedIndex - 1, t, e);
			}),
			(p.next = function (t, e) {
				this.select(this.selectedIndex + 1, t, e);
			}),
			(p.updateSelectedSlide = function () {
				var t = this.slides[this.selectedIndex];
				t &&
					(this.unselectSelectedSlide(),
						(this.selectedSlide = t),
						t.select(),
						(this.selectedCells = t.cells),
						(this.selectedElements = t.getCellElements()),
						(this.selectedCell = t.cells[0]),
						(this.selectedElement = this.selectedElements[0]));
			}),
			(p.unselectSelectedSlide = function () {
				this.selectedSlide && this.selectedSlide.unselect();
			}),
			(p.selectCell = function (t, e, i) {
				var n;
				"number" == typeof t ? (n = this.cells[t]) : ("string" == typeof t && (t = this.element.querySelector(t)), (n = this.getCell(t)));
				for (var s = 0; n && s < this.slides.length; s++) {
					var o = this.slides[s],
						r = o.cells.indexOf(n);
					if (r != -1) return void this.select(s, e, i);
				}
			}),
			(p.getCell = function (t) {
				for (var e = 0; e < this.cells.length; e++) {
					var i = this.cells[e];
					if (i.element == t) return i;
				}
			}),
			(p.getCells = function (t) {
				t = n.makeArray(t);
				var e = [];
				return (
					t.forEach(function (t) {
						var i = this.getCell(t);
						i && e.push(i);
					}, this),
					e
				);
			}),
			(p.getCellElements = function () {
				return this.cells.map(function (t) {
					return t.element;
				});
			}),
			(p.getParentCell = function (t) {
				var e = this.getCell(t);
				return e ? e : ((t = n.getParent(t, ".flickity-slider > *")), this.getCell(t));
			}),
			(p.getAdjacentCellElements = function (t, e) {
				if (!t) return this.selectedSlide.getCellElements();
				e = void 0 === e ? this.selectedIndex : e;
				var i = this.slides.length;
				if (1 + 2 * t >= i) return this.getCellElements();
				for (var s = [], o = e - t; o <= e + t; o++) {
					var r = this.options.wrapAround ? n.modulo(o, i) : o,
						a = this.slides[r];
					a && (s = s.concat(a.getCellElements()));
				}
				return s;
			}),
			(p.uiChange = function () {
				this.emitEvent("uiChange");
			}),
			(p.childUIPointerDown = function (t) {
				this.emitEvent("childUIPointerDown", [t]);
			}),
			(p.onresize = function () {
				this.watchCSS(), this.resize();
			}),
			n.debounceMethod(l, "onresize", 150),
			(p.resize = function () {
				if (this.isActive) {
					this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
					var t = this.selectedElements && this.selectedElements[0];
					this.selectCell(t, !1, !0);
				}
			}),
			(p.watchCSS = function () {
				var t = this.options.watchCSS;
				if (t) {
					var e = c(this.element, ":after").content;
					e.indexOf("flickity") != -1 ? this.activate() : this.deactivate();
				}
			}),
			(p.onkeydown = function (t) {
				if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))
					if (37 == t.keyCode) {
						var e = this.options.rightToLeft ? "next" : "previous";
						this.uiChange(), this[e]();
					} else if (39 == t.keyCode) {
						var i = this.options.rightToLeft ? "previous" : "next";
						this.uiChange(), this[i]();
					}
			}),
			(p.deactivate = function () {
				this.isActive &&
					(this.element.classList.remove("flickity-enabled"),
						this.element.classList.remove("flickity-rtl"),
						this.cells.forEach(function (t) {
							t.destroy();
						}),
						this.unselectSelectedSlide(),
						this.element.removeChild(this.viewport),
						a(this.slider.children, this.element),
						this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)),
						(this.isActive = !1),
						this.emitEvent("deactivate"));
			}),
			(p.destroy = function () {
				this.deactivate(), t.removeEventListener("resize", this), this.emitEvent("destroy"), h && this.$element && h.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid];
			}),
			n.extend(p, r),
			(l.data = function (t) {
				t = n.getQueryElement(t);
				var e = t && t.flickityGUID;
				return e && f[e];
			}),
			n.htmlInit(l, "flickity"),
			h && h.bridget && h.bridget("flickity", l),
			(l.setJQuery = function (t) {
				h = t;
			}),
			(l.Cell = s),
			l
		);
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (i) {
				return e(t, i);
			})
			: "object" == typeof module && module.exports
				? (module.exports = e(t, require("ev-emitter")))
				: (t.Unipointer = e(t, t.EvEmitter));
	})(window, function (t, e) {
		function i() { }
		function n() { }
		var s = (n.prototype = Object.create(e.prototype));
		(s.bindStartEvent = function (t) {
			this._bindStartEvent(t, !0);
		}),
			(s.unbindStartEvent = function (t) {
				this._bindStartEvent(t, !1);
			}),
			(s._bindStartEvent = function (e, i) {
				i = void 0 === i || !!i;
				var n = i ? "addEventListener" : "removeEventListener";
				t.PointerEvent ? e[n]("pointerdown", this) : (e[n]("mousedown", this), e[n]("touchstart", this));
			}),
			(s.handleEvent = function (t) {
				var e = "on" + t.type;
				this[e] && this[e](t);
			}),
			(s.getTouch = function (t) {
				for (var e = 0; e < t.length; e++) {
					var i = t[e];
					if (i.identifier == this.pointerIdentifier) return i;
				}
			}),
			(s.onmousedown = function (t) {
				var e = t.button;
				(e && 0 !== e && 1 !== e) || this._pointerDown(t, t);
			}),
			(s.ontouchstart = function (t) {
				this._pointerDown(t, t.changedTouches[0]);
			}),
			(s.onpointerdown = function (t) {
				this._pointerDown(t, t);
			}),
			(s._pointerDown = function (t, e) {
				t.button || this.isPointerDown || ((this.isPointerDown = !0), (this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier), this.pointerDown(t, e));
			}),
			(s.pointerDown = function (t, e) {
				this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
			});
		var o = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"] };
		return (
			(s._bindPostStartEvents = function (e) {
				if (e) {
					var i = o[e.type];
					i.forEach(function (e) {
						t.addEventListener(e, this);
					}, this),
						(this._boundPointerEvents = i);
				}
			}),
			(s._unbindPostStartEvents = function () {
				this._boundPointerEvents &&
					(this._boundPointerEvents.forEach(function (e) {
						t.removeEventListener(e, this);
					}, this),
						delete this._boundPointerEvents);
			}),
			(s.onmousemove = function (t) {
				this._pointerMove(t, t);
			}),
			(s.onpointermove = function (t) {
				t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
			}),
			(s.ontouchmove = function (t) {
				var e = this.getTouch(t.changedTouches);
				e && this._pointerMove(t, e);
			}),
			(s._pointerMove = function (t, e) {
				this.pointerMove(t, e);
			}),
			(s.pointerMove = function (t, e) {
				this.emitEvent("pointerMove", [t, e]);
			}),
			(s.onmouseup = function (t) {
				this._pointerUp(t, t);
			}),
			(s.onpointerup = function (t) {
				t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
			}),
			(s.ontouchend = function (t) {
				var e = this.getTouch(t.changedTouches);
				e && this._pointerUp(t, e);
			}),
			(s._pointerUp = function (t, e) {
				this._pointerDone(), this.pointerUp(t, e);
			}),
			(s.pointerUp = function (t, e) {
				this.emitEvent("pointerUp", [t, e]);
			}),
			(s._pointerDone = function () {
				(this.isPointerDown = !1), delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone();
			}),
			(s.pointerDone = i),
			(s.onpointercancel = function (t) {
				t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
			}),
			(s.ontouchcancel = function (t) {
				var e = this.getTouch(t.changedTouches);
				e && this._pointerCancel(t, e);
			}),
			(s._pointerCancel = function (t, e) {
				this._pointerDone(), this.pointerCancel(t, e);
			}),
			(s.pointerCancel = function (t, e) {
				this.emitEvent("pointerCancel", [t, e]);
			}),
			(n.getPointerPoint = function (t) {
				return { x: t.pageX, y: t.pageY };
			}),
			n
		);
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define("unidragger/unidragger", ["unipointer/unipointer"], function (i) {
				return e(t, i);
			})
			: "object" == typeof module && module.exports
				? (module.exports = e(t, require("unipointer")))
				: (t.Unidragger = e(t, t.Unipointer));
	})(window, function (t, e) {
		function i() { }
		var n = (i.prototype = Object.create(e.prototype));
		return (
			(n.bindHandles = function () {
				this._bindHandles(!0);
			}),
			(n.unbindHandles = function () {
				this._bindHandles(!1);
			}),
			(n._bindHandles = function (e) {
				e = void 0 === e || !!e;
				for (var i = e ? "addEventListener" : "removeEventListener", n = 0; n < this.handles.length; n++) {
					var s = this.handles[n];
					this._bindStartEvent(s, e), s[i]("click", this), t.PointerEvent && (s.style.touchAction = e ? this._touchActionValue : "");
				}
			}),
			(n._touchActionValue = "none"),
			(n.pointerDown = function (t, e) {
				if ("INPUT" == t.target.nodeName && "range" == t.target.type) return (this.isPointerDown = !1), void delete this.pointerIdentifier;
				this._dragPointerDown(t, e);
				var i = document.activeElement;
				i && i.blur && i.blur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
			}),
			(n._dragPointerDown = function (t, i) {
				this.pointerDownPoint = e.getPointerPoint(i);
				var n = this.canPreventDefaultOnPointerDown(t, i);
				n && t.preventDefault();
			}),
			(n.canPreventDefaultOnPointerDown = function (t) {
				return "SELECT" != t.target.nodeName;
			}),
			(n.pointerMove = function (t, e) {
				var i = this._dragPointerMove(t, e);
				this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i);
			}),
			(n._dragPointerMove = function (t, i) {
				var n = e.getPointerPoint(i),
					s = { x: n.x - this.pointerDownPoint.x, y: n.y - this.pointerDownPoint.y };
				return !this.isDragging && this.hasDragStarted(s) && this._dragStart(t, i), s;
			}),
			(n.hasDragStarted = function (t) {
				return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
			}),
			(n.pointerUp = function (t, e) {
				this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
			}),
			(n._dragPointerUp = function (t, e) {
				this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
			}),
			(n._dragStart = function (t, i) {
				(this.isDragging = !0), (this.dragStartPoint = e.getPointerPoint(i)), (this.isPreventingClicks = !0), this.dragStart(t, i);
			}),
			(n.dragStart = function (t, e) {
				this.emitEvent("dragStart", [t, e]);
			}),
			(n._dragMove = function (t, e, i) {
				this.isDragging && this.dragMove(t, e, i);
			}),
			(n.dragMove = function (t, e, i) {
				t.preventDefault(), this.emitEvent("dragMove", [t, e, i]);
			}),
			(n._dragEnd = function (t, e) {
				(this.isDragging = !1),
					setTimeout(
						function () {
							delete this.isPreventingClicks;
						}.bind(this)
					),
					this.dragEnd(t, e);
			}),
			(n.dragEnd = function (t, e) {
				this.emitEvent("dragEnd", [t, e]);
			}),
			(n.onclick = function (t) {
				this.isPreventingClicks && t.preventDefault();
			}),
			(n._staticClick = function (t, e) {
				if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
					var i = t.target.nodeName;
					("INPUT" != i && "TEXTAREA" != i) || t.target.focus(),
						this.staticClick(t, e),
						"mouseup" != t.type &&
						((this.isIgnoringMouseUp = !0),
							setTimeout(
								function () {
									delete this.isIgnoringMouseUp;
								}.bind(this),
								400
							));
				}
			}),
			(n.staticClick = function (t, e) {
				this.emitEvent("staticClick", [t, e]);
			}),
			(i.getPointerPoint = e.getPointerPoint),
			i
		);
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (i, n, s) {
				return e(t, i, n, s);
			})
			: "object" == typeof module && module.exports
				? (module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")))
				: (t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils));
	})(window, function (t, e, i, n) {
		function s(t) {
			var e = "touchstart" == t.type,
				i = "touch" == t.pointerType,
				n = d[t.target.nodeName];
			return e || i || n;
		}
		function o() {
			return { x: t.pageXOffset, y: t.pageYOffset };
		}
		n.extend(e.defaults, { draggable: !0, dragThreshold: 3 }), e.createMethods.push("_createDrag");
		var r = e.prototype;
		n.extend(r, i.prototype), (r._touchActionValue = "pan-y");
		var a = "createTouch" in document,
			l = !1;
		(r._createDrag = function () {
			this.on("activate", this.bindDrag),
				this.on("uiChange", this._uiChangeDrag),
				this.on("childUIPointerDown", this._childUIPointerDownDrag),
				this.on("deactivate", this.unbindDrag),
				a && !l && (t.addEventListener("touchmove", function () { }), (l = !0));
		}),
			(r.bindDrag = function () {
				this.options.draggable && !this.isDragBound && (this.element.classList.add("is-draggable"), (this.handles = [this.viewport]), this.bindHandles(), (this.isDragBound = !0));
			}),
			(r.unbindDrag = function () {
				this.isDragBound && (this.element.classList.remove("is-draggable"), this.unbindHandles(), delete this.isDragBound);
			}),
			(r._uiChangeDrag = function () {
				delete this.isFreeScrolling;
			}),
			(r._childUIPointerDownDrag = function (t) {
				t.preventDefault(), this.pointerDownFocus(t);
			});
		var h = { TEXTAREA: !0, INPUT: !0, OPTION: !0 },
			c = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 };
		(r.pointerDown = function (e, i) {
			var n = h[e.target.nodeName] && !c[e.target.type];
			if (n) return (this.isPointerDown = !1), void delete this.pointerIdentifier;
			this._dragPointerDown(e, i);
			var s = document.activeElement;
			s && s.blur && s != this.element && s != document.body && s.blur(),
				this.pointerDownFocus(e),
				(this.dragX = this.x),
				this.viewport.classList.add("is-pointer-down"),
				this._bindPostStartEvents(e),
				(this.pointerDownScroll = o()),
				t.addEventListener("scroll", this),
				this.dispatchEvent("pointerDown", e, [i]);
		}),
			(r.pointerDownFocus = function (e) {
				var i = s(e);
				if (this.options.accessibility && !i) {
					var n = t.pageYOffset;
					this.element.focus(), t.pageYOffset != n && t.scrollTo(t.pageXOffset, n);
				}
			});
		var d = { INPUT: !0, SELECT: !0 };
		return (
			(r.canPreventDefaultOnPointerDown = function (t) {
				var e = s(t);
				return !e;
			}),
			(r.hasDragStarted = function (t) {
				return Math.abs(t.x) > this.options.dragThreshold;
			}),
			(r.pointerUp = function (t, e) {
				delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e);
			}),
			(r.pointerDone = function () {
				t.removeEventListener("scroll", this), delete this.pointerDownScroll;
			}),
			(r.dragStart = function (e, i) {
				(this.dragStartPosition = this.x), this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [i]);
			}),
			(r.pointerMove = function (t, e) {
				var i = this._dragPointerMove(t, e);
				this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i);
			}),
			(r.dragMove = function (t, e, i) {
				t.preventDefault(), (this.previousDragX = this.dragX);
				var n = this.options.rightToLeft ? -1 : 1,
					s = this.dragStartPosition + i.x * n;
				if (!this.options.wrapAround && this.slides.length) {
					var o = Math.max(-this.slides[0].target, this.dragStartPosition);
					s = s > o ? 0.5 * (s + o) : s;
					var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
					s = s < r ? 0.5 * (s + r) : s;
				}
				(this.dragX = s), (this.dragMoveTime = new Date()), this.dispatchEvent("dragMove", t, [e, i]);
			}),
			(r.dragEnd = function (t, e) {
				this.options.freeScroll && (this.isFreeScrolling = !0);
				var i = this.dragEndRestingSelect();
				if (this.options.freeScroll && !this.options.wrapAround) {
					var n = this.getRestingPosition();
					this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target;
				} else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
				delete this.previousDragX, (this.isDragSelect = this.options.wrapAround), this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e]);
			}),
			(r.dragEndRestingSelect = function () {
				var t = this.getRestingPosition(),
					e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
					i = this._getClosestResting(t, e, 1),
					n = this._getClosestResting(t, e, -1),
					s = i.distance < n.distance ? i.index : n.index;
				return s;
			}),
			(r._getClosestResting = function (t, e, i) {
				for (
					var n = this.selectedIndex,
					s = 1 / 0,
					o =
						this.options.contain && !this.options.wrapAround
							? function (t, e) {
								return t <= e;
							}
							: function (t, e) {
								return t < e;
							};
					o(e, s) && ((n += i), (s = e), (e = this.getSlideDistance(-t, n)), null !== e);

				)
					e = Math.abs(e);
				return { distance: s, index: n - i };
			}),
			(r.getSlideDistance = function (t, e) {
				var i = this.slides.length,
					s = this.options.wrapAround && i > 1,
					o = s ? n.modulo(e, i) : e,
					r = this.slides[o];
				if (!r) return null;
				var a = s ? this.slideableWidth * Math.floor(e / i) : 0;
				return t - (r.target + a);
			}),
			(r.dragEndBoostSelect = function () {
				if (void 0 === this.previousDragX || !this.dragMoveTime || new Date() - this.dragMoveTime > 100) return 0;
				var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
					e = this.previousDragX - this.dragX;
				return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
			}),
			(r.staticClick = function (t, e) {
				var i = this.getParentCell(t.target),
					n = i && i.element,
					s = i && this.cells.indexOf(i);
				this.dispatchEvent("staticClick", t, [e, n, s]);
			}),
			(r.onscroll = function () {
				var t = o(),
					e = this.pointerDownScroll.x - t.x,
					i = this.pointerDownScroll.y - t.y;
				(Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone();
			}),
			e
		);
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define("tap-listener/tap-listener", ["unipointer/unipointer"], function (i) {
				return e(t, i);
			})
			: "object" == typeof module && module.exports
				? (module.exports = e(t, require("unipointer")))
				: (t.TapListener = e(t, t.Unipointer));
	})(window, function (t, e) {
		function i(t) {
			this.bindTap(t);
		}
		var n = (i.prototype = Object.create(e.prototype));
		return (
			(n.bindTap = function (t) {
				t && (this.unbindTap(), (this.tapElement = t), this._bindStartEvent(t, !0));
			}),
			(n.unbindTap = function () {
				this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement);
			}),
			(n.pointerUp = function (i, n) {
				if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
					var s = e.getPointerPoint(n),
						o = this.tapElement.getBoundingClientRect(),
						r = t.pageXOffset,
						a = t.pageYOffset,
						l = s.x >= o.left + r && s.x <= o.right + r && s.y >= o.top + a && s.y <= o.bottom + a;
					if ((l && this.emitEvent("tap", [i, n]), "mouseup" != i.type)) {
						this.isIgnoringMouseUp = !0;
						var h = this;
						setTimeout(function () {
							delete h.isIgnoringMouseUp;
						}, 400);
					}
				}
			}),
			(n.destroy = function () {
				this.pointerDone(), this.unbindTap();
			}),
			i
		);
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (i, n, s) {
				return e(t, i, n, s);
			})
			: "object" == typeof module && module.exports
				? (module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")))
				: e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
	})(window, function (t, e, i, n) {
		"use strict";
		function s(t, e) {
			(this.direction = t), (this.parent = e), this._create();
		}
		function o(t) {
			return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z";
		}
		var r = "http://www.w3.org/2000/svg";
		(s.prototype = new i()),
			(s.prototype._create = function () {
				(this.isEnabled = !0), (this.isPrevious = this.direction == -1);
				var t = this.parent.options.rightToLeft ? 1 : -1;
				this.isLeft = this.direction == t;
				var e = (this.element = document.createElement("button"));
				(e.className = "flickity-prev-next-button"), (e.className += this.isPrevious ? " previous" : " next"), e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "previous" : "next");
				var i = this.createSVG();
				e.appendChild(i), this.on("tap", this.onTap), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
			}),
			(s.prototype.activate = function () {
				this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element);
			}),
			(s.prototype.deactivate = function () {
				this.parent.element.removeChild(this.element), i.prototype.destroy.call(this), this.element.removeEventListener("click", this);
			}),
			(s.prototype.createSVG = function () {
				var t = document.createElementNS(r, "svg");
				t.setAttribute("viewBox", "0 0 100 100");
				var e = document.createElementNS(r, "path"),
					i = o(this.parent.options.arrowShape);
				return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t;
			}),
			(s.prototype.onTap = function () {
				if (this.isEnabled) {
					this.parent.uiChange();
					var t = this.isPrevious ? "previous" : "next";
					this.parent[t]();
				}
			}),
			(s.prototype.handleEvent = n.handleEvent),
			(s.prototype.onclick = function () {
				var t = document.activeElement;
				t && t == this.element && this.onTap();
			}),
			(s.prototype.enable = function () {
				this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
			}),
			(s.prototype.disable = function () {
				this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
			}),
			(s.prototype.update = function () {
				var t = this.parent.slides;
				if (this.parent.options.wrapAround && t.length > 1) return void this.enable();
				var e = t.length ? t.length - 1 : 0,
					i = this.isPrevious ? 0 : e,
					n = this.parent.selectedIndex == i ? "disable" : "enable";
				this[n]();
			}),
			(s.prototype.destroy = function () {
				this.deactivate();
			}),
			n.extend(e.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }),
			e.createMethods.push("_createPrevNextButtons");
		var a = e.prototype;
		return (
			(a._createPrevNextButtons = function () {
				this.options.prevNextButtons && ((this.prevButton = new s(-1, this)), (this.nextButton = new s(1, this)), this.on("activate", this.activatePrevNextButtons));
			}),
			(a.activatePrevNextButtons = function () {
				this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
			}),
			(a.deactivatePrevNextButtons = function () {
				this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
			}),
			(e.PrevNextButton = s),
			e
		);
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (i, n, s) {
				return e(t, i, n, s);
			})
			: "object" == typeof module && module.exports
				? (module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")))
				: e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
	})(window, function (t, e, i, n) {
		function s(t) {
			(this.parent = t), this._create();
		}
		(s.prototype = new i()),
			(s.prototype._create = function () {
				(this.holder = document.createElement("ol")), (this.holder.className = "flickity-page-dots"), (this.dots = []), this.on("tap", this.onTap), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
			}),
			(s.prototype.activate = function () {
				this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder);
			}),
			(s.prototype.deactivate = function () {
				this.parent.element.removeChild(this.holder), i.prototype.destroy.call(this);
			}),
			(s.prototype.setDots = function () {
				var t = this.parent.slides.length - this.dots.length;
				t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t);
			}),
			(s.prototype.addDots = function (t) {
				for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, s = n + t, o = n; o < s; o++) {
					var r = document.createElement("li");
					(r.className = "dot"), r.setAttribute("aria-label", "Page dot " + (o + 1)), e.appendChild(r), i.push(r);
				}
				this.holder.appendChild(e), (this.dots = this.dots.concat(i));
			}),
			(s.prototype.removeDots = function (t) {
				var e = this.dots.splice(this.dots.length - t, t);
				e.forEach(function (t) {
					this.holder.removeChild(t);
				}, this);
			}),
			(s.prototype.updateSelected = function () {
				this.selectedDot && ((this.selectedDot.className = "dot"), this.selectedDot.removeAttribute("aria-current")),
					this.dots.length && ((this.selectedDot = this.dots[this.parent.selectedIndex]), (this.selectedDot.className = "dot is-selected"), this.selectedDot.setAttribute("aria-current", "step"));
			}),
			(s.prototype.onTap = function (t) {
				var e = t.target;
				if ("LI" == e.nodeName) {
					this.parent.uiChange();
					var i = this.dots.indexOf(e);
					this.parent.select(i);
				}
			}),
			(s.prototype.destroy = function () {
				this.deactivate();
			}),
			(e.PageDots = s),
			n.extend(e.defaults, { pageDots: !0 }),
			e.createMethods.push("_createPageDots");
		var o = e.prototype;
		return (
			(o._createPageDots = function () {
				this.options.pageDots &&
					((this.pageDots = new s(this)),
						this.on("activate", this.activatePageDots),
						this.on("select", this.updateSelectedPageDots),
						this.on("cellChange", this.updatePageDots),
						this.on("resize", this.updatePageDots),
						this.on("deactivate", this.deactivatePageDots));
			}),
			(o.activatePageDots = function () {
				this.pageDots.activate();
			}),
			(o.updateSelectedPageDots = function () {
				this.pageDots.updateSelected();
			}),
			(o.updatePageDots = function () {
				this.pageDots.setDots();
			}),
			(o.deactivatePageDots = function () {
				this.pageDots.deactivate();
			}),
			(e.PageDots = s),
			e
		);
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (t, i, n) {
				return e(t, i, n);
			})
			: "object" == typeof module && module.exports
				? (module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")))
				: e(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
	})(window, function (t, e, i) {
		function n(t) {
			(this.parent = t),
				(this.state = "stopped"),
				o &&
				((this.onVisibilityChange = function () {
					this.visibilityChange();
				}.bind(this)),
					(this.onVisibilityPlay = function () {
						this.visibilityPlay();
					}.bind(this)));
		}
		var s, o;
		"hidden" in document ? ((s = "hidden"), (o = "visibilitychange")) : "webkitHidden" in document && ((s = "webkitHidden"), (o = "webkitvisibilitychange")),
			(n.prototype = Object.create(t.prototype)),
			(n.prototype.play = function () {
				if ("playing" != this.state) {
					var t = document[s];
					if (o && t) return void document.addEventListener(o, this.onVisibilityPlay);
					(this.state = "playing"), o && document.addEventListener(o, this.onVisibilityChange), this.tick();
				}
			}),
			(n.prototype.tick = function () {
				if ("playing" == this.state) {
					var t = this.parent.options.autoPlay;
					t = "number" == typeof t ? t : 3e3;
					var e = this;
					this.clear(),
						(this.timeout = setTimeout(function () {
							e.parent.next(!0), e.tick();
						}, t));
				}
			}),
			(n.prototype.stop = function () {
				(this.state = "stopped"), this.clear(), o && document.removeEventListener(o, this.onVisibilityChange);
			}),
			(n.prototype.clear = function () {
				clearTimeout(this.timeout);
			}),
			(n.prototype.pause = function () {
				"playing" == this.state && ((this.state = "paused"), this.clear());
			}),
			(n.prototype.unpause = function () {
				"paused" == this.state && this.play();
			}),
			(n.prototype.visibilityChange = function () {
				var t = document[s];
				this[t ? "pause" : "unpause"]();
			}),
			(n.prototype.visibilityPlay = function () {
				this.play(), document.removeEventListener(o, this.onVisibilityPlay);
			}),
			e.extend(i.defaults, { pauseAutoPlayOnHover: !0 }),
			i.createMethods.push("_createPlayer");
		var r = i.prototype;
		return (
			(r._createPlayer = function () {
				(this.player = new n(this)), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
			}),
			(r.activatePlayer = function () {
				this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this));
			}),
			(r.playPlayer = function () {
				this.player.play();
			}),
			(r.stopPlayer = function () {
				this.player.stop();
			}),
			(r.pausePlayer = function () {
				this.player.pause();
			}),
			(r.unpausePlayer = function () {
				this.player.unpause();
			}),
			(r.deactivatePlayer = function () {
				this.player.stop(), this.element.removeEventListener("mouseenter", this);
			}),
			(r.onmouseenter = function () {
				this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this));
			}),
			(r.onmouseleave = function () {
				this.player.unpause(), this.element.removeEventListener("mouseleave", this);
			}),
			(i.Player = n),
			i
		);
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (i, n) {
				return e(t, i, n);
			})
			: "object" == typeof module && module.exports
				? (module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")))
				: e(t, t.Flickity, t.fizzyUIUtils);
	})(window, function (t, e, i) {
		function n(t) {
			var e = document.createDocumentFragment();
			return (
				t.forEach(function (t) {
					e.appendChild(t.element);
				}),
				e
			);
		}
		var s = e.prototype;
		return (
			(s.insert = function (t, e) {
				var i = this._makeCells(t);
				if (i && i.length) {
					var s = this.cells.length;
					e = void 0 === e ? s : e;
					var o = n(i),
						r = e == s;
					if (r) this.slider.appendChild(o);
					else {
						var a = this.cells[e].element;
						this.slider.insertBefore(o, a);
					}
					if (0 === e) this.cells = i.concat(this.cells);
					else if (r) this.cells = this.cells.concat(i);
					else {
						var l = this.cells.splice(e, s - e);
						this.cells = this.cells.concat(i).concat(l);
					}
					this._sizeCells(i);
					var h = e > this.selectedIndex ? 0 : i.length;
					this._cellAddedRemoved(e, h);
				}
			}),
			(s.append = function (t) {
				this.insert(t, this.cells.length);
			}),
			(s.prepend = function (t) {
				this.insert(t, 0);
			}),
			(s.remove = function (t) {
				var e,
					n,
					s = this.getCells(t),
					o = 0,
					r = s.length;
				for (e = 0; e < r; e++) {
					n = s[e];
					var a = this.cells.indexOf(n) < this.selectedIndex;
					o -= a ? 1 : 0;
				}
				for (e = 0; e < r; e++) (n = s[e]), n.remove(), i.removeFrom(this.cells, n);
				s.length && this._cellAddedRemoved(0, o);
			}),
			(s._cellAddedRemoved = function (t, e) {
				(e = e || 0), (this.selectedIndex += e), (this.selectedIndex = Math.max(0, Math.min(this.slides.length - 1, this.selectedIndex))), this.cellChange(t, !0), this.emitEvent("cellAddedRemoved", [t, e]);
			}),
			(s.cellSizeChange = function (t) {
				var e = this.getCell(t);
				if (e) {
					e.getSize();
					var i = this.cells.indexOf(e);
					this.cellChange(i);
				}
			}),
			(s.cellChange = function (t, e) {
				var i = this.slideableWidth;
				if ((this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("cellChange", [t]), this.options.freeScroll)) {
					var n = i - this.slideableWidth;
					(this.x += n * this.cellAlign), this.positionSlider();
				} else e && this.positionSliderAtSelected(), this.select(this.selectedIndex);
			}),
			e
		);
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (i, n) {
				return e(t, i, n);
			})
			: "object" == typeof module && module.exports
				? (module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")))
				: e(t, t.Flickity, t.fizzyUIUtils);
	})(window, function (t, e, i) {
		"use strict";
		function n(t) {
			if ("IMG" == t.nodeName && t.getAttribute("data-flickity-lazyload")) return [t];
			var e = t.querySelectorAll("img[data-flickity-lazyload]");
			return i.makeArray(e);
		}
		function s(t, e) {
			(this.img = t), (this.flickity = e), this.load();
		}
		e.createMethods.push("_createLazyload");
		var o = e.prototype;
		return (
			(o._createLazyload = function () {
				this.on("select", this.lazyLoad);
			}),
			(o.lazyLoad = function () {
				var t = this.options.lazyLoad;
				if (t) {
					var e = "number" == typeof t ? t : 0,
						i = this.getAdjacentCellElements(e),
						o = [];
					i.forEach(function (t) {
						var e = n(t);
						o = o.concat(e);
					}),
						o.forEach(function (t) {
							new s(t, this);
						}, this);
				}
			}),
			(s.prototype.handleEvent = i.handleEvent),
			(s.prototype.load = function () {
				this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.img.getAttribute("data-flickity-lazyload")), this.img.removeAttribute("data-flickity-lazyload");
			}),
			(s.prototype.onload = function (t) {
				this.complete(t, "flickity-lazyloaded");
			}),
			(s.prototype.onerror = function (t) {
				this.complete(t, "flickity-lazyerror");
			}),
			(s.prototype.complete = function (t, e) {
				this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
				var i = this.flickity.getParentCell(this.img),
					n = i && i.element;
				this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n);
			}),
			(e.LazyLoader = s),
			e
		);
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e)
			: "object" == typeof module &&
			module.exports &&
			(module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")));
	})(window, function (t) {
		return t;
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e)
			: "object" == typeof module && module.exports
				? (module.exports = e(require("flickity"), require("fizzy-ui-utils")))
				: (t.Flickity = e(t.Flickity, t.fizzyUIUtils));
	})(window, function (t, e) {
		function i(t, e, i) {
			return (e - t) * i + t;
		}
		t.createMethods.push("_createAsNavFor");
		var n = t.prototype;
		return (
			(n._createAsNavFor = function () {
				this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
				var t = this.options.asNavFor;
				if (t) {
					var e = this;
					setTimeout(function () {
						e.setNavCompanion(t);
					});
				}
			}),
			(n.setNavCompanion = function (i) {
				i = e.getQueryElement(i);
				var n = t.data(i);
				if (n && n != this) {
					this.navCompanion = n;
					var s = this;
					(this.onNavCompanionSelect = function () {
						s.navCompanionSelect();
					}),
						n.on("select", this.onNavCompanionSelect),
						this.on("staticClick", this.onNavStaticClick),
						this.navCompanionSelect(!0);
				}
			}),
			(n.navCompanionSelect = function (t) {
				if (this.navCompanion) {
					var e = this.navCompanion.selectedCells[0],
						n = this.navCompanion.cells.indexOf(e),
						s = n + this.navCompanion.selectedCells.length - 1,
						o = Math.floor(i(n, s, this.navCompanion.cellAlign));
					if ((this.selectCell(o, !1, t), this.removeNavSelectedElements(), !(o >= this.cells.length))) {
						var r = this.cells.slice(n, s + 1);
						(this.navSelectedElements = r.map(function (t) {
							return t.element;
						})),
							this.changeNavSelectedClass("add");
					}
				}
			}),
			(n.changeNavSelectedClass = function (t) {
				this.navSelectedElements.forEach(function (e) {
					e.classList[t]("is-nav-selected");
				});
			}),
			(n.activateAsNavFor = function () {
				this.navCompanionSelect(!0);
			}),
			(n.removeNavSelectedElements = function () {
				this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements);
			}),
			(n.onNavStaticClick = function (t, e, i, n) {
				"number" == typeof n && this.navCompanion.selectCell(n);
			}),
			(n.deactivateAsNavFor = function () {
				this.removeNavSelectedElements();
			}),
			(n.destroyAsNavFor = function () {
				this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion);
			}),
			t
		);
	}),
	(function (t, e) {
		"use strict";
		"function" == typeof define && define.amd
			? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (i) {
				return e(t, i);
			})
			: "object" == typeof module && module.exports
				? (module.exports = e(t, require("ev-emitter")))
				: (t.imagesLoaded = e(t, t.EvEmitter));
	})("undefined" != typeof window ? window : this, function (t, e) {
		function i(t, e) {
			for (var i in e) t[i] = e[i];
			return t;
		}
		function n(t) {
			if (Array.isArray(t)) return t;
			var e = "object" == typeof t && "number" == typeof t.length;
			return e ? h.call(t) : [t];
		}
		function s(t, e, o) {
			if (!(this instanceof s)) return new s(t, e, o);
			var r = t;
			return (
				"string" == typeof t && (r = document.querySelectorAll(t)),
				r
					? ((this.elements = n(r)),
						(this.options = i({}, this.options)),
						"function" == typeof e ? (o = e) : i(this.options, e),
						o && this.on("always", o),
						this.getImages(),
						a && (this.jqDeferred = new a.Deferred()),
						void setTimeout(this.check.bind(this)))
					: void l.error("Bad element for imagesLoaded " + (r || t))
			);
		}
		function o(t) {
			this.img = t;
		}
		function r(t, e) {
			(this.url = t), (this.element = e), (this.img = new Image());
		}
		var a = t.jQuery,
			l = t.console,
			h = Array.prototype.slice;
		(s.prototype = Object.create(e.prototype)),
			(s.prototype.options = {}),
			(s.prototype.getImages = function () {
				(this.images = []), this.elements.forEach(this.addElementImages, this);
			}),
			(s.prototype.addElementImages = function (t) {
				"IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
				var e = t.nodeType;
				if (e && c[e]) {
					for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
						var s = i[n];
						this.addImage(s);
					}
					if ("string" == typeof this.options.background) {
						var o = t.querySelectorAll(this.options.background);
						for (n = 0; n < o.length; n++) {
							var r = o[n];
							this.addElementBackgroundImages(r);
						}
					}
				}
			});
		var c = { 1: !0, 9: !0, 11: !0 };
		return (
			(s.prototype.addElementBackgroundImages = function (t) {
				var e = getComputedStyle(t);
				if (e)
					for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
						var s = n && n[2];
						s && this.addBackground(s, t), (n = i.exec(e.backgroundImage));
					}
			}),
			(s.prototype.addImage = function (t) {
				var e = new o(t);
				this.images.push(e);
			}),
			(s.prototype.addBackground = function (t, e) {
				var i = new r(t, e);
				this.images.push(i);
			}),
			(s.prototype.check = function () {
				function t(t, i, n) {
					setTimeout(function () {
						e.progress(t, i, n);
					});
				}
				var e = this;
				return (
					(this.progressedCount = 0),
					(this.hasAnyBroken = !1),
					this.images.length
						? void this.images.forEach(function (e) {
							e.once("progress", t), e.check();
						})
						: void this.complete()
				);
			}),
			(s.prototype.progress = function (t, e, i) {
				this.progressedCount++,
					(this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
					this.emitEvent("progress", [this, t, e]),
					this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
					this.progressedCount == this.images.length && this.complete(),
					this.options.debug && l && l.log("progress: " + i, t, e);
			}),
			(s.prototype.complete = function () {
				var t = this.hasAnyBroken ? "fail" : "done";
				if (((this.isComplete = !0), this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
					var e = this.hasAnyBroken ? "reject" : "resolve";
					this.jqDeferred[e](this);
				}
			}),
			(o.prototype = Object.create(e.prototype)),
			(o.prototype.check = function () {
				var t = this.getIsImageComplete();
				return t
					? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
					: ((this.proxyImage = new Image()),
						this.proxyImage.addEventListener("load", this),
						this.proxyImage.addEventListener("error", this),
						this.img.addEventListener("load", this),
						this.img.addEventListener("error", this),
						void (this.proxyImage.src = this.img.src));
			}),
			(o.prototype.getIsImageComplete = function () {
				return this.img.complete && this.img.naturalWidth;
			}),
			(o.prototype.confirm = function (t, e) {
				(this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
			}),
			(o.prototype.handleEvent = function (t) {
				var e = "on" + t.type;
				this[e] && this[e](t);
			}),
			(o.prototype.onload = function () {
				this.confirm(!0, "onload"), this.unbindEvents();
			}),
			(o.prototype.onerror = function () {
				this.confirm(!1, "onerror"), this.unbindEvents();
			}),
			(o.prototype.unbindEvents = function () {
				this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
			}),
			(r.prototype = Object.create(o.prototype)),
			(r.prototype.check = function () {
				this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url);
				var t = this.getIsImageComplete();
				t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
			}),
			(r.prototype.unbindEvents = function () {
				this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
			}),
			(r.prototype.confirm = function (t, e) {
				(this.isLoaded = t), this.emitEvent("progress", [this, this.element, e]);
			}),
			(s.makeJQueryPlugin = function (e) {
				(e = e || t.jQuery),
					e &&
					((a = e),
						(a.fn.imagesLoaded = function (t, e) {
							var i = new s(this, t, e);
							return i.jqDeferred.promise(a(this));
						}));
			}),
			s.makeJQueryPlugin(),
			s
		);
	}),
	(function (t, e) {
		"function" == typeof define && define.amd
			? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (i, n) {
				return e(t, i, n);
			})
			: "object" == typeof module && module.exports
				? (module.exports = e(t, require("flickity"), require("imagesloaded")))
				: (t.Flickity = e(t, t.Flickity, t.imagesLoaded));
	})(window, function (t, e, i) {
		"use strict";
		e.createMethods.push("_createImagesLoaded");
		var n = e.prototype;
		return (
			(n._createImagesLoaded = function () {
				this.on("activate", this.imagesLoaded);
			}),
			(n.imagesLoaded = function () {
				function t(t, i) {
					var n = e.getParentCell(i.img);
					e.cellSizeChange(n && n.element), e.options.freeScroll || e.positionSliderAtSelected();
				}
				if (this.options.imagesLoaded) {
					var e = this;
					i(this.slider).on("progress", t);
				}
			}),
			e
		);
	});




