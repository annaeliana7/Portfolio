function myFunction() {
  var x = document.getElementById("ham-bu");
  if (x.style.display === "block") {
   x.style.display = "none";
 } else {
    x.style.display = "block";
 }
}

// const navbarHamburger = document.querySelector('#hamb-bu');
// const mobileMenu = document.querySelector('#mobile-menu');
// const cross = document.querySelector('#cross-button');
// navbarHamburger.addEventListener('click', () => {
//   mobileMenu.style.display = 'block';
// });

// cross.addEventListener('click', () => {
//   mobileMenu.style.display = 'none';
// });

// document.querySelectorAll('.nav-link').forEach(
//   (link) => {
//     link.addEventListener('click', () => {
//       mobileMenu.style.display = 'none';
//     });
//   },
// );

