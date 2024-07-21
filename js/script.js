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
