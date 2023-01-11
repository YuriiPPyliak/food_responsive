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
        

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}