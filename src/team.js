const allMembers = document.querySelectorAll('.team-member');

const display = e => {
  e.target.querySelector('.email').classList.add('open');
};

allMembers.forEach(each => each.addEventListener('mouseenter', display));
allMembers.forEach(each =>
  each.addEventListener('mouseleave', e =>
    e.target.querySelector('.email').classList.remove('open')
  )
);

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
