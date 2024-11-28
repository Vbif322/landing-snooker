class Carousel {
  constructor(setting) {
    let privates = {};

    /* Начальные параметры */
    privates.setting = setting;

    privates.sel = {
      main: document.querySelector(privates.setting.main),
      wrap: document.querySelector(privates.setting.wrap),
      children: document.querySelector(privates.setting.wrap).children,
      prev: document.querySelector(privates.setting.prev),
      next: document.querySelector(privates.setting.next),
      dots: document.querySelectorAll(privates.setting.dots),
    };

    privates.opt = {
      position: 1,
      max_position: document.querySelector(privates.setting.wrap).children
        .length,
    };

    privates.sel.dots[privates.opt.position].classList.add("active");

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

    if (privates.sel.dots !== null) {
      for (let i = 0; i < privates.sel.dots.length; i++) {
        privates.sel.dots[i].addEventListener("click", () => {
          privates.sel.dots[privates.opt.position].classList.remove("active");
          privates.sel.dots[i].classList.add("active");
          privates.opt.position = i;
          privates.sel.wrap.style["transform"] = `translateX(${-(
            i * 72 -
            72
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
        privates.opt.position * 72 -
        72
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
        privates.opt.position * 72 -
        72
      )}%)`;
    };
  }
}

new Carousel({
  main: ".carousel",
  wrap: ".carousel__inner",
  prev: ".carousel__prev",
  next: ".carousel__next",
  dots: ".carousel__dot",
});
