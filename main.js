const divMenu = document.querySelector('.mobile-menu');
const crossButton = document.querySelector('.cross-button');
const hamburgerButton = document.querySelector('.hamb-bu');

const myFunction = () => {
  divMenu.classList.toggle('display');
};

crossButton.addEventListener('click', () => {
  myFunction();
});

hamburgerButton.addEventListener('click', () => {
  myFunction();
});
