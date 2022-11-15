var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.getElementsByTagName("head")[0].appendChild(script);
window.onload = function () {

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

$(".mobile-menu li a").on("click", function () {
    $("#cross-button").click();
  });
}
