const slider_html = document.querySelectorAll(".testimonial-slider");

slider_html.forEach((elem) => {
    let autoPlay = Number(elem.dataset.autoplay);

    const slider = new Flickity(elem, {
        pageDots: false,
        autoPlay: autoPlay,
        wrapAround: true,
        pauseAutoPlayOnHover: false,
        cellAlign: "left"
    });
});


