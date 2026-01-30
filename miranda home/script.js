const slides = document.querySelectorAll('.slide');
let index = 0;

function trocarSlide() {
    // remove o active de todos
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // adiciona active no slide atual
    slides[index].classList.add('active');

    // próximo slide
    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

// troca a cada 3 segundos
setInterval(trocarSlide, 3000);
