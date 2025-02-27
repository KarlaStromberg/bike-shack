const slider_html = document.querySelector(".testimonial-slider");
const slider = new Flickity(slider_html, {
	pageDots: false,
    autoPlay: false,
    wrapAround: true,
    pauseAutoPlayOnHover: false,
    cellAlign: "left"
});