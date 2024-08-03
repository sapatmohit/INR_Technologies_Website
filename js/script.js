document.addEventListener('DOMContentLoaded', function () {
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});
});

window.addEventListener('scroll', function () {
	if (this.pageYOffset > 60) {
		document.querySelector('.navbar').classList.add('sticky');
	} else {
		document.querySelector('.navbar').classList.remove('sticky');
	}
});

window.addEventListener('scroll', function () {
	const navbar = document.querySelector('.navbar');
	if (window.pageYOffset > 60) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}

	const sections = document.querySelectorAll('.section');
	const navItems = document.querySelectorAll('.nav-item');

	let currentSection = '';

	sections.forEach((section) => {
		const sectionTop = section.offsetTop - 100;
		const sectionHeight = section.clientHeight;
		if (
			window.pageYOffset >= sectionTop &&
			window.pageYOffset < sectionTop + sectionHeight
		) {
			currentSection = section.getAttribute('id');
		}
	});

	navItems.forEach((item) => {
		item.classList.remove('active');
		if (
			item.querySelector('a').getAttribute('href').substring(1) ===
			currentSection
		) {
			item.classList.add('active');
		}
	});
});
