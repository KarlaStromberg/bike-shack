const testimonial_slide = document.querySelector(".testimonial-slider");
const slider = new Flickity(testimonial_slide, {
	// options
	cellAlign: "left",
	wrapAround: true,
	autoPlay: 5000,
	pageDots: false,
	autoPlay: false,
    pauseAutoPlayOnHover: false
});