const howItWork = document.querySelectorAll('.a');
const howItWorksContainer = document.querySelector('.how_it_work_container');

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
