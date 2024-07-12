const howItWork = document.querySelectorAll('.a');
const howItWorksContainer = document.querySelector('.how_it_work_container');

// How it works functionality
const openWork = e => {
  const selectedWorkParent = e.target.closest('.how_it_work');

  if (!selectedWorkParent) return;
  const all = howItWork;

  all.forEach(each => {
    if (
      each.classList.contains('open') ||
      each.closest(`.how_it_work`).classList.remove('open')
    ) {
      each.classList.remove('open');
      each.closest(`.how_it_work`).classList.remove('color');
    } else {
      document
        .querySelector(`.a_${selectedWorkParent.dataset.show}`)
        .classList.add('open');
      document
        .querySelector(`.work_${selectedWorkParent.dataset.show}`)
        .classList.add('color');
    }
  });
};

howItWorksContainer.addEventListener('click', openWork);

// Navigation functionality

const NavBar = document.querySelector('#bars');

const Navs = document.querySelector('#navs');

const LoadEvenListerners = () => {
  NavBar.addEventListener('click', toogleNavs);
};

const toogleNavs = () => {
  Navs.classList.toggle('show');
  NavBar.classList.toggle('active');
};

LoadEvenListerners();

// Revealing Section on Scroll

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Scroll onto view

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  } else {
    const select = e.target.closest('.text-xs').getAttribute('href');

    window.location.href = `${select}`;
  }
});
