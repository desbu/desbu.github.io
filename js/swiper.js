const swiper = new Swiper('.swiper', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 3000,
	},
	speed: 1000,
	loop: true,
	keyboard: {
		enabled: true,
	},
});