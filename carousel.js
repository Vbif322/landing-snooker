class Carousel {
  constructor(setting) {
    let privates = {};

    /* Начальные параметры */
    privates.setting = setting;

    const carousel = document.getElementById(privates.setting.id);

    privates.sel = {
      main: carousel.querySelector(privates.setting.main),
      wrap: carousel.querySelector(privates.setting.wrap),
      children: carousel.querySelector(privates.setting.wrap).children,
      prev: carousel.querySelector(privates.setting.prev),
      next: carousel.querySelector(privates.setting.next),
      dots: carousel.querySelectorAll(privates.setting.dots),
      control: carousel.querySelectorAll(privates.setting.control),
    };

    privates.opt = {
      position: 0,
      max_position: document.querySelector(privates.setting.wrap).children
        .length,
    };

    if (privates.sel.dots.length) {
      privates.sel.dots[privates.opt.position].classList.add("active");
    }

    // Управление
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

    if (privates.sel.dots && privates.sel.dots !== null) {
      for (let i = 0; i < privates.sel.dots.length; i++) {
        privates.sel.dots[i].addEventListener("click", () => {
          privates.sel.dots[privates.opt.position].classList.remove("active");
          privates.sel.dots[i].classList.add("active");
          privates.opt.position = i;
          privates.sel.wrap.style["transform"] = `translateX(${-(i * 100)}%)`;
        });
      }
    }

    if (privates.sel.control && privates.sel.control !== null) {
      for (let i = 0; i < privates.sel.control.length; i++) {
        privates.sel.control[i].addEventListener("click", () => {
          const slide = Number(privates.sel.control[i].dataset.slide);
          privates.sel.dots[privates.opt.position].classList.remove("active");
          privates.sel.dots[slide].classList.add("active");
          privates.opt.position = slide;
          privates.sel.wrap.style["transform"] = `translateX(${-(
            Number(privates.sel.control[i].dataset.slide) * 100
          )}%)`;
        });
      }
    }

    // Предыдущий слайд
    this.prev_slide = () => {
      privates.sel.dots[privates.opt.position].classList.remove("active");
      if (privates.opt.position <= 0) {
        privates.sel.dots[privates.opt.max_position - 1].classList.add(
          "active"
        );
      } else {
        privates.sel.dots[privates.opt.position - 1].classList.add("active");
      }
      --privates.opt.position;

      if (privates.opt.position < 0) {
        privates.opt.position = privates.opt.max_position - 1;
      }
      privates.sel.wrap.style["transform"] = `translateX(${-(
        privates.opt.position * 100
      )}%)`;
    };

    // Следущий слайд
    this.next_slide = () => {
      privates.sel.dots[privates.opt.position].classList.remove("active");
      if (privates.opt.position >= privates.opt.max_position - 1) {
        privates.sel.dots[0].classList.add("active");
      } else {
        privates.sel.dots[privates.opt.position + 1].classList.add("active");
      }
      ++privates.opt.position;

      if (privates.opt.position >= privates.opt.max_position) {
        privates.opt.position = 0;
      }

      privates.sel.wrap.style["transform"] = `translateX(${-(
        privates.opt.position * 100
      )}%)`;
    };
  }
}

new Carousel({
  id: "carousel",
  main: ".carousel",
  wrap: ".carousel__inner",
  prev: ".carousel__prev",
  next: ".carousel__next",
  dots: ".carousel__dot",
});

new Carousel({
  id: "features",
  main: ".carousel",
  wrap: ".carousel__inner",
  prev: ".carousel__prev",
  next: ".carousel__next",
  dots: ".carousel__dot",
  control: ".color",
});

new Carousel({
  id: "stream",
  main: ".stream__carousel",
  wrap: ".stream__carousel__inner",
  prev: ".stream__chevron-left",
  next: ".stream__chevron-right",
  dots: ".carousel__dot",
});
