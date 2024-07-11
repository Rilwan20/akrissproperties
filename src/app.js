const howItWork = document.querySelectorAll('.a');
const howItWorksContainer = document.querySelector('.how_it_work_container');

const openWork = e => {
  const selectedWorkParent = e.target.closest('.how_it_work');

  if (!selectedWorkParent) return;
  const all = howItWork;

  all.forEach(each => {
    if (
      each.classList.contains('open') ||
      each.closest(`.how_it_work`).classList.contains('color')
    ) {
      each.classList.remove('open');
      each.closest(`.how_it_work`).classList.remove('color');
    } else {
      document
        .querySelector(`.a_${selectedWorkParent.dataset.show}`)
        .classList.toggle('open');
      document
        .querySelector(`.work_${selectedWorkParent.dataset.show}`)
        .classList.toggle('color');
    }
  });
};

howItWorksContainer.addEventListener('click', openWork);

const slider = () => {
  const clients = document.querySelectorAll('.client');
  const dotContainer = document.querySelector('.dots');

  let currentSlide = 0;
  const maxSlide = clients.length;

  const createDots = () => {
    clients.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `
        <button class="dots__dot" data-slide="${i}"></button>
        `
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    clients.forEach(
      (s, i) => (
        (s.style.transform = `translateX(${100 * (i - slide)}px)`), 0, 0
      )
    );
    // document.querySelector('.view').style.transform = `translate3d(${
    //   300 * slide
    // })px`;
    // clients.forEach(
    //   (s, i) => (s.style.transform = `translate3d(${100 * (i - slide)}px)`, 0, 0)
    // );
  };
  setInterval(() => {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  }, 5000);

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();
