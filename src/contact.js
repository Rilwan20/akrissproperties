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
