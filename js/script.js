const burger = document.querySelector('.burger-menu');
function burgerClick() {
  let burgerMenu = document.querySelector('#burger')
  burgerMenu.classList.toggle('active');
};
burger.addEventListener('click', burgerClick);