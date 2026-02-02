const slides = document.querySelectorAll('.slide');
let index = 0;
function trocarSlide() {
    
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');

    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

setInterval(trocarSlide, 3000);
