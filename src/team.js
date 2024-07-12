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
