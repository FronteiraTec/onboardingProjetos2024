const slides = document.querySelectorAll(".slides img");
const buttons = document.querySelectorAll(".slider input");

console.log(buttons.length)

let index = 0;
let intervalId = null;

initializeSlider();

function initializeSlider() {
    slides[index].classList.add("displaySlide");
    buttons[index].classList.add("active");
    //setInterval(nextSlide, 5);
}

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    buttons[index].classList.add("active");
    slides[index].classList.add("displaySlide");

}

function prevSlide() {

    buttons[index].classList.remove("checked");

    if (index == 0) {
        index = slides.length;
    }

    index--;
    showSlide(index);

}

function nextSlide() {

    if (index == slides.length-1) {
        index = -1;
    }

    index++;    
    showSlide(index);

}

function selectSlide(index) {
    index = index;
    showSlide(index);
}
  
