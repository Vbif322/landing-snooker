// Обработчик прокрутки слайдов карусели

// let activeSlideIndex = 0;

// const carousel = document.querySelector(".carousel__inner");
// const prevButton = document.querySelector(".carousel__prev");
// const nextButton = document.querySelector(".carousel__next");

// const slides = carousel.querySelectorAll(".card");

// const slideButtons = document.querySelectorAll(".carousel__dot");

// const goToSlide = (i) => {
//   carousel.style.transform = `translateX(-${i * 100}%)`;
//   activeSlideIndex = i;
// };

// prevButton.addEventListener("click", () => {
//   if (activeSlideIndex === 0) {
//     goToSlide(slideButtons.length - 1);
//   } else {
//     goToSlide(activeSlideIndex - 1);
//   }
// });

// nextButton.addEventListener("click", () => {
//   if (activeSlideIndex === slideButtons.length) {
//     goToSlide(0);
//   } else {
//     goToSlide(activeSlideIndex + 1);
//   }
// });

function Carousel(setting) {
  /* Scope privates methods and properties */
  let privates = {};

  /* Privates properties */
  privates.setting = setting;

  privates.sel = {
    main: document.querySelector(privates.setting.main),
    wrap: document.querySelector(privates.setting.wrap),
    children: document.querySelector(privates.setting.wrap).children,
    prev: document.querySelector(privates.setting.prev),
    next: document.querySelector(privates.setting.next),
  };

  privates.opt = {
    position: 0,
    max_position: document.querySelector(privates.setting.wrap).children.length,
  };

  // Control
  if (privates.sel.prev !== null) {
    privates.sel.prev.addEventListener("click", () => {
      this.prev_slide();
    });
  }

  if (privates.sel.next !== null) {
    privates.sel.next.addEventListener("click", () => {
      this.next_slide();
    });
  }

  // Prev slide
  this.prev_slide = () => {
    --privates.opt.position;

    if (privates.opt.position < 0) {
      privates.sel.wrap.classList.add("s-notransition");
      privates.opt.position = privates.opt.max_position - 1;
    }

    privates.sel.wrap.style[
      "transform"
    ] = `translateX(-${privates.opt.position}00%)`;
  };

  // Next slide
  this.next_slide = () => {
    ++privates.opt.position;

    if (privates.opt.position >= privates.opt.max_position) {
      privates.opt.position = 0;
    }

    privates.sel.wrap.style[
      "transform"
    ] = `translateX(-${privates.opt.position}00%)`;
  };
}

new Carousel({
  main: ".carousel",
  wrap: ".carousel__inner",
  prev: ".carousel__prev",
  next: ".carousel__next",
});
