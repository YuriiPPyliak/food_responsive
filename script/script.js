$('.slider').slick({
	dots: true,
	arrows: false,
	infinite: false,
	speed: 500,
	slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipe: true,
    touchMove: true,
	responsive: [
		{
	breakpoint: 1023,
	settings: {
	slidesToShow: 1,
	slidesToScroll: 1
		}
		}
		]
		});