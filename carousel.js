// Обработчик прокрутки слайдов карусели

let activeSlideIndex = 0;

const carousel = document.querySelector(".carousel__inner");
const prevButton = document.querySelector(".carousel__prev");
const nextButton = document.querySelector(".carousel__next");

const slides = carousel.querySelectorAll(".card");

const slideButtons = carousel.querySelectorAll(".carousel__dot");

const goToSlide = (i) => {
  carousel.style.transform = `translateX(-${i * 100}%)`;
};

prevButton.addEventListener("click", () => {
  if (activeSlideIndex === 0) {
    goToSlide(slideButtons.length - 1);
  } else {
    goToSlide(activeSlideIndex - 1);
  }
});
